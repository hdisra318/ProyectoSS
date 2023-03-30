const express = require('express')
const controladorPublicaciones = require('../controladores/publicacion.js')
const router = express.Router()
router.get('/', (peticion, respuesta) => {
    respuesta.render('index')
})

router.get('/registro', (peticion, respuesta) => {
    respuesta.render('registro');
})

router.get('/publicacion', (peticion, respuesta) => {
    respuesta.render('publicacion');
})

router.get('/detalle', (peticion, respuesta) => {
    respuesta.render('detalle');
})

router.get('/editar', (peticion, respuesta) => {
    respuesta.render('editar');
})

// Peticiones
// Para crear una publicacion
router.post('/publicaciones/:titulo/:autores/:editorial/:fecha', (peticion, respuesta) => {
    controladorPublicaciones.crearPublicacion(peticion, respuesta)
})

// Para eliminar una publicacion
router.delete('/publicaciones/:titulo', (peticion, respuesta) => {
    controladorPublicaciones.borrarPublicacion(peticion, respuesta)
})

// Para buscar una publicacion
router.get('/publicaciones/:titulo', (peticion, respuesta) => {
    controladorPublicaciones.obtenerPublicacion(peticion, respuesta)
})

// Para los detalles una publicacion
router.get('/detalle/:titulo', (peticion, respuesta) => {
    controladorPublicaciones.obtenerPublicacionDetalle(peticion, respuesta)
})

// Para actualizar (editar) una publicacion
router.get('/editar/:titulo', (peticion, respuesta) => {
    controladorPublicaciones.obtenerPublicacionEditar(peticion, respuesta)
})

module.exports = router