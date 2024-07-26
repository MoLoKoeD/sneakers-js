var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grapCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },

    520: {
      slidesPerView: 2,
    },
    
    950: {
      slidesPerView: 4,
    },
  },
});

let burger = document.querySelector('.burger');
let menu = document.querySelector('.burger__list');
let menuLinks = document.querySelectorAll('.burger__item');
let menuLinksHide = document.querySelectorAll('.burger__hide-list');

burger.addEventListener('click',

function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('burger__list--active');
  document.body.classList.toggle('stop-scroll');
})

menuLinksHide.forEach(function (el) {

  el.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    menu.classList.remove('burger__list--active');
    document.body.classList.remove('stop-scroll');
  });
});