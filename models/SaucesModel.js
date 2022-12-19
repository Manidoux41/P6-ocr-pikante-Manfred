import mongoose from 'mongoose';

const SauceSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }
})

const Sauce = mongoose.model('Sauce', SauceSchema)

export default Sauces;