const menu = document.getElementById("menu");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");

  burger.setAttribute(
    "aria-expanded",
    open
  );
});

menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("yr").textContent =
  new Date().getFullYear();


const form = document.getElementById("form");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const msg = form.elements.msg.value.trim();

  if (!name || !msg) {

    status.textContent =
      "Please fill in your name and project details.";

    return;
  }

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {

    status.textContent =
      "Enter a valid email address.";

    return;
  }

  const subject =
    `Project enquiry from ${name}`;

  const body =
    `${msg}\n\nClient email: ${email}`;

  window.location.href =
    `mailto:divyanshsharma2250@gamil.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  status.textContent =
    "Thanks! Your email app should open now.";

  form.reset();
});
