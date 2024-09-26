const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017'; // MongoDB connection URL
const client = new MongoClient(url); // MongoDB client

const dbName = 'mydb'; // Database name

// Connect to MongoDB
async function connectToDB() {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db(dbName);
    const products = db.collection('products');
    return { client, products };
}

module.exports = connectToDB;

// Add product code (keep this as it is)
const connectToDB = require('./app'); 

async function addProduct(product) {
    const { client, products } = await connectToDB(); 
    try {
        await products.insertMany(product); 
        console.log('Products added successfully');
    } catch (err) {
        console.error('Error adding products:', err);
    } finally {
        client.close(); 
    }
}

// Example to add products
addProduct([
    { id: 1, name: 'Product A', description: 'Description A', price: 10.99, units: 100 },
    { id: 2, name: 'Product B', description: 'Description B', price: 20.99, units: 200 },
    { id: 3, name: 'Product C', description: 'Description C', price: 30.99, units: 300 }
]);

// NEW FUNCTION: Update a product by its id
async function updateProduct(id, updatedFields) {
    const { client, products } = await connectToDB(); // Connect to DB
    try {
        // Use the MongoDB update method to update fields
        const result = await products.updateOne(
            { id: id }, // Match the product by id
            { $set: updatedFields } // Set the new field values
        );
        if (result.matchedCount > 0) {
            console.log(`Product with id ${id} updated successfully`);
        } else {
            console.log(`No product found with id ${id}`);
        }
    } catch (err) {
        console.error('Error updating product:', err);
    } finally {
        client.close(); // Close the connection after the operation
    }
}

// Example: Update product with id = 1
updateProduct(1, { price: 15.99, units: 150, description: 'Updated Description A' });
