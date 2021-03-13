const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Usuario = require('./usuario');
const Organizacion = require('./organizacion');

const Donacion  = sequelize.define('Donacion', {
  id_donacion: { // número de indentificación de la donacion
    type: DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true
  },
  //donador: DataTypes.INTEGER,  // número de indentificación del donador
  //organizacion: DataTypes.INTEGER, // número de indentificación de la organización
  cantidad: DataTypes.INTEGER, // cantidad de la donación
  estatus: DataTypes.STRING, // estado de la donacion
},{ tableName: 'donacion'});

//Donacion.hasOne(Usuario);
//Donacion.hasOne(Organizacion);
// Donacion.hasOne(organizacion,{foreignKey : 'id_organizacion'})

console.log(Donacion === sequelize.models.Donacion);
module.exports = Donacion;