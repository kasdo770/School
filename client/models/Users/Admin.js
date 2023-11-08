import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    jobInSchool: String
});

module.exports = mongoose.models.Admin || mongoose.model("Admin", adminSchema)