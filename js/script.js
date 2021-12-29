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
