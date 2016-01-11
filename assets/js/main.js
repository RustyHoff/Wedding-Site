$('.hamburger').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('toggled');
  $('.nav-items').toggleClass('hidden show')
})
