
const router = require('express').Router();
const {
    crearDonacion,
    modificarDonacion,
    consultarDonaciones,
    cancelarDonacion,
    consultarDonacion
} = require('../controllers/donaciones')
const auth = require('./auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     Donaciones:
 *       type: object
 *       properties:
 *         id_donacion:
 *           type: integer
 *           description: id autoincrementado para la donacion
 *         id_usuario:
 *           type: integer
 *           description: id del usuario que realiza la donacion
 *         id_organizacion:
 *           type: integer
 *           description: id de la organizacion que recibe la donacion
 *         cantidad:
 *           type: integer
 *           description: cantidad donada
 *         estatus:
 *           type: string
 *           description: estatus de la donacion
 *       example:
 *         id_donacion: 1
 *         id_usuario: 2
 *         id_organizacion: 3
 *         cantidad: 300
 *         estatus: Aceptada
 */

 /**
  * @swagger
  * tags:
  *   name: Donaciones
  *   description: Donaciones End Point
  */

 /**
 * @swagger
 * /v1/donaciones:
 *   post:
 *     summary: crear nueva donacion
 *     tags: [Donaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Donaciones'
 *     responses:
 *       200:
 *         description: Donacion creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Donaciones'
 *       401:
 *         description: error
 */

router.post('/', crearDonacion);

/**
 * @swagger
 * /v1/donaciones/{id}:
 *  put:
 *    summary: Modificacion de una donacion
 *    tags: [Donaciones]
 *    parameters:
 *      - in: path
 *        name: id_donacion
 *        schema:
 *          type: integer
 *        required: true
 *        description: id de la donacion
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Donaciones'
 *    responses:
 *      200:
 *        description: Modificacion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Donaciones'
 *      401:
 *        description: not found
 *      500:
 *        description: Some error happened
 */

router.put('/:id', modificarDonacion);

/**
 * @swagger
 * /v1/donaciones:
 *  get:
 *    summary: Listado de donaciones
 *    tags: [Donaciones]
 *    responses:
 *       200:
 *         description: Lista de donaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Donaciones'
 *       404:
 *        description: Lista no encontrada
 *       500:
 *         description: Some server error
 */

router.get('/', consultarDonaciones);

/**
 * @swagger
 * /v1/donaciones/{id}:
 *   get:
 *     summary: obtener una donacion por id
 *     tags: [Donaciones]
 *     parameters:
 *       - in: path
 *         name: id_donacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de la donacion
 *     responses:
 *       200:
 *         description: Donacion por id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Donaciones'
 *       404:
 *         description: donacion no encontrada
 */
router.get('/:id', consultarDonacion);

/**
 * @swagger
 * /v1/donaciones/{id}:
 *   delete:
 *     summary: Eliminar una donacion
 *     tags: [Donaciones]
 *     parameters:
 *       - in: path
 *         name: id_donacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de la donacion a eliminar
 * 
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: not found
 */
router.delete('/:id', cancelarDonacion);

module.exports = router;