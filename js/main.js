var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".arrow",
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
  },
});

var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".header");
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("menu-btn-active");
  menu.classList.toggle("header-active");
});
