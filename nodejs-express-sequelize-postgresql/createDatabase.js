const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  user: 'postgres',  // remplace par ton utilisateur si différent
  password: '123',   // remplace par ton mot de passe
  port: 5432         // Port par défaut pour PostgreSQL
});

client.connect();

client.query('CREATE DATABASE testdb', (err, res) => {
  if (err) {
    console.error('Database creation failed:', err);
  } else {
    console.log('Database "testdb" created successfully!');
  }
  client.end();
});
