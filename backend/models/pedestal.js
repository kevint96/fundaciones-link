const mongoose = require('mongoose');
const { Schema } = mongoose;

const pedestalSchema = new Schema({
    fc: [{ type: Number }],
    r: [{ type: Number }],
    cx:  [{ type: Number }],
    cy: [{ type: Number }],
    h: [{ type: Number }],
    e:  [{ type: Number }],
    pesoConcreto: [{ type: Number }],
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*2 } //设置验证码的有效时间为 10 分钟
    }
    
});

// pedestalSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('Pedestal', pedestalSchema);