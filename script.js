const menu = document.getElementById('menu');
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

document.getElementById('yr').textContent = new Date().getFullYear();

const form = document.getElementById('form');
const status = document.getElementById('status');
form.addEventListener('submit', e => {
  e.preventDefault();
  const { name, email, msg } = form.elements;
  if (!name.value.trim() || !msg.value.trim()) return status.textContent = 'Please fill in your name and project details.';
  if (!/^\S+@\S+\.\S+$/.test(email.value)) return status.textContent = 'Enter a valid email address.';
  // Real sending: replace with Formspree/EmailJS. For now opens the user's email app.
  location.href = `mailto:you@email.com?subject=Project enquiry from ${encodeURIComponent(name.value)}&body=${encodeURIComponent(msg.value + '\n\n' + email.value)}`;
  status.textContent = 'Thanks! Your email app should open now.';
  form.reset();
});