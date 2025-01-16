const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fathersName: { type: String, required: true , unique:true},
    address: { type: String, required: true },
    schoolOrCollege: { type: String, required: true },
    profileImage: {
        type: Buffer,
        required: false
    },
    mobileNumber: {
        type: String, required: true , unique:true
    },
    email: { type: String, required: true , unique:true},
    dob: { type: Date, required: true},
    educationalQualification: { type: String, required: true },
    district: { type: String, required: true },
    state: { type: String, required: true },
    pincode: { type: String, required: true },
    batchTime: { type: String, required: true },
    instrument: { type: String, required: true },
    fees: { type: Number, required: true }
}, { timestamps: true });

const Application = mongoose.model('GreenBandUserSchema', ApplicationSchema);

module.exports = Application;