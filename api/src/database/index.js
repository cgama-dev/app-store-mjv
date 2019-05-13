const mongoose = require('mongoose')
const config = require('./../config')

class Database {
    connect() {
        mongoose.connect(config.connectingString, {
            useCreateIndex: true,
            useNewUrlParser: true
        })
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'Erro ao conectar com o banco'))
        db.once('open', () => console.log(`Conexão com banco estabelecida` + '::' + new Date()))
    }
}

module.exports = new Database()
