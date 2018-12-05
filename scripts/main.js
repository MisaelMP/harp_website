function classToggle() {
  const navs = document.querySelectorAll('.nav__items')

  navs.forEach(nav => nav.classList.toggle('nav__toggle-show'));
}

document.querySelector('.nav__link-toggle').addEventListener('click', classToggle);

console.log('this is working');
