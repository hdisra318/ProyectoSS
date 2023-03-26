const express = require('express')
const middleware = require('./middleware/errores.js')
const rutasWeb = require('./rutas/web.js')
const rutasSoc = require('./rutas/socket.js')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')
app.set('views', './vistas')

app.use(express.static(__dirname + '/public'))

app.use('/', rutasWeb)
rutasSoc(app)
middleware(app)

app.listen(8000, () => {
    console.log('App iniciada en el puerto 8000')
})
