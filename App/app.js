const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

async function connectToDB() {
    const client = new MongoClient(url);
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const products = db.collection('products');
    return { client, products };
}

module.exports = connectToDB;
