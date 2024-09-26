const express = require('express');
const { MongoClient } = require('mongodb');
const router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

// Add new product route
router.post('/products', async (req, res) => {
    const product = req.body;

    console.log('Received product:', product);  // Log the entire product

    // Temporarily remove validation for troubleshooting
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('products');

        await collection.insertOne(product);  // Insert whatever comes in
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (err) {
        console.error('Error while adding product:', err);
        res.status(500).json({ error: 'Error adding product' });
    }
});

module.exports = router;
