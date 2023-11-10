import dbConnect from "@/middleware/mongodb";
const { prisma } = require("@/lib/prisma")
const { ValidateName } = require("@/middleware/validations/create/school")
export async function POST(request) {
    const body = await request.json()
    const role = body.role.toLowerCase()
    const { createUtility } = require("@/middleware/creations/" + role)

    const utility = await createUtility(body)

    let theclass = await prisma.class.findFirst({
        where: {
            grade: body.grade,
            name: body.class,
            schoolId: body.school
        }
    })

    if (theclass == null) {
        theclass = await prisma.class.create({
            data: {
                grade: body.grade,
                name: body.class,
                School: {
                    connect: {
                        id: body.school
                    }
                }
            }
        })
    }



    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            contactNo: body.contactNo,
            ID: body.ID,
            role: body.role,
            password: body.password,
            school: {
                connect: {
                    id: body.school
                }
            },
            Class: {
                connect: {
                    id: theclass.id
                }
            },
            Utility: utility
        }
    })


    return Response.json(newUser)
}