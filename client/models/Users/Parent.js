import mongoose from 'mongoose';
const { Schema } = mongoose;

const parentSchema = new Schema({
    son: [mongoose.SchemaTypes.ObjectId]
});

module.exports = mongoose.models.Parent || mongoose.model("Parent", parentSchema)