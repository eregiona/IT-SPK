// Enabling burger menu
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

//making button in menu alive
document.querySelector('.button').addEventListener('click', function(){
  document.querySelector('.burger span.active').classList.remove('active');
  document.querySelector('.menu.animate').classList.remove('animate');
})

// Disabling burger menu by clicking links
var element = document.querySelectorAll('.burger__link')
for (i=0; i<element.length; i++) {
  document.querySelectorAll('.burger__link')[i].addEventListener('click', function(){
  document.querySelector('.burger span.active').classList.remove('active');
  document.querySelector('.menu.animate').classList.remove('animate');
  })
}

//Making fixed header
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



