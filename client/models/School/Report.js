import mongoose from 'mongoose';
const { Schema } = mongoose;

const reportSchema = new Schema({
    student: mongoose.SchemaTypes.ObjectId,
    teacher: mongoose.SchemaTypes.ObjectId,
    reason: String,
    punishment: String,
    accepted: Boolean
});

module.exports = mongoose.models.Report || mongoose.model("Report", reportSchema)