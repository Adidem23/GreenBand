const express = require('express');
const multer = require('multer');
const Router = express.Router();
const GreenBandController = require('../Controllers');
const fs = require('fs');

const uploadDir = 'uploads';

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('File type not allowed'), false);
    }
};


const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
});


Router.get('/', GreenBandController.BreatingMessage)
Router.post('/AddNewUser', GreenBandController.userAdditionController)
Router.post('/UploadImage', upload.single('image'), GreenBandController.uplaoduserImages)
Router.post('/RazorPayment', GreenBandController.makeRazorpayPayment)

module.exports = Router;