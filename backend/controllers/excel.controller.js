const Excel = require('../models/excel');
const fetch = require('node-fetch');
var myIp = require('ip');

const excelCtrl = {};

var listaCargas = [];

var listaEtabs = [];

//Metodo para vaciar excel!
excelCtrl.getDatos = async (req, res, next) => {
    // const excel = await Excel.find({ip: "179.32.95.93"})

    var ip = myIp.address();


    const excel = await Excel.find({ ip: ip })
    listaCargas = excel;
    var tamaño = listaCargas.length;
    // await Excel.remove();
    res.json({
        cantidad: tamaño,
        listaCargas: listaCargas,
        ultimaCarga: listaCargas[listaCargas.length - 1]
    });

};

excelCtrl.getCargaEstablecida = async (req, res, next) => {

    var ip = myIp.address();

    const excel = await Excel.find({ ip: ip })
    listaCargas = excel;
    var tamaño = listaCargas.length;
    var numero = req.body.numeroCarga;
    res.json({ cargaEstablecida: listaCargas[numero] });
};

excelCtrl.getNumeroEtabs = async (req, res, next) => {

    var ip = myIp.address();

    const excel = await Excel.find({ ip: ip })
    listaEtabs = excel;
    var tamaño = listaEtabs.length;
    res.json({ numeroExcel: listaEtabs[listaEtabs.length - 1] });
};

excelCtrl.seleccionarCarga = async (req, res, next) => {

    var ip = myIp.address();

    const excel = await Excel.find({ ip: ip })
    var numero = req.body.numeroCarga;
    listaCargas = excel;
    res.json(listaCargas[numero]);

};

excelCtrl.guardarNumeroEtabs = async (req, res, next) => {
    const excel = new Excel({
        "createdAt": new Date(),
        numeroEtabs: req.body.numeroEtabs,
        ip: req.body.ip
    });

    listaEtabs.push(excel)

    ////console.log("Entro por aqui");
    ////console.log(req.body.numeroEtabs);

    await excel.save();

}

excelCtrl.guardar = async (req, res, next) => {

    //Se elimina todos los datos de mongoDB
    // await Excel.remove();

    const excel = new Excel({
        // "createdAt": new Date(),
        base: req.body.base,
        fx: req.body.fx,
        fy: req.body.fy,
        fz: req.body.fz,
        mx: req.body.mx,
        my: req.body.my,
        mz: req.body.mz,
        irPedestal: req.body.irPedestal
    });

    var tamaño = req.body.fx.length;

    //////console.log("Fx es: " , req.body.fx);

    listaCargas.push(excel);

    // //////console.log(req.body)
    await excel.save();
    //////console.log("El tamaño es:", tamaño);
    res.json({
        status: 'excel created',
        tamaño: tamaño
    });
};

module.exports = excelCtrl;