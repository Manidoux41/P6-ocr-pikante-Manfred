import mongoose from 'mongoose';

const SauceSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mainPepper: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    heat: {
        type: Number
    }
})

const Sauce = mongoose.model('Sauce', SauceSchema)

export default Sauce;