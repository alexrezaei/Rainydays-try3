let productWrapper = document.querySelector(".product-wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
let baseUrl = `https://lekseroggreier.com/wp-json/wc/store/products/${id}`;

async function loadProducts(url) {
  const res = await fetch(url);
  const product = await res.json();
  productWrapper.innerHTML += `
    <h1>${product.name}</h1>
    <img src="${product.images[0].src}" alt="">
    <p>Price: ${product.prices.price}</p>
    `;
  console.log(product);
}

loadProducts(baseUrl);
