const iconMenu = document.querySelector('.icon-menu');
const drawerMenu = document.querySelector('.sect-menu');

const toggleMenu = function() {
    console.log('toggle menu func');
    console.log('before', drawerMenu.style.right);
    if (drawerMenu.style.right === '-290px') {
        drawerMenu.style.right = '0px';
    } else {
        drawerMenu.style.right = '-290px';
    }
    console.log('after', drawerMenu.style.right);
}
// 맨 처음에 menu icon 눌렀을때 메뉴 나오지 않음
// 그 뒤로는 정상 작동

iconMenu.onclick = toggleMenu;