const mongoose = require('mongoose');
const { Schema } = mongoose;

const numeroZapataSchema = new Schema({
    numeroZapata: { type: Number, required: true},
    ip: {type: String},
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*2 } //设置验证码的有效时间为 10 分钟
    }
});

// numeroZapataSchema.index({ createdAt: { type: Date, expires: 120, default: Date.now }})

module.exports = mongoose.model('numeroZapata', numeroZapataSchema);