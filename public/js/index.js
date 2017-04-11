$(document).ready(() => {
  (function() {
  $('.carousel').carousel();
   $('.col s1 offset-4 dropdown-button btn').dropdown('open');

   $(".navbar-brand").hover(function () {
     $(this).toggleClass("animated shake");
   });

  })();
});
