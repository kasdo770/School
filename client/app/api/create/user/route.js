import dbConnect from "@/middleware/mongodb";
const User = require("@/models/Users/User")
const { link } = require("@/lib/link")

export async function POST(request) {
    await dbConnect();

    const body = await request.json()

    const data = { ...body }

    console.log(data)

    const newUtility = await fetch({
        url: link + "api/create/Users/" + body.role.toLowerCase(),
        method: "POST",
        Body: { ...data }
    })

    const newUser = await User.create({
        name: body.name,
        ID: body.Id,
        school: body.school,
        role: body.role,
        utilities: newUtility.Id,
        code: (Math.random() * 1000000).toString(36).replace('.', ''),
        passoword: (Math.random() * 1000000).toString(36).replace('.', '')
    })

    return Response.json(newUser)
}