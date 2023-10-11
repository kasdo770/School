import mongoose from 'mongoose';
const { Schema } = mongoose;

const schoolSchema = new Schema({
    name: String,
    password: String,
    code: String,
    contactNo: String,
    news: [mongoose.SchemaTypes.ObjectId],
    teachers: [mongoose.SchemaTypes.ObjectId],
    students: [mongoose.SchemaTypes.ObjectId],
    classes: [mongoose.SchemaTypes.ObjectId],
    reports: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("School", schoolSchema)