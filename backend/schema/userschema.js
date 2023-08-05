import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    password: String
});

const user = new mongoose.model("usertodo", userSchema);

export default user