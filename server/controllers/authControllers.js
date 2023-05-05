const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const salt = 10


const signUpController = async function (req, res) {
    const {
        firstname,
        lastname,
        email,
        password,
        phoneNumber,
    } = req.body;
    try {
        const userDoc = await User.create({
            firstname,
            lastname,
            email,
            phoneNumber,
            password: bcrypt.hashSync(password, salt)
        });
        res.status(200).json(userDoc);
        // return res.redirect('/');
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}
const signInController = async function (req, res) {
}
const logOutController = async function (req, res) {
}
const forgotPasswordController = async function (req, res) {
}
const resetPasswordController = async function (req, res) {
}


module.exports = {
    signUpController,
    signInController,
    logOutController,
    forgotPasswordController,
    resetPasswordController,
  };