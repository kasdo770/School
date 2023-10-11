import mongoose from 'mongoose';
const { Schema } = mongoose;

const parentSchema = new Schema({
    name: String,
    password: String,
    code: String,
    ID: String,
    son: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.model("Parent", parentSchema)