
const router = require('express').Router();
const {
    crearDonacion,
    modificarDonacion,
    consultarDonaciones,
    cancelarDonacion,
    consultarDonacion
} = require('../controllers/donaciones')

router.post('/', crearDonacion);
router.put('/:id', modificarDonacion);
router.get('/', consultarDonaciones);
router.get('/:id', consultarDonacion);
router.delete('/:id', cancelarDonacion);

module.exports = router;