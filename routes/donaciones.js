
const router = require('express').Router();
const {
    crearDonacion,
    modificarDonacion,
    consultarDonaciones,
    cancelarDonacion,
    consultarDonacion
} = require('../controllers/donaciones')
const auth = require('./auth');

router.post('/', auth.requerido, crearDonacion);
router.put('/:id', auth.requerido, modificarDonacion);
router.get('/', auth.requerido, consultarDonaciones);
router.get('/:id', auth.requerido, consultarDonacion);
router.delete('/:id', auth.requerido, cancelarDonacion);

module.exports = router;