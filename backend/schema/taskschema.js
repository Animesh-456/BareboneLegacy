import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    title: String,
    description: String,
    email: String,
    createdAt: Date
});

const task = new mongoose.model("todolist", taskSchema);

export default task