window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");

  const isInputValid = (value) => (value === "" ? false : true);
  const isBetween = (length, min, max) =>
    length < min || length > max ? false : true;

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

  // create reusable erro message
  function errorMessage(input) {
    const inputFieldContainer = input.parentElement;

    inputFieldContainer.classList.remove("success");
    inputFieldContainer.classList.add("error");
    input.focus;
    const errorField = inputFieldContainer.querySelector(
      ".display-notification"
    );

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
    errorField.textContent = "";
  }

  function validateTextInputs(text) {
    let valid = false;
    const textInput = text.value;
    if (isInputValid(textInput)) {
      successMessage(text);

      valid = true;
    } else {
      errorMessage(text);
    }
    return { valid };
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
      displayMessageBtm.innerHTML = "Good to go";
    } else {
      displayMessageBtm.innerHTML = "Please choose an option";
    }

    return valid;
  }

  function validateReread(option) {
    let valid = false;
    let values = [];
    let displayMessageBtm = document.querySelector(
      ".display-notification-read"
    );

    option.forEach((element) => {
      if (element.checked) {
        valid = true;
        console.log(element.value);
        values.push(element.value);
      }
    });

    if (valid) {
      displayMessageBtm.innerHTML = "Good to go";
    } else {
      displayMessageBtm.innerHTML = "Please choose an option";
    }

    return valid;
  }

  form.addEventListener("submit", (e) => {
    let bookTitle = document.getElementById("title");
    const validateBook = validateTextInputs(bookTitle);

    let bookAuthor = document.getElementById("author");
    const validateAuthor = validateTextInputs(bookAuthor);

    let date = document.getElementById("date");
    const validateDate = validateTextInputs(date);
    let rating = document.getElementById("rating");
    const validateRating = validateTextInputs(rating);
    let bookGenre = document.getElementsByName("genre");
    const validatingGenre = validateGenre(bookGenre);
    let rereadSection = document.querySelectorAll('input[type="radio"]');
    const validatingReread = validateReread(rereadSection);
    let review = document.getElementById("review");
    const validateReview = validateTextInputs(review);

    const isFormValid =
      validateBook &&
      validateAuthor &&
      validateDate &&
      validatingGenre &&
      validatingReread &&
      validateRating &&
      validateReview;

    // if the form values all meet validation now we want to navigate to the next page with the form values
    // if (isFormValid) {
    //   displayFormData();
    // }

    e.preventDefault();
  });
});
