const products = [
  { id: 1, name: "Wireless Headphones", price: 129.99, category: "electronics" },
  { id: 2, name: "Cotton T-Shirt", price: 24.99, category: "clothing" },
  { id: 3, name: "Bluetooth Speaker", price: 89.99, category: "electronics" },//This is an array of objects
  { id: 4, name: "Denim Jeans", price: 59.99, category: "clothing" }
];

const filterSelect = document.getElementById("filter");
const productGrid = document.getElementById("productGrid");

function displayProducts(filter) {
  productGrid.innerHTML = "";

  const filtered =
    filter === "all"
      ? products
      : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${product.name}</h2>
      <p class="price">$${product.price}</p>
      <span class="tag ${product.category}">
        ${product.category}
      </span>
    `;

    productGrid.appendChild(card);
  });
}

filterSelect.addEventListener("change", function () {
  displayProducts(this.value);
});

// Initial load
displayProducts("all");
