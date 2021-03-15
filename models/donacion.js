const { Sequelize, DataTypes } = require('sequelize');

const id_usuario = require('./usuario');
const id_organizacion = require('./organizacion');

const Usuario = require('./usuario');
const Organizacion = require('./organizacion');

const sequelize = new Sequelize(
  'bvjvt3algliwhdhkghed',
  'ugmtfah9vxn9hbsq',
  '8Wuhw88GLlEDIRA6R3nW',
  {
    host: 'bvjvt3algliwhdhkghed-mysql.services.clever-cloud.com',
    dialect: 'mysql',
  }
);

const Donacion  = sequelize.define('Donacion', {
    id_donacion: { // número de indentificación de la donacion
      type: DataTypes.INTEGER,
      primaryKey : true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER, //id del usuario que realizo la donacion
    id_organizacion: DataTypes.INTEGER, // id de la organizacion a la que se le realizo ladonacion
    cantidad: DataTypes.INTEGER, // cantidad de la donación
    estatus: DataTypes.STRING, // estado de la donacion
   
   
},{timestamps: false, tableName: 'donacion'});

Donacion.hasOne(id_usuario, {foreignKey: 'id_usuario'});
Donacion.hasOne(id_organizacion, {foreignKey: 'id_organizacion'});

module.exports = Donacion;
