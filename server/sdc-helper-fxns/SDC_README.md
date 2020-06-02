## postgres query syntax:
> SELECT * FROM complete_the_look ctl
    INNER JOIN shirts
    ON ctl.shirt_id = shirts.id
    INNER JOIN pants
    ON ctl.pant_id = pants.id
    INNER JOIN socks
    ON ctl.socks_id = socks.id
    INNER JOIN relation_related_and_looks rrt
    ON ctl.id = rrt.look_id
    INNER JOIN related_products rt
    ON rrt.related_id = rt.id AND ctl.id = 1;

## ananlyze postgres query
EXPLAIN (ANALYZE, buffers) SELECT * FROM complete_the_look ctl
  INNER JOIN shirts
  ON ctl.shirt_id = shirts.id
  INNER JOIN pants
  ON ctl.pant_id = pants.id
  INNER JOIN socks
  ON ctl.socks_id = socks.id
  INNER JOIN relation_related_and_looks rrt
  ON ctl.id = rrt.look_id
  INNER JOIN related_products rt
  ON rrt.related_id = rt.id AND ctl.id = 1000000;

## benchmark in postgres
make a sql file:

BEGIN
\set ctl_id random(1, 99999)
\use adidas_related_info
SELECT * FROM complete_the_look ctl
  INNER JOIN shirts
  ON ctl.shirt_id = shirts.id
  INNER JOIN pants
  ON ctl.pant_id = pants.id
  INNER JOIN socks
  ON ctl.socks_id = socks.id
  INNER JOIN relation_related_and_looks rrt
  ON ctl.id = rrt.look_id
  INNER JOIN related_products rt
  ON rrt.related_id = rt.id AND ctl.id = ctl_id;
END;


In the terminal, run:
> sudo -u postgres pgbench -c 10 -T 60 -f ./SDC/benchmark.sql -n

-c is the number of clients (i think we would do one???)
-T is how long to run the test in seconds
-f is the testing script
-n tells tool to not vacuum

## NOTE: this is how you import csv into postgres
https://dataschool.com/learn-sql/importing-data-from-csv-in-postgresql/

