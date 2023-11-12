const { getSchool } = require("@/middleware/fetch/users")


export async function ValidateSchool(name, ID) {
    const { pass, data, log } = await getSchool(name, ID)

    if (pass == "error") return { pass: true, log: log, data: data }
    return { pass: false, log: log, data: data }
}
