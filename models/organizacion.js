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
  { timestamps: false, tableName: 'organizacion' }
);

// exportamos el modelo.
module.exports = Organizacion;
