const express = require('express');
const multer = require('multer');
const Router = express.Router();
const GreenBandController = require('../Controllers');

const storage = multer.memoryStorage();
const upload = multer({ storage });

Router.get('/', GreenBandController.BreatingMessage)
Router.post('/AddNewUser', GreenBandController.userAdditionController)
Router.post('/UploadImage', upload.single('image'), GreenBandController.uplaoduserImages)
Router.post('/RazorPayment', GreenBandController.makeRazorpayPayment)

module.exports = Router;