const mongoose = require('mongoose');
const alumniSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    enrollmentNo:{
        type:String,
        required:true,
        unique:true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    department: {
        type: String,
        required: true,
        trim: true
    },
    graduationYear: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    },
    coverImageURL: {
        type: String,
        validate: {
            validator: function (value) {
                return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/i.test(value);
            },
            message: "Cover image must be a valid image URL"
        }
    },
    
}, { timestamps: true });

module.exports = mongoose.model('Alumni', alumniSchema);
