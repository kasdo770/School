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
        quizzes: body.quizzes,
        absent: body.absent,
        warnings: body.warnings,
        Edusystem: body.Edusystem,
        Division: body.Division,
    }


    return newStudent
}

module.exports = {
    createUtility: createUtility
}