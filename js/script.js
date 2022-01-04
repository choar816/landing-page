const header = document.querySelector('header');
const iconMenu = header.querySelector('.icon-menu');
const drawerMenu = header.querySelector('.sect-menu');
const backBtn = header.querySelector('.btn-back');
const subscribeBtn = document.querySelector('.sect-subscribe button');
const modalSect = document.querySelector('.modal-thankyou');
const modalBtn = modalSect.querySelector('button');

const openMenu = function () {
  drawerMenu.style.right = '0px';
};

const closeMenu = function () {
  drawerMenu.style.right = '-290px';
};

const showModal = function () {
  modalSect.style.display = 'block';
};
const hideModal = function () {
  modalSect.style.display = 'none';
};

iconMenu.onclick = openMenu;
backBtn.onclick = closeMenu;
subscribeBtn.onclick = showModal;
modalBtn.onclick = hideModal;

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
