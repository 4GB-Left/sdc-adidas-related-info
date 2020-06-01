-- delete the database if it already exists
DROP DATABASE IF EXISTS adidas_related_info;

-- create the databases
CREATE DATABASE adidas_related_info;

\c adidas_related_info;

-- delete the tables if they exists
DROP TABLE IF EXISTS shirts;
DROP TABLE IF EXISTS pants;
DROP TABLE IF EXISTS socks;
DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS complete_the_look;
DROP TABLE IF EXISTS relation_related_and_looks;

-- research on the type "decimal" and how many place value****
-- price NUMERIC (5, 2) // 500.235 ~ 500.24
CREATE TABLE shirts(
  shirt_id SERIAL PRIMARY KEY,
  shirt_name VARCHAR(255),
  shirt_price NUMERIC (5, 2) NOT NULL,
  shirt_sale_price NUMERIC (5, 2) NOT NULL,
  shirt_picture VARCHAR(255) NOT NULL,
  shirt_description VARCHAR(1000) NOT NULL,
  shirt_stock INTEGER NOT NULL,
  shirt_size VARCHAR(255),
  shirt_likes Boolean
);

CREATE TABLE pants(
  pant_id SERIAL PRIMARY KEY,
  pant_name VARCHAR(255),
  pant_price NUMERIC (5, 2) NOT NULL,
  pant_sale_price NUMERIC (5, 2) NOT NULL,
  pant_picture VARCHAR(255) NOT NULL,
  pant_description VARCHAR(1000) NOT NULL,
  pant_stock INTEGER NOT NULL,
  pant_size VARCHAR(255),
  pant_likes Boolean
);

CREATE TABLE socks(
  sock_id SERIAL PRIMARY KEY,
  sock_name VARCHAR(255),
  sock_price NUMERIC (5, 2) NOT NULL,
  sock_sale_price NUMERIC (5, 2) NOT NULL,
  sock_picture VARCHAR(255) NOT NULL,
  sock_description VARCHAR(1000) NOT NULL,
  sock_stock INTEGER NOT NULL,
  sock_size VARCHAR(255),
  sock_likes Boolean
);

CREATE TABLE related_products(
  related_id SERIAL PRIMARY KEY,
  related_name VARCHAR(255),
  related_price NUMERIC (5, 2) NOT NULL,
  related_sale_price NUMERIC (5, 2) NOT NULL,
  related_picture VARCHAR(255) NOT NULL,
  related_description VARCHAR(1000),
  related_stock INTEGER NOT NULL,
  related_size VARCHAR(255),
  related_likes Boolean
);

CREATE TABLE complete_the_look(
  ctl_id SERIAL PRIMARY KEY,
  ctl_shirt_id INTEGER NOT NULL REFERENCES shirts(shirt_id),
  ctl_pant_id INTEGER NOT NULL REFERENCES pants(pant_id),
  ctl_sock_id INTEGER NOT NULL REFERENCES socks(sock_id)
);

-- need to generate a set of 12 related product per each looks
CREATE TABLE relation_related_and_looks(
  look_id INTEGER NOT NULL REFERENCES complete_the_look(ctl_id),
  related_id INTEGER NOT NULL REFERENCES related_products(related_id)
);
