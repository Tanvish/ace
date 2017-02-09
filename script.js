document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('main'), {
    dotColor: '#0DE3D6',
    lineColor: '#0DE3D6'
  });
  var intro = document.getElementById('container');
  intro.style.marginBottom = - intro.offsetHeight / 5 + 'px';
}, false);
(function() {
    var header = new Headroom(document.querySelector("#header"), {
        tolerance: 5,
        offset : 205,
        classes: {
          initial: "animated",
          pinned: "slideDown",
          unpinned: "slideUp"
        }
    });
    header.init();

    var bttHeadroom = new Headroom(document.getElementById("btt"), {
        tolerance : 0,
        offset : 500,
        classes : {
            initial : "slide",
            pinned : "slide--reset",
            unpinned : "slide--down"
        }
    });
    bttHeadroom.init();
}());