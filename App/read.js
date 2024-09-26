const connectToDB = require('./app');

async function readProducts() {
    const { client, products } = await connectToDB();
    try {
        const allProducts = await products.find().toArray();
        console.log(allProducts);
    } finally {
        client.close();
    }
}

readProducts();
