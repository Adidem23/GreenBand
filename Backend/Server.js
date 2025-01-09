const express = require('express')
const app = express()
const PORT = 1820
const CORS = require('cors')
const bodyParser = require('body-parser');
const GreenBandRoutes = require('./Routes/index')
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(CORS({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.get('/',(req,res)=>{
  res.send("<h1>Hola Amigos!! Welcome to GreenBand Project</h1>")
})

app.use('/api', GreenBandRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const DatabasePassword = process.env.DATABASEUSERPASSWORD

// Local MongoDB Storage
// mongoose.connect("mongodb://0.0.0.0:27017/GreenBandUsers")
// .then(() => console.log('MongoDB connected')).catch((err) => console.log(err));

// Global MongoDB Storage
const URI = `mongodb+srv://adityavanshi5451:${DatabasePassword}@greenbandusers.o5ssg.mongodb.net/?retryWrites=true&w=majority&appName=GreenBandUsers`

mongoose.connect(URI).then(() => {
    console.log("Connected To MongoDBCompass")
}).catch((err) => {
    console.log(`Error While Connecting Database : ${err}`)
})

app.listen(PORT, () => {
    console.log(`App is Running on PORT : ${PORT}`)
})