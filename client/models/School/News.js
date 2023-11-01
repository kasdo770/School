import mongoose from 'mongoose';
const { Schema } = mongoose;

const newSchema = new Schema({
    title: String,
    description: String,
    date: String,
    grade: String,
    createdAt: {
        type: Date,
        default: () => Date.now(),
    }

});

module.exports = mongoose.models.New || mongoose.model("New", newSchema)