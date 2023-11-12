const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")

export function validateToken(headersList) {

    const auth = headersList.get('authorization')

    const user = jwt.verify(auth, process.env.SECRET_TOKEN)

    return user
}