const express = require('express');
const app=express()
const cors= require('cors')
app.use(cors())
app.set('port',process.env.PORT||3000);
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
//modulos
app.use(require('./src/routes/hogar.routes'))
app.use(require('./src/routes/tecnologia.routes'))
app.use(require('./src/routes/vestuario.routes'))
app.use(require('./src/routes/hogar.routes'))
//Se inicia el servidor
app.listen(app.get('port'),()=>{
    console.log("port listen ",app.get('port'))
})
