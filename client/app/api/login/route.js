const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")
export async function POST(request) {
    const body = await request.json()

    console.log(body)

    const School = await prisma.school.findFirst({
        where: {
            ID: body.ID,
            password: body.password
        }
    })

    const User = await prisma.user.findFirst({
        where: {
            ID: body.ID,
            password: body.password
        }
    })


    const token = jwt.sign(User != null ? User : School, process.env.SECRET_TOKEN, { expiresIn: '1h' })

    return Response.json(token)
}