const School = require("@/models/Admin/School")
export async function getSchoolByName(name) {
    const TheSchool = await School.findOne({
        name: name
    })
    return TheSchool != null ? { pass: "success", data: TheSchool, log: "Found it" } :
        { pass: "error", data: null, log: "No school by this name" }
}

export async function getClassByName() {

}