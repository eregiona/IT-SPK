// Enabling burger menu
document.querySelector('.burger').addEventListener('click', function(){
    document.querySelector('.burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle("animate");
})

//making button in menu alive
document.querySelector('.burger_button').addEventListener('click', function(){
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

// scrolling within burger__menu
const burgerLinks = document.querySelectorAll('.burger__link[data-goto]');
if (burgerLinks.length > 0) {
  burgerLinks.forEach(burgerLink => {
    burgerLink.addEventListener("click", onBurgerLinkClick);
  }); 

  function onBurgerLinkClick(e) {
    const burgerLink = e.target;
    if (burgerLink.dataset.goto && document.querySelector(burgerLink.dataset.goto)){
      const gotoBlock = document.querySelector(burgerLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}    
// scrolling without burger_menu
const toolsLinks = document.querySelectorAll('.tools__link[data-goto]');
if (toolsLinks.length > 0) {
  toolsLinks.forEach(toolsLink => {
    toolsLink.addEventListener("click", onToolsLinkClick);
  }); 

  function onToolsLinkClick(e) {
    const toolsLink = e.target;
    if (toolsLink.dataset.goto && document.querySelector(toolsLink.dataset.goto)){
      const gotoBlock = document.querySelector(toolsLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}   