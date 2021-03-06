#Creamos una nueva base de datos llamada Coworking
CREATE DATABASE IF NOT EXISTS coworking;

#Creacion de la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
      DNI VARCHAR(6) PRIMARY KEY,
      password VARCHAR(8) NOT NULL,
      nombre VARCHAR(20) NOT NULL,
      apellido VARCHAR(20) NOT NULL,
      telefono VARCHAR(9) NOT NULL,
      direccion VARCHAR(50) NOT NULL,
      tipo VARCHAR(10) CHECK (tipo IN ('Invitado','Individual','Empresa')),
      tarifa VARCHAR(6) CHECK (tarifa IN ('Dia','Semana','Mes'))
);
#Creacion de la tabla eventos
CREATE TABLE IF NOT EXISTS eventos(
      ID INT PRIMARY KEY AUTO_INCREMENT,
      nombre VARCHAR(20) NOT NULL,
      fecha DATE NOT NULL,
      sala VARCHAR(15) NOT NULL,
      descripcion varchar(80),
      FOREIGN KEY (sala) REFERENCES salas(nombre)
);
#Creacion de la tabla salas
CREATE TABLE IF NOT EXISTS salas(
      nombre VARCHAR(20) PRIMARY KEY,
      libre BOOLEAN


);
