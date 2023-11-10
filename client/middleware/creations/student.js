import { object, string, number, date, InferType, array } from 'yup';

let studentSchema = object({
    grade: string().required(),
    warnings: number().required().positive().integer(),
    Edusystem: string().required(),
    Division: string().required(),
    quizzes: array(),
    absent: array()
})

async function createUtility(body) {
    const newStudent = {
        grade: body.grade,
        absent: body.absent,
        Edusystem: body.Edusystem,
        Division: body.Division,
        fatherWork: body.fatherWork
    }


    return newStudent
}

module.exports = {
    createUtility: createUtility
}