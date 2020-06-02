// acquire the database connection
const Redis = require('ioredis');
const db = require('../sdc-db-config/postgre.config.js');

// const redis = new Redis({
//   port: 5432, // Redis port
//   host: "localhost", // Redis host
//   family: 4, // 4 (IPv4) or 6 (IPv6)
//   password: "password",
//   db: 0,
// });

// redis.on('connect', () => {
//   console.log('Redis connected');
// });

// redis.on('error', (err) => {
//   console.log('Redis Error: ', err);
// })

function completeTheLook(id, callback) {
  console.log('hello (id) => ', id);

  let queryStr = `SELECT *
  FROM complete_the_look ctl
  INNER JOIN shirts
  ON ctl.ctl_shirt_id = shirts.shirt_id
  INNER JOIN pants
  ON ctl.ctl_pant_id = pants.pant_id
  INNER JOIN socks
  ON ctl.ctl_sock_id = socks.sock_id AND ctl.ctl_id = ${id};`

  db.query(queryStr, (err, data) => {
    if(err) {
      // console.log('error in query: ', err)
      callback(err, null);
    } else {
      // console.log('data => ', data.rows)
      callback(null, data.rows);
    }
  });

  // redis.get(id)
  //   .then((cache) => {
  //     if(cache) {
  //       callback(null, cache);
  //     }

  //     if(!cache) {
  //       db.query(queryStr, (err, data) => {
  //         if(err) {
  //           // console.log('error in query: ', err)
  //           callback(err, null);
  //         } else {
  //           // console.log('data => ', data.rows)
  //           redis.set(id, data.rows);
  //           callback(null, data.rows);
  //         }
  //       });
  //     }
  //   });
}

function relatedProduct(id, callback) {
  console.log('hello (id) => ', id);

  let queryStr = `SELECT *
  FROM complete_the_look ctl
  INNER JOIN relation_related_and_looks rrt
  ON ctl.ctl_id = rrt.look_id
  INNER JOIN related_products rt
  ON rrt.related_id = rt.related_id AND ctl.ctl_id = ${id};`

  db.query(queryStr, (err, data) => {
    if(err) {
      // console.log('error in query: ', err)
      callback(err, null);
    } else {
      // console.log('data => ', data.rows)
      callback(null, data.rows);
    }
  });

  // redis.get(id)
  //   .then((cache) => {
  //     if(cache) {
  //       callback(null, cache);
  //     }

  //     if(!cache) {
  //       db.query(queryStr, (err, data) => {
  //         if(err) {
  //           // console.log('error in query: ', err)
  //           callback(err, null);
  //         } else {
  //           // console.log('data => ', data.rows)
  //           redis.set(id, data.rows);
  //           callback(null, data.rows);
  //         }
  //       });
  //     }
  //   });
}

module.exports = {
  completeTheLook,
  relatedProduct
}
