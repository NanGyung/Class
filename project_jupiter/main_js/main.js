const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const member = document.querySelector('.navbar__member');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  member.classList.toggle('active');
});