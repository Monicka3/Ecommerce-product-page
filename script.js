// JavaScript code for adding products dynamically

document.addEventListener("DOMContentLoaded", function () {
    const productSection = document.getElementById("productSection");

    const products = [
        {
            name: "Product 1",
            description: "Description of Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$19.99",
            image: "product1.jpg"
        },
        {
            name: "Product 2",
            description: "Description of Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$29.99",
            image: "product2.jpg"
        },
        {
            name: "Product 3",
            description: "Description of Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: "$39.99",
            image: "product3.jpg"
        }
        // Add more products as needed
    ];

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>${product.price}</p>
            <button>Add to Cart</button>
        `;

        productSection.appendChild(productCard);
    });
});
