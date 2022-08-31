const router = require("express").Router()
const User = require('../db/models/user')
const { validationResult, body } = require('express-validator')
const bcrypt = require('bcrypt')
const { restart } = require("nodemon")

router.post('/register', [
    body('email').isEmail().withMessage('Mail must ve valid'),
    body('password').trim().isLength({ min: 4, max: 50 }).withMessage('Password must be between 4 and 20 chrs')],
    async (req, res) => {
        const { name, email, password } = req.body;
        console.log(req.body)

        const existingUser = await User.find({ email })
        console.log(existingUser)

        if (existingUser.length !== 0) {
            throw new Error('This email is alredy in use')
        }
        else {
            let encriptedPassword = (await bcrypt.hash(password, 10)).toString()

            let user = {
                name,
                email,
                password: encriptedPassword
            };
            let newUser = new User(user);
            await newUser.save();
            res.send(200)
        }
    }
)

module.exports = router