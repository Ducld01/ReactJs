import mongoose from 'mongoose';
import crypto from 'crypto';
const { v1: uuidv1 } = require('uuid');
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type:Number,
    },
    address:{
        type: String
    },
    hashed_password:{
        type: String,
        // required: true
    },
    salt:{
        type: String
    }, 
    role:{
        type: Number,
        default: 0
    },
    about:{
        type: String,
        trim: true
    },
    history:{
        type: Array,
        default: []
    }
},{timestamps: true})

userSchema.virtual('password')
    .set(function (password) {
        this._password = password
        this.salt = uuidv1()
        this.hashed_password = this.encrytPassword(password)
    })
 
 
userSchema.methods = {
    authenticate: function (plainText) {
        return this.encrytPassword(plainText) === this.hashed_password;
    },
    encrytPassword: function (password) {
        if (!password) return '';
        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
        } catch (error) {
            return "";
        }
    }
}
module.exports = mongoose.model("User", userSchema)