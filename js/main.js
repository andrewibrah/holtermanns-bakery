// Mobile nav toggle + footer year
(function () {
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') menu.classList.remove('open');
    });
  }
  var yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
