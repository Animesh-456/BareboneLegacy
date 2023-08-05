import { model } from 'mongoose';
import user from '../schema/userschema.js';
import bcrypt from 'bcrypt'
import Jwt from 'jsonwebtoken';

const adduser = async (emp) => {
    let newUser = null;


    let data = {
        fname: emp.fname,
        lname: emp.lname,
        email: emp.email,
        password: ""
    }
    await bcrypt.hash(emp.password, 10).then(async function (hash) {
        data.password = hash
        newUser = new user(data);
        await newUser.save();
        console.log(newUser)
    });

    return newUser
}


const loginuser = async (emp) => {
    let token;
    let resp = false
    let data = {
        email: emp.email,
        password: emp.password
    }

    console.log(data)
    const usr = await user.findOne({ email: data.email })
    if (usr) {
        resp = await bcrypt.compare(data.password, usr.password)
        if (resp == true) {
            token = await Jwt.sign(usr?.id, process.env.SECRET)
            console.log("JSONWEBTOKEN", token)
        }
    }

    return { resp, usr, token }
}

const getemployeedetails = async (emp) => {
    const user = await employee.user({ email: emp.email })
    return user
}

const usercontroller = {
    adduser,
    loginuser,
}

export default usercontroller