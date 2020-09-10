$(function() {

// light box
lightbox.option({
      'fadeDaration': 500,
      'resizeDuration': 400
})
$('.hamburger').click(function() {
      $(this).toggleClass('active');

      if($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });

});
