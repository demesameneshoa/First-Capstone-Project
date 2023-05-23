const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.closebtn');

function openNav() {
  document.getElementById('myNav').style.height = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.height = '0%';
}

hamburger.addEventListener('click', () => {
  openNav();
});

closeBtn.addEventListener('click', () => {
  closeNav();
});