$(document).ready(function () {
  //mobile-menu, gamburger
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  //slider
  var mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      // when window width is >= 320px
      992: {
        slidesPerView: 4,
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
