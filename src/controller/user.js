const {response} = require('express');
const User = require('../model/user');

const create = async (req, res = response) =>{
    const { name, lastname, email } = req.body;
    const user = new User({ name, lastname,email });
    await user.save();
    res.status(201).json({
        msg: "usuario creado",
        user,
    })
}

const getAll = async (req, res = response) =>{
    const [total, users] = await Promise.all([
        User.countDocuments(),
        User.find()
    ]);
    res.json({ total, users });
}
module.exports = {
    create,
    getAll,
}
