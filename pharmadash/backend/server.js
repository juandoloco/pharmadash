const express = require('express');
const cors = require('cors');

const router = require('./routes/auth.routes');


const app = express()   ;

// middlewares
app.use(express.json());    
app.use(express.urlencoded({extended: false}));
app.use(cors());

// Routes

//Usuarios
app.use('/usuario', router);


app.listen(3000);
console.log(`Servidor Express iniciado en http://localhost:3000`);