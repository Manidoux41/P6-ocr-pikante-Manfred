import SauceModel from "../models/SauceModel.js";

export const addSauce = async (req,res) => {
    const sauce = new SauceModel(req.body)
    await sauce.save();
    res.send(sauce)
}

export const getSauces = async (req,res) => {
    const sauces = await SauceModel.find({})
    res.send(sauces)
}

export const getSauce = async (req,res) => {
    const sauce = await SauceModel.find({_id: req.params.id})
    res.send(sauce)
}

export const updateSauce = async (req,res) => {
    const sauce = await SauceModel.findByIdAndUpdate(req.params.id, req.body)
    await sauce.save()
    res.send(sauce)
}

export const deleteSauce = async (req,res) => {
    const sauce = await SauceModel.findByIdAndDelete(req.params.id)
    if (!sauce) {
        res.status(404).send('Aucune Sauces trouvée')
    }
    res.status(200).send()    
}