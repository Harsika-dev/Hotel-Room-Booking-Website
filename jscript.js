// $('nav').hover(function () {
//     $('header').toggleClass("header_hover");
// });


$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
    $('header').addClass('black');
  } else {
    $('header').removeClass('black');
  }
})

$(document).ready(function() {
  $('nav').mouseenter(function() {
    $('header').addClass('header_hover');
  })
  $('nav').mouseleave(function() {
    $('header').removeClass('header_hover');
  })
});


// const menuToggle = document.querySelector('.toggle');
//      const showcase = document.querySelector('.showcase');
//
//      menuToggle.addEventListener('click', () => {
//        menuToggle.classList.toggle('active');
//        showcase.classList.toggle('active');
//      })
