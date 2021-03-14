// usuario.js
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('bvjvt3algliwhdhkghed', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
	host: process.env.MYSQL_HOST,
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
    rol: DataTypes.STRING,        // rol (administrador o donador)
    salt: DataTypes.STRING
},{timestamps: false, tableName: 'usuario'});

Usuario.prototype.publicData = function(){
    return {
        id_usuario: this.id_usuario,
        nombre: this.nombre,
        apellido: this.apellido,
        edad: this.edad,
        correo: this.correo,
        telefono: this.telefono,
        ocupacion: this.ocupacion
    }
}

Usuario.prototype.crearPassword = function(password){
    this.salt = crypto.randomBytes(16).toString("hex");          // generando una "sal" random para cada usuario

    this.password = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
      .toString("hex");
    return 0;
}

Usuario.prototype.validarPassword = function(password){
    const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")           // genera un hash con la contraseña proporcionada
    .toString("hex");

    return hash === this.password;
}

module.exports = Usuario;