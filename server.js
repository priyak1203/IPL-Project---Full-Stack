const mongoose = require('mongoose');
const express = require('express');
const app = express();
const path = require('path')
require('dotenv').config();


const {Player, validate} = require('./models/player');


// Connecting to MongoDB 
const connectionString = process.env.connection;
const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect(connectionString, options)
.then(() => console.log("Connected to MongoDB Atlas..."))
.catch(() => console.log("Error... Couldnt Connect"))

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Middleware to verify login code
const verifyCode = (req, res, next) => {
    if (req.body.userData.code !== '12345') {
       res.status(403).send('Invalid Credentials!')
    } else {
       next()
    }
    
}


// Middleware to validate data 
const dataValidate = (req, res, next) => {
    const {error} = validate(req.body.playerData);
   
    if (error) {
        res.status(400).send(error.details)
    } else {
        next();
    }
    
}

// Middleware to add other details to player 
const addDetails = async (req, res, next) => {
    // console.log('In Add Details')
    let list = await Player.find();
    let pId = list.length;
    req.body.playerData.plyId = pId; 
    const teamKey = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 
    const index = teamKey.indexOf(req.body.playerData.from);
    // console.log(index);
    const teams = ["Chennai Super Kings", "Royal Challengers Bangalore", "Mumbai Indians","Rajasthan Royals", "Kolkata Knight Riders", "Sun Risers Hyderabad", "Punjab Kings", "Delhi Capitals"]
    let teamName = teams[index];
    // console.log(teamName)
    req.body.playerData.team = teamName;
    next()
}




app.get('/teamdetails/:id', async (req, res) => {
    let index = parseInt(req.params.id);
    const teamNames = ["CSK", "RCB", "MI", "RR", "KKR", "SRH", "PK", "DC"]; 
    const teamKey = teamNames[index-1]
    console.log(teamKey)

    // let result = await Player.find({from: teamKey}).sort({name: 1})
    let result = await Player.find({from: teamKey})
    if (result.length) {
       return res.status(200).send(result);
    }
    
})


app.post('/addPlayer', verifyCode, dataValidate,  addDetails, async (req, res) => {
    console.log(req.body)
    
    let player = new Player(req.body.playerData);
    let addData = await player.save();
    res.status(200).send(addData)

})



// Server on PORT 3000
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))