import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signinInput, signupInput } from '@gurjot_05/medium-common';

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string
    }
}>();

// async function hashPassword(password: string) {
//     const passwordBuffer = new TextEncoder().encode(password);
//     const digestBuffer = await crypto.subtle.digest('SHA-256', passwordBuffer);
//     const hashedPasswordArray = Array.from(new Uint8Array(digestBuffer));
//     const hashedPassword = hashedPasswordArray.map(byte => String.fromCharCode(byte)).join('');
//     return hashedPassword;
// }

userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body)

    if (!success) {
        c.status(400);
        return c.json({ message: "Please provide correct inputs!" })
    }

    try {
        // const hashedPassword = await hashPassword(body.password)
        const userData: { email: string; password: string; name?: string } = {
            email: body.email,
            password: body.password,
        }
        if (body.name) {
            userData.name = body.name;
        }
        const user = await prisma.user.create({
            data: userData
        })
        const token = await sign({ id: user.id }, c.env.JWT_SECRET)
        c.status(201);
        return c.json({
            token: token,
            name: user.name,
            message: "Signup Successful!"
        })
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while signing up!" })
    } finally {
        await prisma.$disconnect();
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const { success } = signinInput.safeParse(body)
    if (!success) {
        c.status(400);
        return c.json({ message: "Please provide correct inputs!" })
    }

    try {
        // const hashedPassword = await hashPassword(body.password)
        const user = await prisma.user.findUnique({
            where: {
                email: body.email
            }
        })
        if (user && user.password == body.password) {
            const token = await sign({ id: user.id }, c.env.JWT_SECRET)
            c.status(200);
            return c.json({
                token: token,
                name: user.name,
                message: "Signed In Successfully!"
            })
        }
        else {
            c.status(401);
            return c.json({ message: "Please enter the correct Username & Password!" })
        }
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error while signing up!" })
    } finally {
        await prisma.$disconnect();
    }
})