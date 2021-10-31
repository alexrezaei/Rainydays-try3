const baseUrl = "https://lekseroggreier.com/wp-json/wc/store/products";
const productWrapper = document.querySelector(".wrapper");
async function getProducts(url) {
  const res = await fetch(url);
  const products = await res.json();
  console.log(products);
  products.forEach((product) => {
    productWrapper.innerHTML += `
    <div class="row">
      <div class="column">
          <div class="column-1">
              <img src="${product.images[0].src}" alt="">
          </div>
      </div>
      <div class="column">
          <div class="column-2">
              <div class="sizing">
                  <select id="colors">
                      <option value="Black" selected>black</option>
                      <option value="yellow">yellow</option>
                      <option value="blue">blue</option>
                  </select>
                  <select id="sizes">
                      <option value="small" selected>small</option>
                      <option value="medium">medium</option>
                      <option value="large">large</option>
                  </select>
              </div>
              <h5 class="price text-primary">$${product.prices.price}</h5>
              <h2>${product.name}<h2>
              ${product.description}
              <a href="product.html?id=${product.id}" class="add-cart">Add to cart</a>
          </div>
      </div>
    </div>
      `;
  });
}

getProducts(baseUrl);
