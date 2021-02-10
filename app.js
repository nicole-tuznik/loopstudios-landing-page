const menu = document.querySelector('.nav__menu');
const links = document.querySelector('.nav__links');
let li = document.querySelectorAll('.nav__li');

menu.addEventListener('click', function() {
  // for (let i = 0; i < li.length; i++) {
    
  //   li[i].classList.add('active');
  //   // li[i].style.display = 'block';
    
  // }

  links.classList.add('active');
})