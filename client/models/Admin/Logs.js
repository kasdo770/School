import mongoose from 'mongoose';
const { Schema } = mongoose;

const logSchema = new Schema({
    changedPart: String,
    description: String,
    doneBy: mongoose.SchemaTypes.ObjectId,
    school: mongoose.SchemaTypes.ObjectId,
    date: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    }

});

module.exports = mongoose.models.Log || mongoose.model("Log", logSchema)