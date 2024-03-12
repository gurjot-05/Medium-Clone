import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { authenticationMiddleware } from '../middlewares/authenticationMiddleware';
import { createBlog, updateBlog } from '@gurjot_05/medium-common';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use('/*', authenticationMiddleware)

blogRouter.post('/', async (c) => {
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = createBlog.safeParse(body)
    if (!success) {
        c.status(400);
        return c.json({ message: "Please provide correct data!" })
    }
    const blogData: { title: string; content: string; authorId: string; published: boolean } = {
        title: body.title,
        content: body.content,
        authorId: userId,
        published: true
    }
    try {
        const post = await prisma.post.create({
            data: blogData,
        });
        c.status(201)
        return c.json({
            id: post.id,
            message: "Posted successfully!"
        });
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while creating the post!" })
    } finally {
        await prisma.$disconnect();
    }
})

blogRouter.put('/', async (c) => {
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = updateBlog.safeParse(body)
    if (!success) {
        c.status(400);
        return c.json({ message: "Please provide correct data!" })
    }

    const blogData: { title: string; content: string; published: boolean; authorId: string } = {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId
    }
    try {
        await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: blogData
        });
        c.status(201)
        return c.json({
            message: "Post updated successfully!"
        });
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while updating the post!" })
    } finally {
        await prisma.$disconnect();
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try {
        const posts = await prisma.post.findMany({
            where: {
                published: true
            },
            select: {
                title: true,
                content: true,
                authorId: true,
                id: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!posts || posts.length == 0) {
            c.status(404);
            return c.json({ message: "No blogs found!" });
        }
        const postDetails = posts.map(post => {
            return {
                Title: post.title,
                AuthorId: post.authorId,
                Content: post.content,
                AuthorName: post.author.name,
                Id: post.id
            };
        });
        c.status(200)
        return c.json({ blogs: postDetails });
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while retrieving the blogs!" })
    } finally {
        await prisma.$disconnect();
    }
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = c.req.param('id')

    if (!id) {
        c.status(400);
        return c.json({ message: "Please provide correct data!" })
    }
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id
            },
            select: {
                title: true,
                content: true,
                authorId: true,
                id: true,
                published: true,
                author: {
                    select: {
                        name: true
                    }
                }
            }
        });
        if (!post || post.published == false) {
            c.status(404);
            return c.json({ message: "Blog not found!" });
        }
        c.status(200)
        return c.json({
            Title: post.title,
            AuthorName: post.author.name,
            Content: post.content,
            Id: post.id
        });
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while retrieving the blog!" })
    } finally {
        await prisma.$disconnect();
    }
})