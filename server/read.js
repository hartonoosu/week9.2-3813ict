const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

router.get('/products', async (req, res) => {
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('products');
        const products = await collection.find().toArray();
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching products');
    } finally {
        await client.close();
    }
});

module.exports = router;
