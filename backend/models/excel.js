const mongooseExcel = require('mongoose');
const { Schema } = mongooseExcel;
var ip = require('ip');

const excelSchema = new Schema({
    base: [{ type: Number }],
    fx: [{ type: Number }],
    fy: [{ type: Number }],
    fz: [{ type: Number }],
    mx: [{ type: Number }],
    my: [{ type: Number }],
    mz: [{ type: Number }],
    irPedestal: [{ type: Boolean }],
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

// excelSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongooseExcel.model('excel', excelSchema);
