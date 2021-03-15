const router = require('express').Router();
const {
  crearOrganizacion,
  modificarOrganizacion,
  consultarOrganizacion,
  consultarOrganizaciones,
  eliminarOrganizacion,
} = require('../controllers/organizaciones');
const auth = require('./auth');


/**
 * @swagger
 * components:
 *   schemas:
 *     Organizaciones:
 *       type: object
 *       properties:
 *         id_organizacion:
 *           type: integer
 *           description: id autoincrementado para la organizacion
 *         nombre:
 *           type: string
 *           description: nombre de la organizacion
 *         direccion:
 *           type: string
 *           description: dirección de la organización
 *         telefono:
 *           type: integer
 *           description: telefono de la organización
 *         representante:
 *           type: string
 *           description: nombre del representante de la organización
 *         correo:
 *           type: string
 *           description: correo de la organizacion
 *       example:
 *         id_organizacion: 1
 *         nombre: Tortugas felices
 *         direccion: Liverpool 34, CDMX
 *         telefono: 5572638373
 *         representante: Lucia Palacios
 *         correo: totugas.gob.mx
 */

 /**
  * @swagger
  * tags:
  *   name: Organizaciones
  *   description: Organizaciones End Point
  */

/**
 * @swagger
 * /v1/organizaciones:
 *  get:
 *    summary: listado de organizaciones
 *    tags: [Organizaciones]
 *    responses:
 *       200:
 *         description: Lista de organizaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Organizaciones'
 *       401:
 *        description: Lista no encontrada
 *       500:
 *         description: Some server error
 */
router.get('/', auth.requerido, consultarOrganizaciones);

/**
 * @swagger
 * /v1/organizaciones/{id}:
 *   get:
 *     summary: obtener una organizacion por id
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: id_organizacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de la organizacion
 *     responses:
 *       200:
 *         description: organizacion por id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organizaciones'
 *       404:
 *         description: organizacion no encontrada
 */

router.get('/:id', auth.requerido, consultarOrganizacion);

 /**
 * @swagger
 * /v1/organizaciones:
 *   post:
 *     summary: crear nueva organizacion
 *     tags: [Organizaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Organizaciones'
 *     responses:
 *       200:
 *         description: organizacion creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Organizaciones'
 *       401:
 *         description: error
 */
router.post('/', auth.requerido, crearOrganizacion);

/**
 * @swagger
 * /v1/organizaciones/{id}:
 *  put:
 *    summary: Modificacion de una organizacion
 *    tags: [Organizaciones]
 *    parameters:
 *      - in: path
 *        name: id_organizacion
 *        schema:
 *          type: integer
 *        required: true
 *        description: id de la organizacion
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Organizaciones'
 *    responses:
 *      200:
 *        description: Modificacion exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Organizaciones'
 *      401:
 *        description: Not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id', auth.requerido, modificarOrganizacion);

/**
 * @swagger
 * /v1/organizaciones/{id}:
 *   delete:
 *     summary: Eliminar una organizacion
 *     tags: [Organizaciones]
 *     parameters:
 *       - in: path
 *         name: id_organizacion
 *         schema:
 *           type: integer
 *         required: true
 *         description: id de la organizacion a eliminar
 * 
 *     responses:
 *       200:
 *         description: Ok
 *       401:
 *         description: not found
 */
router.delete('/:id', auth.requerido, eliminarOrganizacion);

module.exports = router;
