// Shopify API interactions

// Function to fetch products from Shopify
async function fetchProducts() {
    const response = await fetch('https://your-shopify-store.myshopify.com/admin/api/2021-04/products.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        }
    });
    const data = await response.json();
    return data.products;
}

// Function to create a new product in Shopify
async function createProduct(productData) {
    const response = await fetch('https://your-shopify-store.myshopify.com/admin/api/2021-04/products.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
        },
        body: JSON.stringify({ product: productData })
    });
    const data = await response.json();
    return data.product;
}

// Exporting functions for use in other modules
module.exports = { fetchProducts, createProduct };