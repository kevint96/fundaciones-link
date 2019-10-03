const mongoose = require('mongoose');
const { Schema } = mongoose;

const zapatasSchema = new Schema({
    _id: { type: Number },
    ip: {type: String},
    pesoSuelo: { type: Number, required: true},
    pesoConcreto: { type: Number, required: true},
    diametroAcero: { type: Number, required: true},
    pesoZapata: { type: Number, required: true},
    cargaViva: { type: Number, required: true},
    cargaMuerta: { type: Number, required: true},
    cargaAdmisibleSuelo: { type: Number, required: true},
    factorMayoracion: { type: Number, required: true},
    factorMayoracionUsuario: { type: Number, required: true},
    // createdAt: { type: Date, expires: '15s', default: Date.now }, // Expire after 15 s
    createAt: {
        type: Date,
        default: Date.now(),
        index: { expires: 60*5 } //设置验证码的有效时间为 10 分钟
    }
});

//Eliminar en un determinado tiempo de mongo!

zapatasSchema.index({ip: 1});

// zapatasSchema.index({createdAt: 1 }, { expireAfterSeconds: 120 } )


module.exports = mongoose.model('Zapatas', zapatasSchema);
