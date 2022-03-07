const upBtn = document.querySelector(".btn-up");

const header = document.querySelector("header");
const iconMenu = header.querySelector(".icon-menu");
const drawerMenu = header.querySelector(".sect-menu");
const menuBackBtn = header.querySelector(".btn-menuback");

const subscribeForm = document.querySelector(".form-subscribe");
const subscribeInput = subscribeForm.querySelector("input");
const subscribeBtn = subscribeForm.querySelector("button");

const modalSect = document.querySelector(".modal-thankyou");
const modalBtn = modalSect.querySelector("button");

// up button
const upScroll = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// menu
const openMenu = function () {
  drawerMenu.style.right = "0px";
};
const closeMenu = function () {
  drawerMenu.style.right = "-290px";
};

// modal
const showModal = function () {
  modalSect.style.display = "block";
};
const hideModal = function () {
  modalSect.style.display = "none";
};

// check email
const emailCheck = function (str) {
  const reg_email =
    /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (!reg_email.test(str)) {
    return false;
  } else {
    return true;
  }
};

// subscribe
const subscribeClick = function () {
  if (emailCheck(subscribeInput.value)) {
    showModal();
  } else {
    alert("이메일 형식이 올바르지 않습니다.");
  }
};

upBtn.onclick = upScroll;
iconMenu.onclick = openMenu;
menuBackBtn.onclick = closeMenu;
subscribeBtn.onclick = subscribeClick;
// subscribeBtn.onclick = showModal;
modalBtn.onclick = hideModal;
