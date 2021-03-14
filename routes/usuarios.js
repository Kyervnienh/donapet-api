const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuario,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/usuarios')

router.get('/', obtenerUsuarios)
router.get('/:id', obtenerUsuario)
router.post('/', crearUsuario)
router.put('/:id', modificarUsuario)
router.delete('/:id', eliminarUsuario)
router.post('/login',iniciarSesion)

module.exports = router;