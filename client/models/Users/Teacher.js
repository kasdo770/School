import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    paycuts: [Number],
    salary: Number,
    subject: String,
    jobRole: String,
});

module.exports = mongoose.models.Teacher || mongoose.model("Teacher", teacherSchema)