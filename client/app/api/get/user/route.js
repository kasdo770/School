const { prisma } = require("@/lib/prisma")
const jwt = require("jsonwebtoken")
import { validateToken } from '@/middleware/validations/token'
import { headers } from 'next/headers'

export async function GET() {
    const headersList = headers()

    const user = validateToken(headersList)

    let students

    const theuser = await prisma.user.findFirst({
        where: {
            ID: user.ID
        },
        include: {
            Class: true,
            Report: true
        }
    })

    for (let index = 0; index < theuser.Utility.length; index++) {
        const element = theuser.Utility[index];
        students = await prisma.user.findMany({
            where: {
                id: element.id
            }
        })
    }


    return Response.json(theuser, { students: (students ? students : null) })
}