const express = require("express")//?para la construccion de la api
const cors = require("cors")//?para habiliar que dominios pueden acceder a la aplicacion
const http = require("http")//?para crear nuestro servidor
const pages = require('./routes/')

//?nos conectamos a mongodb
// require("./model/connection")

//?creamos el servidor
let app = express()
let server = http.Server(app)

app.disable('x-powered-by');//?desactivamos la cabecera "x-powered-by", para evitar que los atacantes sepan que usa express, e  iniciar ataques con destinos específicos.
app.use(express.static(`${__dirname}/public`))//?aqui servimos los archivos publicos
app.set("port", process.env.PORT || 5050)//?vemos que puerto usaremos
app.use(cors())//?de esta forma, todos los dominios pueden hacer peticiones a nuestro servidor
app.use(express.json())//?para que formatee en json
app.use(pages)


module.exports = {server, app}




