CREATE DATABASE inventario;

CREATE TABLE usuario(
    id Serial PRIMARY KEY,
    usuario VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL
);