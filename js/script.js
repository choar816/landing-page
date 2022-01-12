const header = document.querySelector('header');
const iconMenu = header.querySelector('.icon-menu');
const drawerMenu = header.querySelector('.sect-menu');
const menuBackBtn = header.querySelector('.btn-menuback');
const upBtn = document.querySelector('.btn-up');

const subscribeBtn = document.querySelector('.sect-subscribe button');
const modalSect = document.querySelector('.modal-thankyou');
const modalBtn = modalSect.querySelector('button');

const openMenu = function () {
  drawerMenu.style.right = '0px';
};
const closeMenu = function () {
  drawerMenu.style.right = '-290px';
};

const upScroll = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const showModal = function () {
  modalSect.style.display = 'block';
};
const hideModal = function () {
  modalSect.style.display = 'none';
};

iconMenu.onclick = openMenu;
menuBackBtn.onclick = closeMenu;
upBtn.onclick = upScroll;
subscribeBtn.onclick = showModal;
modalBtn.onclick = hideModal;
