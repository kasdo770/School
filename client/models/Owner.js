import mongoose from 'mongoose';
const { Schema } = mongoose;

const ownerSchema = new Schema({
    name: String,
    password: String,
    code: String,
    ID: String,
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
});

module.exports = mongoose.model("Owner", ownerSchema)