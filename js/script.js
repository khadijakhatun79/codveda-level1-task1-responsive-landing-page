const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  menuToggle.innerHTML = isOpen
    ? '<span class="close-symbol">×</span>'
    : '<span></span><span></span><span></span>';
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.innerHTML = "<span></span><span></span><span></span>";
  });
});

const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    formMessage.textContent = "Please enter a valid email address.";
    emailInput.focus();
    return;
  }

  formMessage.textContent = "Thanks for subscribing! This demo form does not send emails yet.";
  subscribeForm.reset();
});
