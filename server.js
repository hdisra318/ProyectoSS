const express = require('express')
const middleware = require('./middleware/errores.js')
const rutasWeb = require('./rutas/web.js')
const rutasSoc = require('./rutas/socket.js')

const app = express()

app.use('/', rutasWeb)
rutasSoc(app)
middleware(app)

app.listen(8000, () => {
    console.log('App iniciada en el puerto 8000')
})
