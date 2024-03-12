import { Hono, Context, Next } from 'hono';
import { decode, verify } from 'hono/jwt'

export async function authenticationMiddleware(c: Context, next: Next) {
    try {
        const jwt = c.req.header('Authorization')
        if (!jwt || !jwt.startsWith('Bearer ')) {
            c.status(401);
            return c.json({ message: "Please provide a valid authorization token!" });
        }
        const token = jwt.split(' ')[1]
        const verifiedToken = await verify(token, c.env.JWT_SECRET)
        if (verifiedToken) {
            const { payload } = decode(token)
            c.status(200)
            c.set('userId', payload.id)
            await next()
        }
        else {
            c.status(403)
            c.json({ message: "Invalid or expired token! Please sign in again." })
        }
    } catch (error) {
        console.log(error)
        c.status(500);
        return c.json({ message: "Error in authentication middleware" });
    }
} 