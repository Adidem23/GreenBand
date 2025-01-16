const GreenBandUserSchema = require('../Models/index');
const Razorpay = require("razorpay")
require('dotenv').config();
const nodemailer = require('nodemailer');

const RAZORPAY_API_KEY_ID = process.env.RAZORPAY_KEY_ID
const RAZORPAY_API_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET

exports.BreatingMessage = (req, res) => {
  res.send("<h1>Hola Amigos!! Welcome to GreenBand Project API ROUTE</h1>")
}

exports.userAdditionController = async (req, res) => {

  try {

    const newGreenBandUser = new GreenBandUserSchema({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      fathersName: req.body.fathersName,
      address: req.body.address,
      schoolOrCollege: req.body.schoolOrCollege,
      mobileNumber: req.body.mobileNumber,
      email: req.body.email,
      dob: req.body.dob,
      educationalQualification: req.body.educationalQualification,
      district: req.body.district,
      state: req.body.state,
      pincode: req.body.pincode,
      batchTime: req.body.batchTime,
      instrument: req.body.instrument,
      fees: req.body.fees,
    })

    await newGreenBandUser.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_SERVICE_SENDER_ADDRESS,
        pass: process.env.EMAIL_SERVICE_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: 'GreenBand Private Limited @2025',
      to: "adityavanshi5451@gmail.com",
      subject: "NEW STUDENT HAS JOINED GREENBAND ACADEMY CLASSES",
      text: `Below Are the details of the student : ${newGreenBandUser}`,
    });

    console.log("EMAIL HAS BEEN SENT");
    res.status(201).json({ message: 'User created successfully', User: newGreenBandUser });

  }
  catch (err) {
    console.error('Error creating student:', err);
    res.status(500).json({ message: 'Error creating User' });
  }

}

exports.uplaoduserImages = async (req, res) => {

  const fileImage = req.file;

  console.log(fileImage);

  if (!fileImage) {
    return res.status(400).send('No file uploaded.');
  }

  GreenBandUserSchema.findByIdAndUpdate(`${req.body.userid}`, { $set: { profileImage: fileImage}, }).then(async (response) => {
    console.log("Profile Image is Updated");
  }).catch((err)=>console.log(err))

  res.status(200).json({ message: 'Image uploaded successfully!', filename: req.file.filename });
}

exports.makeRazorpayPayment = async (req, res) => {

  const razorpay = new Razorpay({
    key_id: RAZORPAY_API_KEY_ID,
    key_secret: RAZORPAY_API_KEY_SECRET
  })

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: "receipt#1",
    payment_capture: 1
  }

  try {
    const response = await razorpay.orders.create(options)

    res.status(200).json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount
    })
  } catch (error) {
    res.status(500).send("Internal server error")
  }

}