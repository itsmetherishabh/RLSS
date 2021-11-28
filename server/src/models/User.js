import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
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
    gender: {
        type: String
    },
    dob: {
        type: Date,
        required: true
    }
}, {timestamps: true});

const User = model('users', UserSchema);

export default User;