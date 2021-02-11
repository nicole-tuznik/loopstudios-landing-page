const menu = document.querySelector('.nav__menu');
const links = document.querySelector('.nav__links');

menu.addEventListener('click', function() {
  links.classList.toggle('active');
  
  if(links.classList.contains('active')) {
    menu.src = '/images/icon-close.svg';
  } else {
    menu.src = '/images/icon-hamburger.svg';
  };
})
