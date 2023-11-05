$(function() {

  'use strict';

  $.fakeLoader({
    spinner: "spinner1",
    bgColor: "#fff"
  });

  // link back
  $('.link-back').on('click', function() {
    window.history.back();
    return false;
  });

  // navbar on scroll
  $(window).on('scroll', function() {

    if ($(document).scrollTop() > 50) {

      $(".navbar-home").css({
        "box-shadow": "0 .125rem .25rem rgba(0,0,0,.075)"
      });

    } else {

      $(".navbar-home").css({
        "transition": ".3s ease-out",
        "box-shadow": "none"
      });
    }

  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-container', {
      direction: 'horizontal',
      spaceBetween: 15,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
      },
    })
  });

  // swiper slider on home feature
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-style', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto'
    })
  });

  // swiper slider on home feature
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-style-full', {
      direction: 'horizontal',
      spaceBetween: 20,
      slidesPerView: 'auto',
      autoplay: {
        delay: 4000,
      },
    })
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-navigation', {
      direction: 'horizontal',
      spaceBetween: 15,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    })
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-offset', {
      direction: 'horizontal',
      spaceBetween: 15,
      slidesPerView: 'auto',
    })
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-search-category', {
      direction: 'horizontal',
      spaceBetween: 15,
      slidesPerView: '3',
      pagination: {
        el: '.swiper-pagination',
      },
    })
  });

  // swiper slider
  $(document).ready(function () {
    var swiper = new Swiper ('.swiper-pricing', {
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  });

  // sidebar
  $('.menu-link').bigSlide({
    menu: '#menu',
    side: 'left',
    speed: 500,
    easyClose: true,
    menuWidth: '260px',
    afterOpen: function(){
      $('body').addClass('menu-open');
    },
    afterClose: function(){
      $('body').removeClass('menu-open');
    }
  });

  // accordion
  $('.accordion').collapse();

});