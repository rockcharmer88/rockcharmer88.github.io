let form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {

    event.preventDefault();

    let formData = new FormData(form);

    fetch("https://formsubmit.co/ajax/brittany.best1@outlook.com", {
      method: "POST",
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById("formMessage").textContent =
        "Thanks! Your message has been sent.";

      form.reset();
    })
    .catch(error => {
      document.getElementById("formMessage").textContent =
        "Oops! Something went wrong.";
    });

  });
}