const mongooseExcel = require('mongoose');
const { Schema } = mongooseExcel;

const excelSchema = new Schema({
    base: [{type: Number}],
    fx: [{type: Number}],
    fy: [{type: Number}],
    fz: [{type: Number}],
    mx: [{type: Number}],
    my: [{type: Number}],
    mz: [{type: Number}],
    irPedestal: [{type: Boolean}],
    ip: {type: String},
    // createdAt: { type: Date, expires: 30, default: Date.now }
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*2 } //设置验证码的有效时间为 10 分钟
    }
});

// excelSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongooseExcel.model('excel', excelSchema);
