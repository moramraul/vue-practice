const router = require("express").Router()
const User = require('../db/models/user')
const { validationResult, body } = require('express-validator')
const bcrypt = require('bcrypt')

router.post('/register', [
    body('email').isEmail().withMessage('Mail must ve valid'),
    body('password').trim().isLength({ min: 4, max: 20 }).withMessage('Password must be between 4 and 20 chrs')],
    async (req, res) => {
        const { name, email, password } = req.body;

        const existingUser = await User.find({ email })

        if (existingUser) {
            throw new Error('This email is alredy in use')
        }
        else {
            let encriptedPassword = bcrypt.hash(password, 10)

            let user = {
                name,
                email,
                password: encriptedPassword
            };
            let newUser = new User(user);
            await newUser.save()
        }
    }
)

module.exports = router