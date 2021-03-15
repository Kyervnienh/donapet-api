const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/usuarios')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerUsuarios)
router.get('/:id', auth.requerido, obtenerUsuario)
router.post('/', crearUsuario)
router.put('/:id',auth.requerido, modificarUsuario)
router.delete('/:id', auth.requerido, eliminarUsuario)
router.post('/login',iniciarSesion)

module.exports = router;