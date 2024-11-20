const mongoose = require('mongoose');
const material = require('./material');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    progile_pic: {
        url: { type: String , default: 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1617320134/blank-profile-picture-973460_640_ewvq6n.png' },
        filename: { type: String, default: 'blank-profile-picture-973460_640_ewvq6n' }
    },
    phone_number: { type: String, required: true }, 
    materials: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Material'
        }
    ]
});

module.exports = mongoose.model('User', userSchema);
