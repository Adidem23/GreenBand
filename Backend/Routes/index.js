const express = require('express');
const multer = require('multer');
const Router = express.Router();
const GreenBandController = require('../Controllers');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: 'uploads', 
      format: async (req, file) => 'jpeg', 
      public_id: (req, file) => Date.now() + '_' + file.originalname,
    },
  });
  

const upload = multer({ storage });

Router.get('/', GreenBandController.BreatingMessage)
Router.post('/AddNewUser', GreenBandController.userAdditionController)
Router.post('/UploadImage', upload.single('image'), GreenBandController.uplaoduserImages)

module.exports = Router;