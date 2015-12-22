#Creamos una nueva base de datos llamada Coworking
CREATE DATABASE IF NOT EXISTS coworking;

#Creacion de la tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
      DNI VARCHAR(6) PRIMARY KEY,
      nombre VARCHAR(20) NOT NULL,
      apellido VARCHAR(20) NOT NULL,
      telefono VARCHAR(9) NOT NULL,
      direccion VARCHAR(50) NOT NULL,
      tipo VARCHAR CHECK (tipo == "Invitado" || tipo == "Individual" || tipo == "Empresa"),
      tarifa VARCHAR CHECK (tarifa == "Dia" || tarifa == "Semana" || tarifa == "mes")
);
