
psql;
\c adidas_related_info;

CREATE INDEX shirt_id ON shirts(id);
CREATE INDEX pant_id ON pants(id);
CREATE INDEX sock_id ON socks(id);
CREATE INDEX look_id ON complete_the_look(id);
CREATE INDEX related_id ON related_products(id);
CREATE INDEX looks_id ON relation_related_and_looks(look_id);
CREATE INDEX related_prod_id ON relation_related_and_looks(related_id);

\copy shirts From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/shirts.csv' DELIMITER ',' CSV HEADER;
\copy pants From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/pants.csv' DELIMITER ',' CSV HEADER;
\copy socks From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/socks.csv' DELIMITER ',' CSV HEADER;
\copy related_products From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/related_products.csv' DELIMITER ',' CSV HEADER;
\copy complete_the_look From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/looks.csv' DELIMITER ',' CSV HEADER;
\copy relation_related_and_looks From '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/relation_related_and_looks.csv' DELIMITER ',' CSV HEADER;