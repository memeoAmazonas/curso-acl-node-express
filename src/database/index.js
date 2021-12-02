
const mongoose = require('mongoose');

const connection = async() => {
    try {
        await mongoose.connect('mongodb://localhost:27017/dbtest');
        console.log("conexion establecida");
    }catch (e) {
        throw new Error("Error db",e)
    }
}

module.exports = connection;

