const { getSchoolByName } = require("@/middleware/fetch/users")


export async function ValidateName(name) {
    const { pass, data, log } = await getSchoolByName(name)

    if (pass == "error") return { pass: true, log: log, data: data }
    return { pass: false, log: log, data: data }
}
