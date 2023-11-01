import mongoose from 'mongoose';
const { Schema } = mongoose;

const classSchema = new Schema({
    name: String,
    totalStudents: Number,
    students: [mongoose.SchemaTypes.ObjectId],
    timeTable: mongoose.SchemaTypes.ObjectId,
    mainTeacher: mongoose.SchemaTypes.ObjectId,
    grade: String
});

classSchema.pre("save", (next) => {
    self.totalStudents == self.students.length;
    next();
})

module.exports = mongoose.models.Class || mongoose.model("Class", classSchema)