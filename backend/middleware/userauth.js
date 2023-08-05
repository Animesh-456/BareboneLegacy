import jwt from "jsonwebtoken";
import user from '../schema/userschema.js';


const authmiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    let response = await jwt.verify(token, process.env.SECRET)
    let usr = await user.findOne({ _id: response })
    if (!usr) {
        return res.status(500).json(usr)
    }
    next()
    //return res.status(200).json(user)
}
export default authmiddleware