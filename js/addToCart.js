const colors = document.querySelector("#colors");
let color = "black";

colors.addEventListener("change", (e) => {
  color = colors.value;
});

// size
let size = "small";
const sizes = document.querySelector("#sizes");

sizes.addEventListener("change", (e) => {
  size = sizes.value;
});
// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const addToCart = document.querySelector(".add-cart");

addToCart.addEventListener("click", () => {
  shoppingCart.innerHTML = "";
  shoppingCart.innerHTML = `
  <img src="/img/raincoat.jpeg" alt="raincoat">
  <p>Color:${color}</p>
  <p>Size:${size}</p>
  <button id="remove-cart">Remove from cart</button>
  `;
});

shoppingCart.addEventListener("click", (e) => {
  if (e.target.id == "remove-cart") {
    shoppingCart.innerHTML = "<p>Empty<p>";
  }
});
