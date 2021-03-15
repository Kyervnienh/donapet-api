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

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuarios:
 *       type: object
 *       properties:
 *         id_usuario:
 *           type: integer
 *           description: id autoincrementado para la usuario
 *         nombre:
 *           type: string
 *           description: nombre de la usuario
 *         apellido:
 *           type: string
 *           description: apellido del usuario
 *         edad:
 *           type: integer
 *           description: telefono del usuario
 *         correo:
 *           type: string
 *           description: correo del usuario
 *         password:
 *           type: string
 *           description: password del usuario
 *         telefono:
 *           type: string
 *           description: telefono del usuario
 *         ocupacion:
 *           type: string
 *           description: ocupación del usuario
 *         rol:
 *           type: string
 *           description: rol de usuario
 *         salt:
 *           type: string
 *           description: salt 
 *       example:
 *         id_usuario: 1
 *         nombre: Javier
 *         apellido: Lopez
 *         edad: 23
 *         correo: jav@gmai.com
 *         password: hola mundo
 *         telefono: 444431222
 *         ocupacion: desarrollador
 *         rol: donador
 *         salt: 83873hy2yy28282892
 */

 /**
  * @swagger
  * tags:
  *   name: Usuarios
  *   description: Usuarios End Point
  */

 /**
 * @swagger
 * /v1/usuarios:
 *  get:
 *    summary: listado de usuarios
 *    tags: [Usuarios]
 *    responses:
 *       200:
 *         description: Lista de Usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuarios'
 *       401:
 *        description: Lista no encontrada
 *       500:
 *         description: Some server error
 */
router.get('/', auth.requerido, obtenerUsuarios)

/**
 * @swagger
 * /v1/usuarios/{id}:
 *   get:
 *     summary: obtener un usuario por id
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de la usuario
 *     responses:
 *       200:
 *         description: usuario por id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
 *       404:
 *         description: usuario no encontrado
 */
router.get('/:id', auth.requerido, obtenerUsuario)

 /**
 * @swagger
 * /v1/usuarios:
 *   post:
 *     summary: crear nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuarios'
 *     responses:
 *       200:
 *         description: usuario creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuarios'
 *       401:
 *         description: error
 */
router.post('/', crearUsuario)

/**
 * @swagger
 * /v1/usuarios/{id}:
 *  put:
 *    summary: Modificacion de un usuario
 *    tags: [Usuarios]
 *    parameters:
 *      - in: path
 *        name: id_usuarios
 *        schema:
 *          type: integer
 *        required: true
 *        description: id del usuario
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usuarios'
 *    responses:
 *      200:
 *        description: Modificacion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Usuarios'
 *      401:
 *        description: Not found
 *      500:
 *        description: Some error happened
 */

router.put('/:id',auth.requerido, modificarUsuario)

/**
 * @swagger
 * /v1/usuarios/{id}:
 *   delete:
 *     summary: Eliminar un usuario
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id_usuario
 *         schema:
 *           type: integer
 *         required: true
 *         description: id del usuario a eliminar
 * 
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: not found
 */
router.delete('/:id', auth.requerido, eliminarUsuario)
router.post('/login',iniciarSesion)

module.exports = router;
