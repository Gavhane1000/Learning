const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const contactData = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  localStorage.setItem("contactDetails", JSON.stringify(contactData));

  // Redirect to display page
  window.location.href = "details.html";
});
