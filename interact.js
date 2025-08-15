window.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("form");

  let bookTitle = document.getElementById("title").value;

  let bookAuthor = document.getElementById("author").value;
  let date = document.getElementById("date").value;
  let rating = document.getElementById("rating").value;
  let review = document.getElementById("review").value;

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

  form.addEventListener("submit", (e) => {
    alert("clicked");
    let bookTitle = document.getElementById("title").value;
    console.log(bookTitle);
    e.preventDefault();
  });
});
