const NumeroEtabs = require('../models/numeroEtabs');
const fetch = require('node-fetch');

const numeroEtabsCtrl = {};

var listaEtabs = [];

numeroEtabsCtrl.getDatos = async (req, res, next) => {
    const numeroEtabs = await NumeroEtabs.find();
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


    const url = "https://jsonip.com/?callback";
    const getData = async url => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log("RESP EXCEL NUMERO ETABS CONTROLLER: ", json.ip);
            var ip = json.ip;

            const numeroEtabs = await NumeroEtabs.find({ ip: ip })
            listaEtabs = numeroEtabs;
            // await NumeroEtabs.remove();
            res.json(listaEtabs[listaEtabs.length - 1]);

        } catch (error) {
            console.log(error);
        }
    };
    getData(url);
    ////console.log("ultima: " + listaEtabs[listaEtabs.length - 1]);    
    ////console.log("Tamaño: " + listaEtabs.length);
    // ////console.log("Lista:" + listaEtabs);
};



numeroEtabsCtrl.guardarNumeroEtabs = async (req, res, next) => {


    const num = await NumeroEtabs.find();
    listaNumeroEtabs = num;

    if (listaNumeroEtabs.length != 0) {
        //Se elimina todos los datos de mongoDB
        await NumeroEtabs.remove();
    }

    const numeroEtabs = new NumeroEtabs({
        // "createdAt": new Date(),
        numeroEtabs: req.body.numeroEtabs,
        irPedestal: req.body.irPedestal,
        ip: req.body.ip
    });

    //Se guarda el nuevo dato en mongoDB
    await numeroEtabs.save();

    //Se modifica datos de mongoDB
    // const j = await NumeroEtabs.update({_id: '5d615037134e6621d84d149a'}, {$set: {numeroEtabs: req.body.numeroEtabs}});

    ////console.log("Entro por aqui");
    ////console.log(req.body.numeroEtabs);

}
module.exports = numeroEtabsCtrl;