// Sample product data
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        imageUrl: "images/2.png",
        link: "https://example.com/product1"
    },
    {
        id: 2,
        name: "Product 2",
        price: 29.99,
        imageUrl: "images/2.png",
        link: "https://example.com/product2"
    },
    {
        id: 3,
        name: "Product 3",
        price: 39.99,
        imageUrl: "images/2.png",
        link: "https://example.com/product3"
    }
];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list2');

    products.forEach(product => {
        // Create product element
        const productDiv = document.createElement('div');
        productDiv.className = 'product';

        // Create link element
        const productLink = document.createElement('a');
        productLink.href = product.link;
        productLink.target = "_blank"; // Open in a new tab

        // Create image element
        const productImage = document.createElement('img');
        productImage.src = product.imageUrl;
        productImage.alt = product.name;

        // Create product name and price elements
        const productName = document.createElement('h2');
        productName.innerText = product.name;

        const productPrice = document.createElement('p');
        productPrice.innerText = `$${product.price.toFixed(2)}`;

        // Append elements
        productLink.appendChild(productImage);
        productDiv.appendChild(productLink);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productList.appendChild(productDiv);
    });
}

// Call the function to display products
displayProducts();