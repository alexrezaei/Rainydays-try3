const colors = document.querySelector("#colors");
let color = "black";

colors.addEventListener("change", (e) => {
  color = colors.value;
});

// size
let size = "small";
const sizes = document.querySelector("#sizes");
// shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const addToCart = document.querySelector(".add-cart");

addToCart.addEventListener("click", () => {
  shoppingCart.innerHTML = "";
  shoppingCart.innerHTML = `
  <img src="/img/raincoat.jpeg" alt="raincoat">
  <p>Color:${color}</p>
  <p>Size:${size}</p>
  `;
});
