// acquire the database connection
const db = require('../sdc-db-config/postgre.config.js');

// const redis = require('redis');
// const client = redis.createClient();

// client.on('connect', function() {
//     console.log('Redis client connected');
// });

// client.on('error', function (err) {
//     console.log('Something went wrong ' + err);
// });

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

//   client.get(id)
//     .then((cache) => {
//       if(cache) {
//         callback(null, cache);
//       }

//       if(!cache) {
//         db.query(queryStr, (err, data) => {
//           if(err) {
//             // console.log('error in query: ', err)
//             callback(err, null);
//           } else {
//             // console.log('data => ', data.rows)
//             client.set(id, data.rows);
//             callback(null, data.rows);
//           }
//         });
//       }
//     }).catch(e => console.log('Database error: ', e))
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

//  client.get(id)
//    .then((cache) => {
//      if(cache) {
//        callback(null, cache);
//      }

//      if(!cache) {
//        db.query(queryStr, (err, data) => {
//          if(err) {
//            // console.log('error in query: ', err)
//             callback(err, null);
//          } else {
//            // console.log('data => ', data.rows)
//            client.set(id, data.rows);
//            callback(null, data.rows);
//          }
//        });
//      }
//    }).catch(e => console.log('Database error: ', e))
}

module.exports = {
  completeTheLook,
  relatedProduct,
}
