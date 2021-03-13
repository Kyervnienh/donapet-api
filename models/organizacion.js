const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Organizacion = sequelize.define(
  'Organizacion',
  {
    id_organizacion: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    representante: DataTypes.STRING,
    correo: DataTypes.STRING,
  },
  { tableName: 'organizacion' }
);

// exportamos el modelo.
module.exports = Organizacion;
