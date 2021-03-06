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

-- Inserting data

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Alberto Martinez", 24, "alberto@mail.com", 123456789, "Dentista", "Administrador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Rodrigo Alcudia", 32, "rodrigo@mail.com", 987654321, "Contador", "Administrador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Roberto Corro", 26, "roberto@mail.com", 987834321, "Programador", "Administrador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Cesar Rayon", 29, "cesar@mail.com", 926384672, "Matematico", "Administrador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Darwin Altamirano", 33, "darwin@mail.com", 273894615, "Administrador", "Administrador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Siria Rodriguez", 23, "siria@mail.com", 827367819, "Diseñadora", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Alfredo Dominguez", 19, "alfredo@mail.com", 427367819, "Estudiante", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Erika Rosas", 36, "erika@mail.com", 917362319, "Medico", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Melissa Damian", 27, "melissa@mail.com", 928938716, "Contador", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Diego Lopez", 30, "diego@mail.com", 927516728, "Abogado", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Reyna Muñoz", 20, "reyna@mail.com", 119283647, "Estudiante", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Jose Alvarez", 26, "jose@mail.com", 918274681, "Fisico", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Eduardo Cardenas", 24, "eduardo@mail.com", 278376109, "Biologo", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Monica Carvajal", 28, "monica@mail.com", 394871678, "Nutriologa", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Daniel Moreno", 39, "daniel@mail.com", 482681782, "Mecanico", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Aylin Salvadory", 25, "aylin@mail.com", 192873651, "Chef", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Noemi Pizarro", 34, "noemi@mail.com", 198267189, "Abogado", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Angel Ramirez", 38, "angel@mail.com", 409189287, "Ingeniero", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Enrique Vera", 27, "enrique@mail.com", 782736819, "Psicologo", "donador");

INSERT INTO usuario (nombre, edad, correo, telefono, ocupacion, rol) VALUES ("Barry Allen", 26, "barry@mail.com", 928376182, "Forense", "donador");

INSERT INTO organizacion (nombre, direccion, telefono, representante, correo) VALUES ("STARPET", "Calle 171C N. 326, Mérida, Yucatan", 928718926, "Caitlin Snow", "starpet@mail.com");

INSERT INTO organizacion (nombre, direccion, telefono, representante, correo) VALUES ("ARGUS Animal Rescue", "Bicentenario N. 38, Carmen, Campeche", 927816528, "Felicity smoak", "argus@mail.com");

INSERT INTO organizacion (nombre, direccion, telefono, representante, correo) VALUES ("WAYNE PET", "Revolucion N. 24, Villahermosa, Tabasco", 189267387, "Bruno diaz", "wayne@mail.com");

INSERT INTO organizacion (nombre, direccion, telefono, representante, correo) VALUES ("Wombat Animal Care", "Emiliano N. 38, Acapulco, Guerrero", 289371689, "Kara Danvers", "wombat@mail.com");

INSERT INTO organizacion (nombre, direccion, telefono, representante, correo) VALUES ("Pets Home", "Belisario N. 167, Palenque, Chiapas", 487290271, "Cisco Ramon", "petshome@mail.com");

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (8, 2, 2500);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (15, 1, 800);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (17, 5, 1700);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (6, 4, 999);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (10, 3, 867);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (14, 2, 1983);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (7, 5, 399);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (19, 1, 8917);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (16, 3, 913);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (11, 2, 2719);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (14, 5, 827);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (18, 1,6828);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (13, 4, 528);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (20, 3, 8291);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (10, 2, 1923);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (12, 4, 590);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (8, 1, 3891);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad, estatus) VALUES (17, 3, 1893, "APROBADO");

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (20, 1, 801);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad, estatus) VALUES (11, 5, 736, "APROBADO");

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (6, 1, 679);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (9, 2, 7168);

INSERT INTO donacion (id_usuario, id_organizacion, cantidad, estatus) VALUES (15, 4, 5281, "APROBADO");

INSERT INTO donacion (id_usuario, id_organizacion, cantidad, estatus) VALUES (7, 2, 890, "APROBADO");

INSERT INTO donacion (id_usuario, id_organizacion, cantidad) VALUES (19, 4, 678);