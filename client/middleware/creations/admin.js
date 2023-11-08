async function createUtility(body) {
    const newAdmin = {
        jobInSchool: body.jobInSchool
    }
    return newAdmin
}

module.exports = {
    createUtility: createUtility
}