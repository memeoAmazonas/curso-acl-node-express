const {Router} = require('express');
const {check} = require('express-validator');
const { validateField } = require('../middleware')
const { create, getAll } = require('../controller/user')

const router = Router();

router.get("/",getAll);

router.post('/', [
    check('name', 'el nombre es requerido').not().isEmpty(),
    check('lastname', 'el nombre es requerido').not().isEmpty(),
    check('email', 'Correo no es valido').isEmail(),
    validateField,
],create);


module.exports = router;
