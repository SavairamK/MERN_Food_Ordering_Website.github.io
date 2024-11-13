import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

// token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// user login
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.json({
                success: false,
                message: "User Doesn't Exist"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({
                success: false,
                message: 'Invalid Credentials'
            })
        }
        const token = createToken(user._id)

        res.json({
            success: true,
            token
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: 'ERROR....'
        })
    }
}

// new user (register user)
const registerUser = async (req, res) => {
    const { name, password, email } = req.body
    try {
        // check if the user is already exists or not
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({
                success: false,
                message: 'User Already Exists.'
            })
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.json({
                success: false,
                message: 'Please enter a valid email.'
            })
        }
        if (password.length < 8) {
            return res.json({
                success: false,
                message: 'Password must be more than 8 characters.'
            })
        }

        // hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // create new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        // generate token
        const token = createToken(user._id)
        res.json({
            success: true,
            token
        })

    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            message: 'ERROR...'
        })
    }
}

export { loginUser, registerUser }
