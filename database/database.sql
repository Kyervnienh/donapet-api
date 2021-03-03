DROP DATABASE IF EXISTS donapet;
CREATE DATABASE donapet;

USE donapet;

-- Creating tables
CREATE TABLE usuario 
(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    edad INT(2) NOT NULL,
    correo VARCHAR(40) NOT NULL,
    telefono INT(10) NOT NULL,
    ocupacion VARCHAR(20) NOT NULL,
    rol VARCHAR(30) NOT NULL
);

CREATE TABLE donacion
(
	id_donacion INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT NOT NULL,
    id_organizacion INT NOT NULL,
	cantidad VARCHAR(30) NOT NULL,
    estatus VARCHAR(30) DEFAULT 'EN REVISION',
    FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),
    FOREIGN KEY(id_organizacion) REFERENCES organizacion(id_organizacion)
);

CREATE TABLE organizacion 
(
	id_organizacion INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(30) NOT NULL,
    direccion VARCHAR(40) NOT NULL,
    telefono INT(10) NOT NULL,
    representante VARCHAR(30) NOT NULL,
    correo VARCHAR(40) NOT NULL
);
