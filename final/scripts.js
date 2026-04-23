let form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let message = "Thanks, " + name + "! Your message has been received.";
  document.getElementById("formMessage").textContent = message;
  form.reset();
});