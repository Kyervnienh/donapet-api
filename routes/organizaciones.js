const router = require('express').Router();
const {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  eliminarOrganizacion,
} = require('../controllers/organizaciones');

router.get('/', consultarOrganizacion);
router.post('/', crearOrganizacion);
router.put('/:id', modificarOrganizacion);
router.delete('/:id', eliminarOrganizacion);

module.exports = router;
