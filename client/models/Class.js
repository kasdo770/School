import mongoose from 'mongoose';
const { Schema } = mongoose;

const classSchema = new Schema({
    name: String,
    totalStudents: Number,
    Students: [mongoose.SchemaTypes.ObjectId],
    timeTable: mongoose.SchemaTypes.ObjectId,
    Grade: String
});


classSchema.methods.attendence = function () {
    return self.totalStudents - self.Students.length
}


module.exports = mongoose.model("Class", classSchema)