$(document).ready(() => {
  $('.carousel').carousel();
   $('.col s1 offset-4 dropdown-button btn').dropdown('open');

  document.addEventListener('DOMContentLoaded', function(){
      Typed.new('.element', {
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0
      });
  });
</script>
...

<div class="element"></div>
});
