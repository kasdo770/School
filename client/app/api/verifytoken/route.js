const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")
import { headers } from 'next/headers'

export async function GET() {
    const headersList = headers()
    const auth = headersList.get('authorization').split(" ")[1]

    const user = jwt.verify(auth, process.env.SECRET_TOKEN)



    return Response.json(user)
}