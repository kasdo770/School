async function createUtility(body) {
    const newTeacher = {
        salary: body.salary,
        jobRole: body.jobRole,
        subject: body.subject,
        paycuts: body.paycuts
    }

    return newTeacher
}

module.exports = {
    createUtility: createUtility
}