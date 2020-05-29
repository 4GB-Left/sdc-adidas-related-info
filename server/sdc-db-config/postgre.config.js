const { Pool, Client } = require('pg');

const client = new Client({
  user: 'charliethao',
  host: 'localhost',
  database: 'adidas_related_info',
  password: 'password',
  port: 5432,
});

client.connect(() => {
  console.log('postgres database is connected...\n')
});

module.exports = client;