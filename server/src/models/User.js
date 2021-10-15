import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        reuired: true
    },
    gender: {
        type: String
    }
}, {timestamps: true});

const User = model('users', UserSchema);

export default User;