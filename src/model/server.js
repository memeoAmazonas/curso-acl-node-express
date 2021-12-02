const express = require('express');
const connection = require('../database');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = "8000";
        this.paths = {
            userPath: '/api/user'
        }
        this.middlewares();
        this.routes();
        this.dbconnectDb();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
    async dbconnectDb() {
        await connection();
    }

    routes() {
        this.app.use(this.paths.userPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.clear();
            console.log("servidor se esta ejecutando en el puerto ", this.port);
        });
    }
}

module.exports = Server;
