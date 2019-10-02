const mongoose = require('mongoose');
const { Schema } = mongoose;

const numeroEtabsSchema = new Schema({
    numeroEtabs: { type: Number, required: true},
    irPedestal: { type: Boolean, required: true},
    ip: {type: String},
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*2 } //设置验证码的有效时间为 10 分钟
    }
});

// numeroEtabsSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('numeroEtabs', numeroEtabsSchema);