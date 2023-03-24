const express = require('express')
const controladorPublicaciones = require('../controladores/publicacion.js')
const router = express.Router()
router.get('/', (peticion, respuesta) => {
    respuesta.send('Hola mundo')
})

// Peticiones
router.post('/publicaciones/:id/:titulo/:autores/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.crearPublicacion(peticion, respuesta)
})

router.delete('/publicaciones/:id:id/:titulo/:autores/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.borrarPublicacion(peticion, respuesta)
})

router.get('/publicaciones/:id:id/:titulo/:autores/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.obtenerPublicacion(peticion, respuesta)
})

module.exports = router