const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

const url = 'mongodb://localhost:27017';
const dbName = 'mydb';

router.put('/products/:id', async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    const client = new MongoClient(url);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('products');
        await collection.updateOne({ _id: new ObjectId(id) }, { $set: updatedProduct });
        res.send('Product updated');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating product');
    } finally {
        await client.close();
    }
});

module.exports = router;
