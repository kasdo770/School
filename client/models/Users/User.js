import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    password: String,
    code: String,
    ID: String,
    school: mongoose.SchemaTypes.ObjectId,
    role: {
        type: String,
        enum: ['Admin', 'Student', 'Parent', 'Teacher', 'School'],
        required: true,
    },
    utilities: mongoose.SchemaTypes.ObjectId
});


module.exports = mongoose.models.User || mongoose.model("User", userSchema)