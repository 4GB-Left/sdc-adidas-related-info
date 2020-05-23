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
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC (5, 2) NOT NULL,
  sale_price NUMERIC (5, 2) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  stock INTEGER NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  likes Boolean
);

CREATE TABLE pants(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC (5, 2) NOT NULL,
  sale_price NUMERIC (5, 2) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  stock INTEGER NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  likes Boolean
);

CREATE TABLE socks(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC (5, 2) NOT NULL,
  sale_price NUMERIC (5, 2) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000) NOT NULL,
  stock INTEGER NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  likes Boolean
);

CREATE TABLE related_products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  price NUMERIC (5, 2) NOT NULL,
  sale_price NUMERIC (5, 2) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000),
  stock INTEGER NOT NULL,
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  likes Boolean
);

CREATE TABLE completeTheLook(
  id SERIAL PRIMARY KEY,
  shirt_id INTEGER NOT NULL REFERENCES shirts(id),
  pant_id INTEGER NOT NULL REFERENCES pants(id),
  socks_id INTEGER NOT NULL REFERENCES socks(id),
);

-- need to generate a set of 12 related product per each looks
CREATE TABLE relation_related_and_looks(
  look_id INTEGER NOT NULL REFERENCES completeTheLook(id),
  related_id INTEGER NOT NULL REFERENCES related_products(id)
)

INSERT INTO shirts (id, name, price, sale_price, picture, description, stock, size) VALUES (1, 'adidas track-runner', 55.45.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 18, 'medium', true);

INSERT INTO pants (id, name, price, sale_price, picture, description, stock, size) VALUES (1, 'straight leg', 25.99, 20.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 18, 'medium', true);

INSERT INTO socks (id, name, price, sale_price, picture, description, stock, size) VALUES (1, 'short socks', 16.99, 12.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 18, 'medium', true);

INSERT INTO related_products (id, name, price, sale_price, picture, description, stock, size) VALUES (1, 'adidas track-runner', 175.99, 125.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 18, 'medium', true);
INSERT INTO related_products (id, name, price, sale_price, picture, description, stock, size) VALUES (2, 'adidas track-runner', 180.99, 150.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 20, 'medium', true);
INSERT INTO related_products (id, name, price, sale_price, picture, description, stock, size) VALUES (3, 'adidas track-runner', 100.99, 90.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 10, 'medium', true);

INSERT INTO completeTheLook (id, shirt_id, pant_id, socks_id) VALUES (1, 1, 1, 1)

SELECT * FROM completeTheLook ctl
  INNER JOIN shirts
  ON ctl.shirt_id = shirts.id
  INNER JOIN pants
  ON ctl.pant_id = pants.id
  INNER JOIN socks
  ON ctl.sock_id = socks.id
  INNER JOIN related_products
  INNER JOIN relation_related_and_looks
  ON ctl.id = relation_related_and_looks.look_id AND related_products.id = relation_related_and_looks.related_id;

