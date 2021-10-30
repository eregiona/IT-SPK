document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

document.querySelector('.button').addEventListener('click', function(){
  document.querySelector('.burger span.active').classList.remove('active');
  document.querySelector('.menu.animate').classList.remove('animate');
})

var element = document.querySelectorAll('.burger__link')
for (i=0; i<element.length; i++) {
  document.querySelectorAll('.burger__link')[i].addEventListener('click', function(){
  document.querySelector('.burger span.active').classList.remove('active');
  document.querySelector('.menu.animate').classList.remove('animate');
  })
}


$(function() {
  let header = $('.header-not-fixed');
  $(window).scroll(function() {
    if($(this).scrollTop() > 1) {
     header.addClass('fixed');
    } else {
     header.removeClass('fixed');
    }
  });
 });

//  $(function() {
//   let header = $('.header-not-fixed');
//   let hederHeight = header.height(); // вычисляем высоту шапки
   
//   $(window).scroll(function() {
//     if($(this).scrollTop() > 1) {
//      header.addClass('fixed');
//      $('body').css({
//         'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
//      });
//     } else {
//      header.removeClass('fixed');
//      $('body').css({
//       'paddingTop': 0 // удаляю отступ у body, равный высоте шапки
//      })
//     }
//   });
//  });