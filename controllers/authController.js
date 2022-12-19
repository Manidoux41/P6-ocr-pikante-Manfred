import UserModel from '../models/UserModel.js';

export const signUp = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await UserModel.create({ email, password})
        res.status(201).json({ user: user._id })
    } catch (error) {
        res.status(200).send({ error })
    }
}