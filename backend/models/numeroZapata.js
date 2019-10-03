const mongoose = require('mongoose');
const { Schema } = mongoose;
var ip = require('ip');

const numeroZapataSchema = new Schema({
    numeroZapata: { type: Number, required: true },
    ip: { type: String },
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60 * 5 } //设置验证码的有效时间为 10 分钟
    },
    ip: {
        type: String,
        default: ip.address()
    }
});

// numeroZapataSchema.index({ createdAt: { type: Date, expires: 120, default: Date.now }})

module.exports = mongoose.model('numeroZapata', numeroZapataSchema);