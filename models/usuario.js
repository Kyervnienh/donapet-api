// usuario.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mysql::memory:');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {                 // número de identificación del usuario
    type: DataTypes.INTEGER,
    primaryKey : true,
    autoIncrement: true
  },
  nombre: DataTypes.STRING,     // nombre del usuario    
  apellido: DataTypes.STRING,   // apellido del usuario
  edad: DataTypes.INTEGER,      // edad del usuario
  correo: {                     // correo del usuario
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true
    }
    },
  password: DataTypes.STRING,   // contraseña del usuario   
  telefono: DataTypes.STRING,   // teléfono del usuario
  ocupacion: DataTypes.STRING,  // ocupación del usuario
  rol: DataTypes.STRING         // rol (administrador o donador)
},{ tableName: 'usuario'});

module.exports = Usuario;