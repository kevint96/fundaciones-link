const NumeroZapata = require('../models/numeroZapata');
const fetch = require('node-fetch');
var myIp = require('ip');

const numeroZapataCtrl = {};

var listaNumeroZapatas = [];

numeroZapataCtrl.getDatos = async (req, res, next) => {

    var ip = myip.address('public',"ipv4");

    const NumeroZapata = await NumeroZapata.find({ ip: ip });
    listaCargas = NumeroZapata;
    var tamaño = listaCargas.length;
    res.json({
        cantidad: tamaño,
        listaCargas: listaCargas,
        ultimaCarga: listaCargas[listaCargas.length - 1]
    });
};

//Metodo para vaciar las zapatas!
numeroZapataCtrl.getNumeroZapata = async (req, res, next) => {

    var ip = myip.address('public',"ipv4");

    const numeroZapata = await NumeroZapata.find({ ip: ip });

    listaNumeroZapatas = numeroZapata;
    // await NumeroZapata.remove();
    res.json(listaNumeroZapatas[listaNumeroZapatas.length - 1]);
};



numeroZapataCtrl.guardarNumeroZapata = async (req, res, next) => {

    // var ip = req.body.ip;
    

    var ip = myip.address('public',"ipv4");

    const num = await NumeroZapata.find({ ip: ip });


    // const num = await NumeroZapata.find();
    listaNumeroZapatas = num;

    if (listaNumeroZapatas.length != 0) {
        //Se elimina todos los datos de mongoDB
        // await NumeroZapata.remove();
        await NumeroZapata.deleteMany({ ip: ip })
    }

    const numeroZapata = new NumeroZapata({
        // "createdAt": new Date(),
        numeroZapata: req.body.numeroZapata
    });

    //Se guarda el nuevo dato en mongoDB
    await numeroZapata.save();

}
module.exports = numeroZapataCtrl;