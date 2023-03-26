const express = require('express')
const controladorPublicaciones = require('../controladores/publicacion.js')
const router = express.Router()
router.get('/', (peticion, respuesta) => {
    respuesta.render('index')
})

// Peticiones
// Para crear una publicacion
router.post('/publicaciones/:titulo/:autores/:editorial/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.crearPublicacion(peticion, respuesta)
})

// Para eliminar una publicacion
router.delete('/publicaciones/:titulo/:autores/:editorial/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.borrarPublicacion(peticion, respuesta)
})

// Para buscar una publicacion
router.get('/publicaciones/:titulo/:autores/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.obtenerPublicacion(peticion, respuesta)
})


// Para actualizar (editar) una publicacion



module.exports = router