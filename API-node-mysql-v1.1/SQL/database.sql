CREATE DATABASE save_on_floral;

USE save_on_floral;

CREATE TABLE users
(
    id_user INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(50) NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    rol VARCHAR(30) NOT NULL default "Invitado",
    estado VARCHAR(30) NOT NULL default "Pendiente",
    numTel BIGINT,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE products
(
    id_product INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    description_product TEXT NOT NULL,
    unit_valor INT NOT NULL,
    estado VARCHAR(30) default "No Disponible"    
);

CREATE TABLE sales
(
    id_sale INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    total_value INT NOT NULL,
    id_product INT NOT NULL,
    cant_product INT NOT NULL,
    unit_price INT NOT NULL,
    fecha DATE NOT NULL,
    id_client INT NOT NULL,
    nombre VARCHAR(50) NOT NULL,
    vendedor VARCHAR(50) NOT NULL,
    FOREIGN KEY (id_product) REFERENCES products(id_product)    
);

DESCRIBE users;

INSERT INTO products values(null,"Rosa roja", 5000, "Disponible");
INSERT INTO products values(null,"Lirio blanco", 8000, "Disponible");
INSERT INTO products values(null,"Margarita amarilla", 7000, "Disponible");
INSERT INTO products values(null,"Jazmin blanco", 10000, "Disponible");
INSERT INTO products values(null,"Tulipan naranja", 6000, "No Disponible");
SELECT * FROM users;

SELECT * FROM products;

SELECT*FROM sales;

INSERT INTO sales values(null, 80000, 2, 10, 8000, NOW(), 129387, "Pepito Perez", "Tiger Nixon");
INSERT INTO sales values(null, 50000, 1, 10, 5000, "04.10.2021", 981723, "Juan Diaz", "Tiger Nixon");
INSERT INTO sales values(null, 100000, 4, 10, 10000, NOW(), 01783, "Juan Martinez", "Tiger Nixon");
INSERT INTO sales values(null, 5000, 1, 1, 5000, "10.09.2021", 98237492, "Maria Ochoa", "Tiger Nixon");
INSERT INTO sales values(null, 14000, 3, 2, 7000, "09.09.2021", 382746, "Simon Head", "Tiger Nixon");

SELECT * FROM users

INSERT INTO users values(null, "LM09", "Luis", "Invitado", "Autorizado", 3175359094, "lemt.09@gmail.com");
INSERT INTO users values(null, "MrMen09", "Luis", "Administrador", "Autorizado", 3175359094, "lemendozat@correo.udistrital.edu.co");  
