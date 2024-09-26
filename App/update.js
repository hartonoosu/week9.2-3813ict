const connectToDB = require('./app');

async function updateProduct(id, updateData) {
    const { client, products } = await connectToDB();
    try {
        await products.updateOne({ id }, { $set: updateData });
        console.log('Product updated');
    } finally {
        client.close();
    }
}

updateProduct(1, { price: 15.99, units: 90 });
