window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");

  const isRequired = (value) => (value === "" ? false : true);

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

  // function errorNotifications(text) {
  //   var displayValidationText = document.querySelector(".display-notification");
  //   displayValidationText.classList.remove("success");
  //   displayValidationText.classList.add("error");

  //   displayValidationText.innerHTML = "You have to input a message";
  // }

  // function validateInput(text) {
  //   if (!isRequired(text) && !isNotNull(text)) {
  //   }
  // }

  form.addEventListener("submit", (e) => {
    alert("clicked");
    // bookGenre.forEach((element) => {
    //   console.log(element.checked);
    // });

    let bookTitle = document.getElementById("title").value;
    let bookAuthor = document.getElementById("author").value;
    let date = document.getElementById("date").value;
    let rating = document.getElementById("rating").value;
    let bookGenre = document.getElementsByName("genre");
    let rereadSection = document.getElementsByName("re-read");

    let review = document.getElementById("review").value;
    console.log(bookAuthor);
    console.log(date);
    console.log(rating);
    console.log(typeof bookGenre);
    console.log(typeof rereadSection);
    console.log(bookTitle);
    e.preventDefault();
  });
});
