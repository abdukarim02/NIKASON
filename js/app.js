// alert('hello');
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const mobileMenu = document.getElementById("mobileMenu");

    burger.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        burger.classList.toggle("active");
    });
});
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 17,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
});
var swiper = new Swiper(".mySwiperclients", {
    slidesPerView: 'auto',
    spaceBetween: 35,
    keyboard: {
      enabled: true,
    },
  });