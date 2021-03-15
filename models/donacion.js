const { Sequelize, DataTypes } = require('sequelize');

const id_usuario = require('./usuario');
const id_organizacion = require('./organizacion');

const Usuario = require('./usuario');
const Organizacion = require('./organizacion');

const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  }
);

const Donacion = sequelize.define('Donacion', {
  id_donacion: { // número de indentificación de la donacion
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_usuario: DataTypes.INTEGER, //id del usuario que realizo la donacion
  id_organizacion: DataTypes.INTEGER, // id de la organizacion a la que se le realizo ladonacion
  cantidad: DataTypes.INTEGER, // cantidad de la donación
  estatus: DataTypes.STRING, // estado de la donacion


}, { timestamps: false, tableName: 'donacion' });

Donacion.hasOne(id_usuario, { foreignKey: 'id_usuario' });
Donacion.hasOne(id_organizacion, { foreignKey: 'id_organizacion' });

module.exports = Donacion;
