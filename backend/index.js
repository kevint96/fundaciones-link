const express = require('express');
const cors = require('cors');
const app = express();
const index = require('./routes/index');
const excel = require('./routes/excelRoute');
const bases = require('./routes/bases');
const numeroEtabs = require('./routes/numeroEtabs');
const numeroZapata = require('./routes/numeroZapata');
const resultados = require('./routes/resultados');
const path = require('path');

//Se debe inicializar en una consola aparte el comando sudo mongod para que corra en el servidor!
const { mongoose } = require('./database/database');
const { mongooseExcel } = require('./database/exceldb');


// //Middlewares 1
// app.use(express.static(__dirname + '/frontend/dist/'));


// app.use('/', express.static(__dirname));
// app.get('/', function(req, res){
//     res.redirect('../../frontend/dist/fundaciones/index.html');
//  });

console.log("directorio: "+ __dirname);




// app.use(express.static('app/frontend/dist/fundaciones'));
// app.get('/',function(req,res){
//     res.sendFile(path.join('app/frontend/dist/fundaciones/index.html'));
// });

// app.listen(process.env.PORT || 8080);

app.set('port', process.env.PORT || 3000)

//Settings
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs');

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//Rutas
app.use('/api/zapatas', index);
app.use('/api/excel', excel);
app.use('/api/bases', bases);
app.use('/api/numeroEtabs', numeroEtabs);
app.use('/api/numeroZapata', numeroZapata);
app.use('/api/resultados', resultados);

app.use(express.static(path.join(__dirname, 'dist/fundaciones')));

app.listen(app.get('port'),() =>{
        console.log("Servidor escuchando en el puerto", app.get('port'));
    });


// //Settings
// app.set('port', process.env.PORT || 3000)
// app.engine('html',require('ejs').renderFile);
// app.set('view engine', 'ejs');



// //middlewares 2
// app.use(cors({origin: 'http://localhost:4200'}));
// // app.use('/', express.static(path.join(__dirname, '/app/')));
// app.use(express.json());





// app.get('/*',function(req,res) {
//     res.sendFile(path.join(__dirname + '/frontend/dist/spa/index.html'));
// })

// console.log('Console listening!!!');

//Static files


// //Static server
// app.listen(app.get('port'),() =>{
//     console.log("Servidor escuchando en el puerto", app.get('port'));
// });



