import UserModel from '../models/UserModel.js'
import mongoose, { isValidObjectId } from 'mongoose';

export const getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

export const userInfo = (req, res) => {
    console.log(req.params);
    if (!isValidObjectId(req.params.id))
        return res.status(400).send('ID unknown: ' + req.params.id)

    UserModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID unknown :' + err);
    }). select('-password');
}