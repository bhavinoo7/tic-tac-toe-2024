const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const materialSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    file: {
        url: { type: String, required: true },
        filename: { type: String, required: true }
    },
    subject: { type: String, required: true },
    grade: { type: String, required: true },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Material', materialSchema);
