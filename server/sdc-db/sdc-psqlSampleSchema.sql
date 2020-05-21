-- delete the database if it already exists
DROP DATABASE IF EXISTS adidas_related_info;

-- create the databases
CREATE DATABASE adidas_related_info;

-- delete the tables if they exists
DROP TABLE IF EXISTS shirts;
DROP TABLE IF EXISTS pants;
DROP TABLE IF EXISTS socks;
DROP TABLE IF EXISTS complete_the_look;
DROP TABLE IF EXISTS related_products;
DROP TABLE IF EXISTS products;

CREATE TABLE shirts(
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DOUBLE NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  stock INTEGER NOT NULL
);

CREATE TABLE pants(
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price DOUBLE NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  stock INTEGER NOT NULL
);

CREATE TABLE socks(
  id   SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  stock INTEGER NOT NULL
);

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price INTEGER NOT NULL,
  sale_price INTEGER NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000),
  category VARCHAR(255),
  likes Boolean
);

CREATE TABLE completeTheLook(
  id SERIAL PRIMARY KEY,
  shirt_id INTEGER REFERENCES shirts(id),
  pant_id INTEGER REFERENCES pants(id),
  socks_id INTEGER REFERENCES socks(id),
  product_id INTEGER REFERENCES products(id),
  category VARCHAR(255)
);

INSERT INTO shirts (id, name, price, size, stock) VALUES (1, "v-neck", "medium", 16.99, 12.99, 1);
INSERT INTO pants (id, name, price, size, stock) VALUES (1, "straight leg", "medium", 25.99, 20.00, 1);
INSERT INTO socks (id, name, price, size, stock) VALUES (1, "short socks", "medium", 16.99, 12.99, 1);
INSERT INTO products (id, name, price, sale_price, picture, description, category, likes) VALUES (1, "adidas track-runner", 175.99, 125.99, "https://picsum.photos/seed/picsum/200/300", "Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.", "winter", true);
INSERT INTO completeTheLook (id, shirt_id, pant_id, socks_id, product_id, category) VALUES (1, 1, 1, 1, 1, "winter")

SELECT * FROM completeTheLook ctl
  INNER JOIN shirts
  ON ctl.shirt_id = shirts.id
  INNER JOIN pants
  ON ctl.pant_id = pants.id
  INNER JOIN socks
  ON ctl.sock_id = socks.id
  INNER JOIN products
  ON ctl.product_id = products.id;

