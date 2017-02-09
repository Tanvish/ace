document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('main'), {
    dotColor: '#0DE3D6',
    lineColor: '#0DE3D6'
  });
  var intro = document.getElementById('container');
  intro.style.marginBottom = - intro.offsetHeight / 5 + 'px';
}, false);
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
