const mongoose = require('mongoose');

const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
            }
        }
    }, phone: {
        type: Number,
        validate(value) {
            if (value < 5) {
                throw new Error("Invalid Number");
            }
        }
    },
    message: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const User = new mongoose.model("User", userSchema);

module.exports = User;
