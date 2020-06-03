const { Pool, Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  // host: 'ec2-54-177-224-138.us-west-1.compute.amazonaws.com',
  database: 'adidas_related_info',
  password: '',
  port: 5432,
  prepared_statements: true,
  reconnect: true,
  prepare_threshold: 0,
  server_prepare_mode: 'transaction'
});

client.connect()
  .then(() => {
    console.log('postgres database is connected...\n')
  })
  .catch(e => console.log('Database connection error: ', e))



module.exports = client;