module.exports = (app) => {
    const http = require('http').Server(app)
    const io = require('socket.io')(http) 
    
    io.on('connection', socket => {
        socket.on('evento', datos => {
            console.log(datos)
        })
    })
}