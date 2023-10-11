import mongoose from 'mongoose';
const { Schema } = mongoose;

const timeSchema = new Schema({
    name: String,
    class: mongoose.SchemaTypes.ObjectId,
    tables: [{
        class: mongoose.SchemaTypes.ObjectId,
        teacher: mongoose.SchemaTypes.ObjectId,
        subject: String,
        day: String,
        time: String
    }]
});

module.exports = mongoose.model("Class", timeSchema)