import { User } from '../models';
import { tokenGenerator } from '../helpers';

export default {
    signup: async(req, res, next) => {
        const { email, password } = req.value.body;

        const userExists = await User.findOne({ email });
        if(userExists) return res.status(403).json({
            message: 'User already exists...',
        })

        const newUser = new User({ email, password });
        const account = await newUser.save();
        const token = tokenGenerator(newUser);

        res.status(201).json({
            token,
            user: {
                email: account.email,
                id: account.id,
            },
        })
    },
    signin: async(req, res, next) => {
        //Generate token
    },
    secret: async(req, res, next) => {

    },
}