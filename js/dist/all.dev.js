"use strict";

window.onload = function () {
  var bars = document.querySelector('.fa-bars');
  var aside = document.querySelector('.aside');
  bars.addEventListener('click', function (e) {
    aside.classList.add('open');
  }, false);
  aside.addEventListener('click', function (e) {
    if (e.target.nodeName === 'I' || e.target.nodeName === 'A') {
      aside.classList.remove('open');
    }
  }, false); //視覺滾動

  AOS.init();
}; // scrollTop到錨點


$(document).ready(function () {
  $('.scrollTop').click(function (e) {
    e.preventDefault();
    var target = $(this).attr('href'); // attr()設置或回傳讀取class的屬性與值

    var targetPos = $(target).offset().top; // offset()設置或回傳所選元素的top left坐標

    $('html,body').animate({
      scrollTop: targetPos
    }, 1000);
  });
});