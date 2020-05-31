const { Pool, Client } = require('pg');

const client = new Client({
  user: 'charliethao',
  host: 'localhost',
  database: 'adidas_related_info',
  password: 'password',
  port: 5432,
});

client.connect()
  .then(() => {
    console.log('postgres database is connected...\n')
  })
  .catch(e => console.log('Database connection error: ', e))



module.exports = client;