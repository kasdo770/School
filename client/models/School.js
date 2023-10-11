import mongoose from 'mongoose';
const { Schema } = mongoose;

const schoolSchema = new Schema({
    owner: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model("School", schoolSchema)