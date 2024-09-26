const connectToDB = require('./app');

async function removeProduct(id) {
    const { client, products } = await connectToDB();
    try {
        await products.deleteOne({ id });
        console.log('Product removed');
    } finally {
        client.close();
    }
}

removeProduct(1);
