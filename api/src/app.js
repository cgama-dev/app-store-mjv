const express = require('express')
const bodyParser = require('body-parser')
const debug = require('debug')('app-stoker-api:server')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const database = require('./database')
const router = require('./router')


class App {
    constructor() {
        this.app = express()
        this.database()
        this.middlewares()
        this.routes()
        this.exception()
    }

    middlewares() {
        this.app.use(express.json({ limit: '5mb' }))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.use(morgan('dev'))
        this.app.use(cors())
    }

    routes() {
        this.app.use(router)
    }

    database() {
        database.connect()
    }

    exception() {

    }
}


module.exports = new App().express