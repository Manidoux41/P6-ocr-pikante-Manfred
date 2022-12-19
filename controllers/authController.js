import UserModel from '../models/UserModel.js';

const maxAge = '24h'
const createToken = (id) => {
    return jwt.sign({id}, process.env.TOKEN_SECRET, {
        expiresIn: maxAge
    })
};

export const signUp = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.create({ email, password})
        res.status(201).json({ user: user._id })
    } catch (error) {
        res.status(200).send({ error })
    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge })
        res.status(200).json({ user : user._id})
    } catch (error) {
        res.status(200).json(error)
    }
}

export const logout = async (req, res) => {
    
}