let burger = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");

let timesClicked = 1;

burger.addEventListener("click", () => {
  timesClicked++;
  if (timesClicked % 2 == 0) {
    navBar.classList.remove("none");
  } else {
    navBar.classList.add("none");
  }
});

// show cart
let timesClickedCart = 1;

const shoppingCartImage = document.querySelector("#shoppingcart");
const cartDisplay = document.querySelector(".shopping-cart");

shoppingCartImage.addEventListener("click", () => {
  timesClickedCart++;
  if (timesClickedCart % 2 == 0) {
    cartDisplay.classList.remove("nothing");
  } else {
    cartDisplay.classList.add("nothing");
  }
});

console.log(cartDisplay);
