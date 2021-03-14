// usuario.js

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('bvjvt3algliwhdhkghed', 'ugmtfah9vxn9hbsq', '8Wuhw88GLlEDIRA6R3nW', {
	host: 'bvjvt3algliwhdhkghed-mysql.services.clever-cloud.com',
	dialect: 'mysql',
})

const Usuario = sequelize.define('usuario', {
    id_usuario: {                 // número de identificación del usuario
        type: DataTypes.INTEGER,
        primaryKey: true,
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
},{timestamps: false, tableName: 'usuario'});

module.exports = Usuario;