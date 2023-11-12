import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")
import { headers } from 'next/headers'
import { validateToken } from '@/middleware/validations/token'



export async function POST(request) {
    const body = await request.json()

    const role = body.role.toLowerCase()

    console.log(body)

    const { createUtility } = require("@/middleware/creations/" + role)

    const headersList = headers()


    const school = validateToken(headersList)

    const utility = await createUtility(body)

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

    console.log(school.id)



    if (body.role == 'Student') {
        let theclass = await prisma.class.findFirst({
            where: {
                grade: body.grade,
                name: body.class,
                schoolId: school.id
            }
        })
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
        const parent = await prisma.user.findFirst({
            where: {
                ID: body.fatherID
            }
        })

        if (parent == null) {
            await prisma.user.create({
                data: {
                    name: ((body.name.split(" ")[1] + (body.name.split(" ")[2])) ? (body.name.split(" ")[1] + (body.name.split(" ")[2])) : body.name),
                    ID: body.fatherID,
                    role: "Parent",
                    password: body.fatherpassword,
                    school: {
                        connect: {
                            id: school.id
                        }
                    },
                    Utility: [newUser.id]
                }
            })
        }
        await prisma.user.update({
            where: {
                ID: body.fatherID
            },
            data: {
                Utility: [parent.Utility, newUser.id]
            }
        })

    }


    return Response.json(newUser)
}