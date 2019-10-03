const mongoose = require('mongoose');
const { Schema } = mongoose;
var ip = require('ip');


const resultadosSchema = new Schema({
    _id: { type: Number },
    ip: { type: String },
    pesoSuelo: { type: Number, required: true },
    pesoConcreto: { type: Number, required: true },
    diametroAcero: { type: Number, required: true },
    pesoZapata: { type: Number, required: true },
    cargaViva: { type: Number, required: true },
    cargaMuerta: { type: Number, required: true },
    cargaAdmisibleSuelo: { type: Number, required: true },
    factorMayoracion: { type: Number, required: true },
    fx: [{ type: Number }],
    fy: [{ type: Number }],
    fz: [{ type: Number }],
    mx: [{ type: Number }],
    my: [{ type: Number }],
    mz: [{ type: Number }],
    bx: [{ type: Number }],
    by: [{ type: Number }],
    e: [{ type: Number }],
    cx: [{ type: Number }],
    cy: [{ type: Number }],
    h: [{ type: Number }],
    listaPesoZapata: [{ type: Number }],
    listaPesoPedestal: [{ type: Number }],
    listaPesoSuelo: [{ type: Number }],
    listaCargaVertical: [{ type: Number }],
    listaMomentoActuanteMX: [{ type: Number }],
    listaMomentoActuanteMY: [{ type: Number }],
    A: [{ type: Number }],
    Ly: [{ type: Number }],
    QMax: [{ type: Number }],
    QMin: [{ type: Number }],
    Mdx: [{ type: Number }],
    Mdy: [{ type: Number }],
    Ax: [{ type: Number }],
    Ay: [{ type: Number }],
    Asx: [{ type: Number }],
    Asy: [{ type: Number }],
    Vx: [{ type: Number }],
    Vy: [{ type: Number }],
    Vc: [{ type: Number }],
    Vpuz: [{ type: Number }],
    Vcon: [{ type: Number }],

    pedestal_pesoPedestal: [{ type: Number }],
    pedestal_cargaVerticalTotal: [{ type: Number }],
    pedestal_Mx: [{ type: Number }],
    pedestal_My: [{ type: Number }],
    pedestal_relacionRecubrimiento: [{ type: Number }],
    pedestal_cargaAdimensional: [{ type: Number }],
    pedestal_momentoAdimensionalX: [{ type: Number }],
    pedestal_momentoAdimensionalY: [{ type: Number }],
    pedestal_condicionalesMomentoAdimensionalX: [{ type: Number }],
    pedestal_condicionalesMomentoAdimensionalY: [{ type: Number }],
    pedestal_mediatrizAm: [{ type: Number }],
    pedestal_mediatrizTm: [{ type: Number }],
    pedestal_mediatrizBm: [{ type: Number }],
    pedestal_diagonalAd: [{ type: Number }],
    pedestal_diagonalTd: [{ type: Number }],
    pedestal_diagonalBd: [{ type: Number }],
    pedestal_coeficienteK1: [{ type: Number }],
    pedestal_coeficienteK2: [{ type: Number }],
    pedestal_coeficienteK3: [{ type: Number }],
    pedestal_cuantiaRequerida: [{ type: Number }],
    pedestal_cuantiaGeometrica: [{ type: Number }],
    pedestal_areaLongitudinal: [{ type: Number }],
    pedestal_separacionNorma: [{ type: Number }],
    pedestal_areaPedestal: [{ type: Number }],
    pedestal_areaRefuerzo: [{ type: Number }],
    pedestal_seccionTransversalAshx: [{ type: Number }],
    pedestal_seccionTransversalAshy: [{ type: Number }],
    pedestal_fc: [{ type: Number }],
    pedestal_r: [{ type: Number }],
    pedestal_pesoConcreto: [{ type: Number }],
    pedestal_e: [{ type: Number }],
    pedestal_cx: [{ type: Number }],
    pedestal_cy: [{ type: Number }],
    pedestal_h: [{ type: Number }],
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

// resultadosSchema.index({"createdAt": 1 }, { expireAfterSeconds: 120 } )

module.exports = mongoose.model('resultados', resultadosSchema);