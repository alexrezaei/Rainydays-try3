// form validation

const nameForm = document.querySelector("#nameInput");
const email = document.querySelector("#email");
const form = document.querySelector("#contact-form");
const errorForm = document.querySelector(".errorForm");
const textArea = document.querySelector("textarea");

form.addEventListener("submit", (e) => {
  errorForm.innerHTML = "";
  const errorName = "Name is formatted wrong ";
  const regex = /^\S+@\S+\.\S+$/;
  e.preventDefault();
  if (nameForm.value === "" || nameForm.value === null) {
    errorForm.innerHTML += "<p>Name is required</p>";
  }

  if (!email.value.match(regex)) {
    errorForm.innerHTML += "<p>Email is formated wrong</p>";
  }

  if (textArea.value === "" || textArea.value === null) {
    errorForm.innerHTML += "<p>Text area Must atleast contain 1 character</p>";
  }
});
