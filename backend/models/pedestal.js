const mongoose = require('mongoose');
const { Schema } = mongoose;
var ip = require('ip');

const pedestalSchema = new Schema({
    fc: [{ type: Number }],
    r: [{ type: Number }],
    cx: [{ type: Number }],
    cy: [{ type: Number }],
    h: [{ type: Number }],
    e: [{ type: Number }],
    pesoConcreto: [{ type: Number }],
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

// pedestalSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('Pedestal', pedestalSchema);