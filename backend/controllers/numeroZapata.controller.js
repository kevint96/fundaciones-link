const NumeroZapata = require('../models/numeroZapata');
const fetch = require('node-fetch');

const numeroZapataCtrl = {};

var listaNumeroZapatas = [];

numeroZapataCtrl.getDatos = async (req, res, next) => {
    const NumeroZapata = await NumeroZapata.find();
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

    const url = "https://jsonip.com/?callback";
    const getData = async url => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log("RESP EXCEL NUMERO ZAPATA CONTROLLER: ", json.ip);
            var ip = json.ip;

            const numeroZapata = await NumeroZapata.find()
            listaNumeroZapatas = numeroZapata;
            // await NumeroZapata.remove();
            res.json(listaNumeroZapatas[listaNumeroZapatas.length - 1]);

        } catch (error) {
            console.log(error);
        }
    };
    getData(url);

    ////console.log("ultima: " + listaNumeroZapatas[listaNumeroZapatas.length - 1]);
    ////console.log("Tamaño: " + listaNumeroZapatas.length);
    // ////console.log("Lista:" + listaNumeroZapatas);
};



numeroZapataCtrl.guardarNumeroZapata = async (req, res, next) => {

    var ip = req.body.ip;

    const num = await NumeroZapata.find();
    listaNumeroZapatas = num;

    if (listaNumeroZapatas.length != 0) {
        //Se elimina todos los datos de mongoDB
        await NumeroZapata.remove();
    }

    const numeroZapata = new NumeroZapata({
        // "createdAt": new Date(),
        numeroZapata: req.body.numeroZapata,
        ip: req.body.ip
    });

    //Se guarda el nuevo dato en mongoDB
    await numeroZapata.save();

    // const m = await NumeroZapata.find({"_id":"5d615037134e6621d84d149a"});

    //siempre poner el await

    //Se modifica datos de mongoDB
    // const j = await NumeroZapata.update({_id: '5d615037134e6621d84d149a'}, {$set: {NumeroZapata: req.body.NumeroZapata}});

    ////console.log("Entro por aqui num zapata!!!");
    ////console.log(req.body.numeroZapata);

}
module.exports = numeroZapataCtrl;