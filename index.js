var swiper = new Swiper('#mySwiper', {
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 2000, // 2 seconds delay between slides
    disableOnInteraction: false,
  },
});