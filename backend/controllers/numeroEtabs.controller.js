const NumeroEtabs = require('../models/numeroEtabs');
const fetch = require('node-fetch');
var myIp = require('ip');

const numeroEtabsCtrl = {};

var listaEtabs = [];

numeroEtabsCtrl.getDatos = async (req, res, next) => {

    var ip = myip.address('public',"ipv4");

    const numeroEtabs = await NumeroEtabs.find({ ip: ip });
    listaCargas = numeroEtabs;
    var tamaño = listaCargas.length;
    res.json({
        cantidad: tamaño,
        listaCargas: listaCargas,
        ultimaCarga: listaCargas[listaCargas.length - 1]
    });
};

//Metodo para vaciar numero Etabs!
numeroEtabsCtrl.getNumeroEtabs = async (req, res, next) => {

    var ip = myip.address('public',"ipv4");

    const numeroEtabs = await NumeroEtabs.find({ ip: ip })
    listaEtabs = numeroEtabs;
    // await NumeroEtabs.remove();
    res.json(listaEtabs[listaEtabs.length - 1]);


};



numeroEtabsCtrl.guardarNumeroEtabs = async (req, res, next) => {

    var ip = myip.address('public',"ipv4");

    // const num = await NumeroZapata.find({ ip: ip });

    const num = await NumeroEtabs.find({ ip: ip });
    listaNumeroEtabs = num;

    if (listaNumeroEtabs.length != 0) {
        //Se elimina todos los datos de mongoDB
        // await NumeroEtabs.remove();
        await NumeroEtabs.deleteMany({ ip: ip })
    }

    const numeroEtabs = new NumeroEtabs({
        // "createdAt": new Date(),
        numeroEtabs: req.body.numeroEtabs,
        irPedestal: req.body.irPedestal
    });

    //Se guarda el nuevo dato en mongoDB
    await numeroEtabs.save();

    //Se modifica datos de mongoDB
    // const j = await NumeroEtabs.update({_id: '5d615037134e6621d84d149a'}, {$set: {numeroEtabs: req.body.numeroEtabs}});

    ////console.log("Entro por aqui");
    ////console.log(req.body.numeroEtabs);

}
module.exports = numeroEtabsCtrl;