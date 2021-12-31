const header = document.querySelector('header');
const iconMenu = header.querySelector('.icon-menu');
const drawerMenu = header.querySelector('.sect-menu');
const backBtn = header.querySelector('.btn-back');

const openMenu = function () {
  drawerMenu.style.right = '0px';
};

const closeMenu = function () {
  drawerMenu.style.right = '-290px';
};

iconMenu.onclick = openMenu;
backBtn.onclick = closeMenu;

// Swiper
var mySwiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// $(document).ready(function () {
//   //initialize swiper when document ready
//   var mySwiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'vertical',
//     loop: true,
//   });
// });