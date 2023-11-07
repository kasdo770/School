import mongoose from 'mongoose';
const { Schema } = mongoose;

const timeSchema = new Schema({
    tables: [{
        teacher: mongoose.SchemaTypes.ObjectId,
        subject: String,
        day: String,
        beginning: String,
        end: String,
        peroid: String,
    }]
});

module.exports = mongoose.models.Time || mongoose.model("Time", timeSchema)