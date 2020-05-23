-- delete the database if it already exists
DROP DATABASE IF EXISTS adidas_related_info;

-- create the databases
CREATE DATABASE adidas_related_info;

\c adidas_related_info;

-- delete the tables if they exists
DROP TABLE IF EXISTS products;

-- research on the type "decimal" and how many place value****
-- price NUMERIC (5, 2) // 500.235 ~ 500.24

CREATE TABLE products(
  id SERIAL PRIMARY KEY,
  product_type VARCHAR(255) NOT NULL,
  product_name VARCHAR(255) NOT NULL,
  price NUMERIC (5, 2) NOT NULL,
  sale_price NUMERIC (5, 2) NOT NULL,
  picture VARCHAR(255) NOT NULL,
  description VARCHAR(1000),
  size ENUM("x-small", "small", "medium", "large", "x-large"),
  stock INTEGER NOT NULL
  likes Boolean
);

CREATE TABLE completeTheLook(
  id SERIAL PRIMARY KEY,
  shirt_id INTEGER NOT NULL,
  pant_id INTEGER NOT NULL,
  socks_id INTEGER NOT NULL,
  related_product_id INTEGER NOT NULL,
);

INSERT INTO shirts (id, product_type, product_name, price, sale_price, picture, description, size, stock, likes) VALUES (1, 'top', 'adidas track-runner', 35.99, 55.99, 'https://picsum.photos/seed/picsum/200/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 'medium', 18, true);

INSERT INTO shirts (id, product_type, product_name, price, sale_price, picture, description, size, stock, likes) VALUES (2, 'bottom', 'adidas track-runner short', 29.99, 30.99, 'https://picsum.photos/seed/picsum/199/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 'medium', 10, true);

INSERT INTO shirts (id, product_type, product_name, price, sale_price, picture, description, size, stock, likes) VALUES (3, 'socks', 'adidas track-runner socks', 10.99, 12.99, 'https://picsum.photos/seed/picsum/198/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 'medium', 10, true);

INSERT INTO shirts (id, product_type, product_name, price, sale_price, picture, description, size, stock, likes) VALUES (4, 'related', 'adidas track-runner socks', 55.99, 75.99, 'https://picsum.photos/seed/picsum/197/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 'medium', 10, true);

INSERT INTO shirts (id, product_type, product_name, price, sale_price, picture, description, size, stock, likes) VALUES (5, 'related', 'adidas track-runner socks', 55.99, 75.99, 'https://picsum.photos/seed/picsum/197/300', 'Lorem ea ipsum elit officia mollit dolor commodo et. Consequat ea eu eiusmod sunt adipisicing officia. Exercitation id sint nisi cillum nulla enim anim id pariatur laborum officia amet. Ea voluptate ipsum ea veniam id exercitation id.', 'medium', 10, true);


INSERT INTO completeTheLook (id, shirt_id, pant_id, socks_id, related_product_id) VALUES (1, 2, 3, 4, 5);

