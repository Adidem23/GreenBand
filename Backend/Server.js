const express = require('express');
const app = express();
const PORT = 1820;
const CORS = require('cors');
const bodyParser = require('body-parser');
const GreenBandRoutes = require('./Routes/index');
const mongoose = require('mongoose');
require('dotenv').config();

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(CORS({
    origin: "https://green-band-front.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}))

app.get('/', (req, res) => {
    res.send("<h1>Hola Amigos!! Welcome to GreenBand Project</h1>")
})

app.use('/api', GreenBandRoutes);

const DatabaseUser=process.env.DATABASEUSER
const DatabasePassword = process.env.DATABASEUSERPASSWORD

// Global MongoDB Storage
const URI = `mongodb+srv://${DatabaseUser}:${DatabasePassword}@greenbandusers.o5ssg.mongodb.net/?retryWrites=true&w=majority&appName=GreenBandUsers`

const MAX_RETRIES = 5; 
const RETRY_DELAY = 5000;

let attempt = 0; 

const connectWithRetry = async () => {
  try {
    await mongoose.connect(URI);
    console.log('MongoDB-Cloud connected');
  } catch (error) {
    console.error(`MongoDB connection failed: ${error.message}`);
    attempt++;

    if (attempt <= MAX_RETRIES) {
      console.log(`Retrying connection (${attempt}/${MAX_RETRIES})...`);
      setTimeout(connectWithRetry, RETRY_DELAY); 
    } else {
      console.error('Max retries reached. Could not connect to MongoDB.');
    }
  }
};
connectWithRetry();

app.listen(PORT, () => {
    console.log(`App is Running on PORT : ${PORT}`)
})