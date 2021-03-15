const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(
  'bvjvt3algliwhdhkghed',
  'ugmtfah9vxn9hbsq',
  '8Wuhw88GLlEDIRA6R3nW',
  {
    host: 'bvjvt3algliwhdhkghed-mysql.services.clever-cloud.com',
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
