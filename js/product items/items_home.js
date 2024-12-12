// Sample product data
const products = [
    {
        id: 1,
        name: 'Asus Laptop',
        image: 'images/lap1.jpg',
        price: 790,
        link: "pages/product2.html"
    },
    {
        id: 2,
        name: 'Phone 1',
        image: 'images/phone1.jpg',
        price: 150,
        link: "pages/product3.html"
    },
    {
        id: 3,
        name: 'Screen 1',
        image: 'images/screen1.jpg',
        price: 133,
        link: "pages/product4.html"
    },
    {
        id: 4,
        name: 'AirPods',
        image: 'images/air1.jpg',
        price: 150,
        link: "pages/product5.html"
    },
    {
        id: 6,
        name: 'Laptop2',
        image: 'images/7.png',
        price: 133,
        link: "pages/product6.html"
    },
    {
        id: 7,
        name: 'IPHONE X max',
        image: 'images/6.png',
        price: 133,
        link: "pages/.png.html"
    },
    {
        id: 8,
        name: 'iPHONE X',
        image: 'images/4.png',
        price: 133,
        link: "pages/product8.html"
    },
    {
        id: 9,
        name: 'Screen 5',
        image: 'images/screen1.jpg',
        price: 133,
        link: "pages/product9.html"
    }
];

// Function to add products to the page
function addProducts() {
    const container = document.querySelector('.products-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        // HTML structure for each product
        productDiv.innerHTML = `
            <a href="${product.link}" >
                <img src="${product.image}" alt="${product.name}">
            </a>
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;

        container.appendChild(productDiv);
    });

    // Add event listeners to the "Add to Cart" buttons
    const cartButtons = document.querySelectorAll('.add-to-cart');
    cartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const productId = this.getAttribute('data-id');
            const product = products.find(p => p.id == productId);
            alert(`${product.name} has been added to your cart! Price: $${product.price.toFixed(2)}`);
        });
    });
}

// Call the function to add products when the page loads
window.onload = addProducts;
