const mongoose = require('mongoose');
const joi = require('joi');

const playerSchema = new mongoose.Schema({
    plyId: Number,
    name: String,
    from : String,
    price: String,
    isPlaying: Boolean,
    description: String,
    photoURL: String,
    team : String
}, {strict: false})

const Player = mongoose.model('newiplplayers', playerSchema);


const validate = (player) => {
    const joiSchema = joi.object({
        name: joi.string().required().regex(/[!@#$]/, {invert: true}),
        from: joi.string().required().valid('CSK', 'RCB', 'MI', 'RR', "KKR", "SRH", "PK", "DC"),
        photoURL: joi.string().required().regex(/.png/),
        price: joi.string().required().regex(/Cr/),
        isPlaying: joi.boolean().required(),
        description: joi.string().required().valid('Batsman', 'Bowler', 'All-Rounder', 'Wicket-Keeper'),

    }).options({abortEarly : false})
    
    return joiSchema.validate(player)
}

module.exports = {
    Player, 
    validate
}

