$(function() {
  $(".slider__inner").slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 5000
  });

  $(function() {
    $(".gallery__items").lightGallery();
    thumbnail:true
  });
});
