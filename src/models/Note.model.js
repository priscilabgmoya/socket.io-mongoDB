import { Schema, model } from "mongoose";

const schema = new Schema({
    title: {
        type: String,
        required: [true, 'title is required'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'description is required'],
    },
}, {
    timestamps: true
})
export default model("Note", schema);