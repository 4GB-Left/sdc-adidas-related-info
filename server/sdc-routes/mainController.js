// acquire the database connection
const db = require('../sdc-db-config/postgre.config.js');

function completeTheLook(id, callback) {
  console.log('hello (id) => ', id);

  let queryStr = `SELECT *
  FROM complete_the_look ctl
  INNER JOIN shirts
  ON ctl.ctl_shirt_id = shirts.shirt_id
  INNER JOIN pants
  ON ctl.ctl_pant_id = pants.pant_id
  INNER JOIN socks
  ON ctl.ctl_sock_id = socks.sock_id
  INNER JOIN relation_related_and_looks rrt
  ON ctl.ctl_id = rrt.look_id
  INNER JOIN related_products rt
  ON rrt.related_id = rt.related_id AND ctl.ctl_id = ${id};`

  db.query(queryStr, (err, data) => {
    if(err) {
      // console.log('error in query: ', err)
      callback(err, null);
    } else {
      console.log('data => ', data.rows)
      callback(null, data.rows)
    }
  })
}

module.exports = {
  completeTheLook,
}
