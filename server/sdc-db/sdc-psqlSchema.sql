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
  size VARCHAR(255),
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
  size VARCHAR(255),
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
  size VARCHAR(255),
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
  size VARCHAR(255),
  likes Boolean
);

CREATE TABLE complete_the_look(
  id SERIAL PRIMARY KEY,
  shirt_id INTEGER NOT NULL REFERENCES shirts(id),
  pant_id INTEGER NOT NULL REFERENCES pants(id),
  sock_id INTEGER NOT NULL REFERENCES socks(id)
);

-- need to generate a set of 12 related product per each looks
CREATE TABLE relation_related_and_looks(
  look_id INTEGER NOT NULL REFERENCES complete_the_look(id),
  related_id INTEGER NOT NULL REFERENCES related_products(id)
);

-- SELECT * FROM complete_the_look ctl
--   INNER JOIN shirts
--   ON ctl.shirt_id = shirts.id
--   INNER JOIN pants
--   ON ctl.pant_id = pants.id
--   INNER JOIN socks
--   ON ctl.socks_id = socks.id
--   INNER JOIN relation_related_and_looks rrt
--   ON ctl.id = rrt.look_id
--   INNER JOIN related_products rt
--   ON rrt.related_id = rt.id AND ctl.id = 1;

-- EXPLAIN (ANALYZE, buffers) SELECT * FROM complete_the_look ctl
--   INNER JOIN shirts
--   ON ctl.shirt_id = shirts.id
--   INNER JOIN pants
--   ON ctl.pant_id = pants.id
--   INNER JOIN socks
--   ON ctl.socks_id = socks.id
--   INNER JOIN relation_related_and_looks rrt
--   ON ctl.id = rrt.look_id
--   INNER JOIN related_products rt
--   ON rrt.related_id = rt.id AND ctl.id = 1000000;


