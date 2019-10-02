const mongoose = require('mongoose');
const { Schema } = mongoose;

const basesSchema = new Schema({
    bx: [{ type: Number }],
    by: [{ type: Number }],
    e:  [{ type: Number }],
    cx: [{ type: Number }],
    cy: [{ type: Number }],
    h:  [{ type: Number }],
    numeroEtabs: Number,
    numeroZapata: Number,
    ip: {type: String},
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*2 } //设置验证码的有效时间为 10 分钟
    }
});

// basesSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('Bases', basesSchema);