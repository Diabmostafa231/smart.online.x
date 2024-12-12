/**
 * Adds a product to the appropriate category section.
 * @param {string} name - The name of the product.
 * @param {string} image - The image URL for the product.
 * @param {string} category - The ID of the product category.
 * @param {string} price - The price of the product.
 * @param {string} link - The URL link to the product.
 */
function addProduct(name, image, category, price, link) {
    // Find the products container for the given category
    const categoryElement = document.getElementById(category);
    if (!categoryElement) {
        console.error(`Category '${category}' does not exist.`);
        return;
    }
    const productsContainer = categoryElement.querySelector(".products-container");

    // Create the product item
    const productItem = document.createElement("div");
    productItem.className = "product-item";

    // Create a link for the product
    const productLink = document.createElement("a");
    productLink.href = link;
    productLink.target = "_blank"; // Open link in a new tab

    // Add product image
    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = name;

    // Append image to the link
    productLink.appendChild(productImage);

    // Add product name
    const productName = document.createElement("div");
    productName.textContent = name;

    // Add product price
    const productPrice = document.createElement("div");
    productPrice.textContent = price;

    // Create "Add to Cart" button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.className = "add-to-cart-button";

    // Add event listener for the button
    addToCartButton.addEventListener("click", function () {
        alert(`${name} has been added to your cart!`);
    });

    // Append link, name, price, and button to the product item
    productItem.appendChild(productLink);
    productItem.appendChild(productName);
    productItem.appendChild(productPrice);
    productItem.appendChild(addToCartButton);

    // Append product item to the container
    productsContainer.appendChild(productItem);
}

// Laptops
addProduct("Lap2", "images/9.jpg", "laptops", "$150", "https://example.com/tablet-y");
addProduct("Lap1", "images/lap1.jpg", "laptops", "$150", "./pages/product2.html");
addProduct("Lap1", "images/lap1.jpg", "laptops", "$150", "https://example.com/tablet-y");
addProduct("Lap1", "images/lap1.jpg", "laptops", "$150", "https://example.com/tablet-y");


addProduct("Lenovo Laptop", "images/2.png", "laptops", "$999", "https://example.com/laptop-a");
addProduct("Lenovo Laptop", "images/2.png", "laptops", "$1099", "https://example.com/laptop-b");
// phones and taplets
addProduct("Samsung ", "images/1.png", "phones", "$799", "https://example.com/phone-x");
addProduct("Galaxy Tap A9", "images/tap.jpg", "phones", "$499", "https://example.com/tablet-y");
addProduct("Galaxy Tap A9", "images/tap.jpg", "Hardware", "$499", "https://example.com/tablet-y");
// Accesories
addProduct("AirTag", "images/air tag/5.png", "Accessories", "$100", "https://example.com/tablet-y");

addProduct("AirTag", "images/air tag/5.png", "Accessories", "$100", "https://example.com/tablet-y");
// pcs
addProduct("pc collection", "images/pc2.jpg", "PCs", "$200", "https://example.com/tablet-y");
// smart watches

addProduct("Smart Watch Pro", "images/smart/2.png", "smartwatches", "$100", "https://example.com/tablet-y");
// Headphones
addProduct("AirTag", "images/head1.jpg", "Headphones", "$100", "https://example.com/tablet-y");
// gaming consols
addProduct("playstation4", "images/play4.webp", "gaming consoles", "$100", "https://example.com/tablet-y");

