(function() {

  Array.from(document.querySelectorAll('.smooth-scroll')).forEach(anchor => anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start'
        });
      })
  );


  // Back to top hide/show
  let $backToTop = $('#back-to-top');

  let offset = 2000;
  let duration = 400;

  $(window).scroll(function() {
    if($(this).scrollTop() > offset) {
      $backToTop.fadeIn(duration);
    }
    else {
      $backToTop.fadeOut(duration);
    }
  });

})();
