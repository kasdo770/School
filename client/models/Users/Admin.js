import mongoose from 'mongoose';
const { Schema } = mongoose;

const adminSchema = new Schema({
    schoolInJob: String
});

module.exports = mongoose.models.Admin || mongoose.model("Admin", adminSchema)