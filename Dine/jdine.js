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
