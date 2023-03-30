// Modelo del Libro (Publicacion)
module.exports = (idPub, tituloPub, editorialPub, autoresPub, fechaPub) => {
    
    let id = idPub.valueOf()
    let titulo = tituloPub.valueOf()
    let editorial = editorialPub.valueOf()
    let autores = autoresPub.valueOf()
    let fecha = fechaPub.valueOf()

    return {

        obtenerId: () => {
            return id
        },
        obtenerTitulo: () => {
            return titulo
        },
        obtenerEditorial: () => {
            return editorial
        },
        obtenerAutores: () => {
            return autores
        },
        obtenerFecha: () => {
            return fecha
        },
        modificarTitulo: (nuevoTitulo) => {
            titulo = nuevoTitulo
        },
        modificarEditorial: (nuevaEditorial) => {
            editorial = nuevaEditorial
        },
        modificarAutores: (nuevoAutor) => {
            autores = nuevoAutor
        },
        modificarFecha: (nuevaFecha) => {
            fecha = nuevaFecha
        },
        toString: () => {
            return `${titulo}: ${autores}, ${editorial}, ${fecha}`
        }
    
    }

}