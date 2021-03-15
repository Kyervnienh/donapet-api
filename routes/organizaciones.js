const router = require('express').Router();
const {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  consultarOrganizaciones,
  eliminarOrganizacion,
} = require('../controllers/organizaciones');
const auth = require('./auth');

router.get('/', auth.requerido, consultarOrganizaciones);
router.get('/:id', auth.requerido, consultarOrganizacion);
router.post('/', auth.requerido, crearOrganizacion);
router.put('/:id', auth.requerido, modificarOrganizacion);
router.delete('/:id', auth.requerido, eliminarOrganizacion);

module.exports = router;
