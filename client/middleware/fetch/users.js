const School = require("@/models/Admin/School")
const { prisma } = require("@/lib/prisma")

export async function getSchool(name, ID) {
    const TheSchool = (await prisma.School.findFirst({
        where: {
            name: name
        }
    }) || await prisma.School.findFirst({
        where: {
            ID: ID
        }
    }))

    return TheSchool != null ? { pass: "success", data: TheSchool, log: "Found it" } :
        { pass: "error", data: null, log: "No school by this ID" }
}