const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {
        type: String,
        index: true,
        required: [true, 'firstname is required'],
    },
    lastname: {
        type: String,
        index: true,
        required: [true, 'lastname is required'],
    },
    email: {
        type: String,
        unique: true,
        index: true,
        required: [true, 'email is required'],
    },
    generation: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    team: {
        type: String,
        required: true,
        enum: ['المؤسسين', 'ATM', 'نفس طبي', 'مغلوبة فانتصر', 'تذوق كتابا', 'بعبق القرآن نحيا', 'BacBag', 'التصميم و المونتاج', 'المحتوى', 'الميديا']

    }
}, { timestamps: true })

module.exports = APV = mongoose.model('APV', UserSchema, 'APVists',)