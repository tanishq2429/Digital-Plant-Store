const searchInput = document.getElementById('searchInput');
const searchResult = document.getElementById('searchResult');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  searchResult.innerHTML = ''; // Clear previous results

  // Sample product data (you should replace this with real data)
  const products = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Camera',
    'Smartwatch'
  ];

  const filteredProducts = products.filter(product => product.toLowerCase().includes(query));

  filteredProducts.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.textContent = product;
    searchResult.appendChild(productDiv);
  });

  if (!filteredProducts.length && query) {
    searchResult.innerHTML = '<div>No products found</div>';
  }
});

/* Full-width slider for hero section */
.carousel-item {
  height: 50; /* Full screen height */
  background-position: center;
  background-size: cover;
}

.carousel-caption h1 {
  font-size: 3rem;
  font-weight: bold;
}

.carousel-caption p {
  font-size: 1.5rem;
}
