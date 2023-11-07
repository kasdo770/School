import dbConnect from "@/middleware/mongodb";
const School = require("@/models/Admin/School")
const { ValidateName } = require("@/middleware/validations/create/school")

export async function POST(request) {
    await dbConnect();
    const body = await request.json()

    const { pass, log } = await ValidateName(body.name)

    if (pass == false) return Response.json(log)



    const newSchool = await School.create({
        name: body.name,
        contactNo: body.contactNo,
        ID: body.ID,
        password: (Math.random() * 1000000).toString(36).replace('.', ''),
        school: [],
        role: [],
        utilities: [],
    })


    return Response.json(newSchool)
}