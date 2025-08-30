// Smooth scroll to section

function scrollToSection(id) {

  document.getElementById(id).scrollIntoView({ behavior: "smooth" });

}

// Contact form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  alert("Thank you! Your message has been sent.");

  this.reset();

});