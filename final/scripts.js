let form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function() {

    let name = document.getElementById("name").value;

    let message = "Thanks, " + name + "! Your message has been sent.";

    document.getElementById("formMessage").textContent = message;

  });
}