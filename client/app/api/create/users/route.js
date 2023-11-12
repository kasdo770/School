import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")
import { headers } from 'next/headers'
import { validateToken } from '@/middleware/validations/token'



export async function POST(request) {
    const body = await request.json()

    const role = body.role.toLowerCase()

    const { createUtility } = require("@/middleware/creations/" + role)

    const headersList = headers()


    const school = validateToken(headersList)

    const utility = await createUtility(body)



    let theclass = await prisma.class.findFirst({
        where: {
            grade: body.grade,
            name: body.class,
            schoolId: school.id
        }
    })




    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            ID: body.ID,
            role: body.role,
            password: body.password,
            school: {
                connect: {
                    id: school.id
                }
            },
            Utility: utility
        }
    })

    if (body.role == 'Student') {
        console.log(body.gradename, body.grade)
        if (theclass == null) {
            theclass = await prisma.class.create({
                data: {
                    grade: body.grade,
                    name: body.gradename,
                    School: {
                        connect: {
                            id: school.id
                        }
                    }
                }
            })
        }

        await prisma.user.update({
            where: {
                id: newUser.id
            },
            data: {
                Class: {
                    connect: {
                        id: theclass.id
                    }
                }
            }
        })
        await prisma.user.create({
            data: {
                name: (body.name.split(" ")[1] + (body.name.split(" ")[2])),
                ID: body.fatherID,
                role: "Parent",
                password: body.fatherpassword,
                school: {
                    connect: {
                        id: school.id
                    }
                },
                Utility: newUser
            }
        })

    }


    return Response.json(newUser)
}