import mongoose from 'mongoose';
const { Schema } = mongoose;

const teacherSchema = new Schema({
    name: String,
    password: String,
    code: String,
    ID: String,
    paycuts: [Number],
    salary: Number,
    school: mongoose.SchemaTypes.ObjectId,
    reports: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("Teacher", teacherSchema)