```> \copy shirts From '/Users/charliethao/Desktop/shirts.csv' DELIMITER ',' CSV HEADER;``

```> \copy related_products from '/Users/charliethao/Desktop/HackReactor_Immersive_March2020/hrsf127-SDC-2020/adidas-related-info/server/sdc-helper-fxns/csv-files/related_products.csv' DELIMITER ','  CSV HEADER;```


## Syntax to create index in postgres
```> CREATE INDEX indx_id ON shirts(id);```

```> CREATE INDEX shirt_id on shirts(shirt_id)```
```> CREATE INDEX pant_id on pants(pant_id)```
```> CREATE INDEX sock_id on socks(sock_id)```
```> CREATE INDEX related_id ON related_products(related_id);```
```> CREATE INDEX ctl_id on complete_the_look(ctl_id);```
```> CREATE INDEX look_relation_id ON relation_related_and_looks(look_id);```
```> CREATE INDEX related_prod_id ON relation_related_and_looks(related_id);```

Explanation: CREATE INDEX <create_name_to_represent_the_field_to_be_index> ON <table_name>(<column_field_name>);

## to delete the index
```> drop index pants_pkey, ....```

https://thoughtbot.com/blog/reading-an-explain-analyze-query-plan

## To get an execute time for query, use the following syntax
```> EXPLAIN ANALYZE SELECT * FROM shirts WHERE id = 100000;```

or

```> EXPLAIN (ANALYZE, BUFFERS) SELECT * FROM shirts WHERE id = 100000;```

## To clean the database test:
https://www.postgresql.org/docs/current/app-vacuumdb.html

```> vacuumdb test```

## To clean and analyze for the optimizer a database named bigdb:

```> vacuumdb --analyze bigdb```

## To clean a single table foo in a database named xyzzy, and analyze a single column bar of the table for the optimizer:

```>vacuumdb --analyze --verbose --table='foo(bar)' xyzzy```


## Use the mongoimport command
Now we’ll use the mongoimport command with a few flags to import the data. Let’s take a look at the command and then break down the options afterward:
https://kb.objectrocket.com/mongo-db/how-to-import-a-csv-into-mongodb-327

```> mongoimport --type csv -d test -c products --headerline --drop products.csv```

When you’re querying data in MongoDB, there are times when you need information that’s stored in documents across multiple collections. The $lookup function makes it easy to “join” multiple collections, returning results that contain fields from all specified collections. In this tutorial, we’ll take a closer look at the $lookup function in MongoDB and check out some examples of how it’s used.

https://kb.objectrocket.com/mongo-db/how-to-use-the-lookup-function-in-mongodb-1277

db.userInfo.aggregate([
    { $lookup:
        {
           from: "address",
           localField: "contact_name",
           foreignField: "name",
           as: "address"
        }
    }
]).pretty();

Let’s take a more detailed look at this query:

The "from" field indicates the MongoDB collection with which we’d like to join.

The "localField" specifies the field local to the collection on which we’re performing our query.

The "foreignField" field indicates the target field from the other collection with which we intend to join.

The "as" phrase will specify the name of our output array in the results.

db.complete_the_look.aggregate([
  { $match: { "id": 1 } },
    { $lookup: {
        from: "shirts",
        localField: "shirt_id",
        foreignField: "id",
        as: "shirt"
      }
    },
    {
      $unwind: "$shirt"
    },
    { $lookup: {
        from: "pants",
        localField: "pant_id",
        foreignField: "id",
        as: "pant"
      }
    },
    {
      $unwind: "$pant"
    },
    { $lookup: {
        from: "socks",
        localField: "sock_id",
        foreignField: "id",
        as: "sock"
      }
    },
    {
      $unwind: "$sock"
    }
  ]).pretty();

## this will return all the related products with "complete the look" with id = 1
  db.relation_related_and_looks.aggregate([
    { $match: { "look_id": 1 } },
    { $lookup: {
        from: "related_products",
        localField: "related_id",
        foreignField: "id",
        as: "related_products"
      }
    },
    {
      $unwind: "$related_products"
    },
  ]).pretty();


  ## benchmark test (mongo)
  db.complete_the_look.explain("executionStats").aggregate([
  { $match: { "id": 1 } },
    { $lookup: {
        from: "shirts",
        localField: "shirt_id",
        foreignField: "id",
        as: "shirt"
      }
    },
    {
      $unwind: "$shirt"
    },
    { $lookup: {
        from: "pants",
        localField: "pant_id",
        foreignField: "id",
        as: "pant"
      }
    },
    {
      $unwind: "$pant"
    },
    { $lookup: {
        from: "socks",
        localField: "sock_id",
        foreignField: "id",
        as: "sock"
      }
    },
    {
      $unwind: "$sock"
    }
  ])

  db.relation_related_and_looks.explain("executionStats").aggregate([
    { $match: { "look_id": 1 } },
    { $lookup: {
        from: "related_products",
        localField: "related_id",
        foreignField: "id",
        as: "related_products"
      }
    },
    {
      $unwind: "$related_products"
    },
  ])


## alter the foreign key
ALTER TABLE complet_the_look add CONSTRAINT FOREIGN KEY(ctl_shirt_id) REFERENCES shirts(shirt_id);
ALTER TABLE complet_the_look add CONSTRAINT FOREIGN KEY(ctl_pant_id) REFERENCES shirts(pant_id);
ALTER TABLE complet_the_look add CONSTRAINT FOREIGN KEY(ctl_sock_id) REFERENCES shirts(sock_id);
ALTER TABLE relation_related_and_looks CONSTRAINT FOREIGN KEY(rrl_look_id) REFERENCES complete_the_look(ctl_id);
ALTER TABLE relation_related_and_looks CONSTRAINT FOREIGN KEY(rrl_related_id) REFERENCES related_products(related_id);


## Connecting to EC2 for service
```> ssh ec2-user@13.57.188.248 -i Charlie-Thao23.pem```

## To get redis started

Install redis on your system first:

```> brew install redis```

then start the redis server:

```> redis-server```