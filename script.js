$(function () {
  $('#menuBtn').on('click', function () {
    $('#navLinks').toggleClass('mobile-open hidden');
  });

  $('a[href^="#"]').on('click', function (event) {
    const target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 72 }, 650);
      $('#navLinks').removeClass('mobile-open').addClass('hidden');
    }
  });

  $(window).on('scroll', function () {
    const y = $(window).scrollTop();
    $('.site-glow.one').css('transform', `translateY(${y * 0.04}px)`);
    $('.site-glow.two').css('transform', `translateY(${-y * 0.03}px)`);
  });
});
