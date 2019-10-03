const mongoose = require('mongoose');
const { Schema } = mongoose;
var ip = require('ip');

const basesSchema = new Schema({
    bx: [{ type: Number }],
    by: [{ type: Number }],
    e: [{ type: Number }],
    cx: [{ type: Number }],
    cy: [{ type: Number }],
    h: [{ type: Number }],
    numeroEtabs: Number,
    numeroZapata: Number,
    ip: { type: String },
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 86400 } //设置验证码的有效时间为 10 分钟
    },
    ip: {
        type: String,
        default: ip.address('public',"ipv4")
    }
});

// basesSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('Bases', basesSchema);