const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

router.delete('/products/:id', async (req, res) => {
    const id = req.params.id;
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('products');
        await collection.deleteOne({ _id: new ObjectId(id) });
        res.send('Product removed');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error removing product');
    } finally {
        await client.close();
    }
});

module.exports = router;
