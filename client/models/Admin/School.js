import mongoose from 'mongoose';
const { Schema } = mongoose;

const schoolSchema = new Schema({
    contactNo: String,
    news: [mongoose.SchemaTypes.ObjectId],
    users: [mongoose.SchemaTypes.ObjectId],
    classes: [mongoose.SchemaTypes.ObjectId],
    reports: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.models.School || mongoose.model("School", schoolSchema)