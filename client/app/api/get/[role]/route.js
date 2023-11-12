const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")
import { validateToken } from '@/middleware/validations/token'
import { headers } from 'next/headers'

export async function GET(request, { params }) {
    const headersList = headers()


    const school = validateToken(headersList)

    const role = params.role
    const users = await prisma.user.findMany({
        where: {
            schoolId: school.id,
            role: (role.charAt(0).toUpperCase() + role.slice(1))
        },
        include: {
            Class: true
        }
    })


    return Response.json(users)
}