import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    paycuts: [Number],
    salary: Number,
    school: mongoose.SchemaTypes.ObjectId,
    subject: String,
    jobRole: String,
    reports: [mongoose.SchemaTypes.ObjectId],
    mainClass: mongoose.SchemaTypes.ObjectId
});

module.exports = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema)