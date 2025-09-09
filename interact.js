window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");

  const isRequired = (value) => (value === "" ? false : true);

  const isEmailValid = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const isPasswordSecure = (password) => {
    const re = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
  };

  function errorMessage(input) {
    const inputFieldContainer = input.parentElement;
    console.log(inputFieldContainer);
    inputFieldContainer.classList.remove("success");
    inputFieldContainer.classList.add("error");
    input.focus;
    const errorField = inputFieldContainer.querySelector(
      ".display-notification"
    );
    console.log(errorField);
    const convertTouppercase = input.name;
    let name = convertTouppercase.toUpperCase();
    errorField.textContent = `The ${name} Cannot be blank`;
  }

  function successMessage(input) {
    const inputFieldContainer = input.parentElement;

    inputFieldContainer.classList.remove("error");
    inputFieldContainer.classList.add("success");

    const errorField = inputFieldContainer.querySelector(
      ".display-notification"
    );
    console.log(errorField);
    errorField.textContent = "";
  }

  function validateTextInput(text) {
    console.log(text);
    const valid = true;
    const textInput = text.value;
    if (textInput === "" && textInput === null) {
      errorMessage(text);
      return valid;
    } else {
      successMessage(text);
      console.log("yo");
    }
  }

  function validateGenre(genre) {
    let valid = false;
    let values = [];
    let displayMessageBtm = document.querySelector(
      ".display-notification-checkbox"
    );

    genre.forEach((element) => {
      if (element.checked) {
        valid = true;
        console.log(element.value);
        values.push(element.value);
      }
    });

    if (valid) {
      displayMessageBtm.innerHTML = "Success";
      alert("hello");
    } else {
      displayMessageBtm.innerHTML = "Please choose one option";
    }

    return { valid, values }; // optional
  }

  form.addEventListener("submit", (e) => {
    let bookTitle = document.getElementById("title");
    const validateBook = validateTextInput(bookTitle);

    let bookAuthor = document.getElementById("author");
    const validateAuthor = validateTextInput(bookAuthor);

    let date = document.getElementById("date");
    const validateDate = validateTextInput(date);
    let rating = document.getElementById("rating");
    const validateRating = validateTextInput(rating);
    let bookGenre = document.getElementsByName("genre");
    const validatingGenre = validateGenre(bookGenre);
    let rereadSection = document.getElementsByName("re-read");

    let review = document.getElementById("review");
    const validateReview = validateTextInput(review);

    const isFormValid =
      validateBook &&
      validateAuthor &&
      validateDate &&
      validatingGenre &&
      validateRating &&
      validateReview;

    e.preventDefault();
  });
});
