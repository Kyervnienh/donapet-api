// usuario.js
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;

// Configuración de Sequelize
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  process.env.MYSQL_DB,
  process.env.MYSQL_USER,
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  }
);

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

// Método que devuelve los datos públicos del usuario
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

// Método que crea una "sal" y una contraseña encriptada
Usuario.prototype.crearPassword = function(password){
    this.salt = crypto.randomBytes(16).toString("hex");          // generando una "sal" random para cada usuario

    this.password = crypto
      .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")
      .toString("hex");                                          // Se genera la contraseña encriptada
    return 0;
}

// Método que verifica que las contraseñas coincidan
Usuario.prototype.validarPassword = function(password){
    const hash = crypto
    .pbkdf2Sync(password, this.salt, 10000, 512, "sha512")           // genera un hash con la contraseña proporcionada
    .toString("hex");

    return hash === this.password;                              // compara eñ has nuevo con el guardado
}


// Método que crea un json web Token
Usuario.prototype.generarJWT = function() {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60); // 60 días antes de expirar
  
    return jwt.sign({
      id: this.id_usuario,
      correo: this.correo,
      exp: parseInt(exp.getTime() / 1000),
    }, secret);
  };
  
//  Método que devuelve la representación de un usuario después de autenticar
  Usuario.prototype.toAuthJSON = function(){
    return {
      nombre: this.nombre,
      correo: this.correo,
      token: this.generarJWT()
    };
  };

module.exports = Usuario;