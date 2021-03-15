const router = require('express').Router();
const {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  consultarOrganizaciones,
  eliminarOrganizacion,
} = require('../controllers/organizaciones');

router.get('/', consultarOrganizaciones);
router.get('/:id', consultarOrganizacion);
router.post('/', crearOrganizacion);
router.put('/:id', modificarOrganizacion);
router.delete('/:id', eliminarOrganizacion);

module.exports = router;
