// Modelo del Libro (Publicacion)
module.exports = (idPub, tituloPub, editorialPub, autoresPub, fechaPub) => {
    
    let id = idPub.valueOf()
    let editorial = editorialPub.valueOf()
    let titulo = tituloPub.valueOf()
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
        toString: () => {
            return `${titulo}: ${autores}, ${editorial}, ${fecha}`
        }
    
    }

}