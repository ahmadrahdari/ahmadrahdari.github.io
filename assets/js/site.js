/* Small progressive enhancements. The site works fully without JavaScript. */
(function () {
  document.documentElement.classList.add('js');

  // Mobile navigation toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
    });
  }

  // Protocol figure: reveal the messages once, when the figure enters the viewport
  var msc = document.querySelector('.msc');
  if (msc) {
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { msc.classList.add('is-drawn'); io.disconnect(); }
        });
      }, { threshold: 0.35 });
      io.observe(msc);
    } else {
      msc.classList.add('is-drawn');
    }
  }

  // Gallery lightbox
  var dialog = document.querySelector('.lightbox');
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-full]'));
  if (dialog && items.length && typeof dialog.showModal === 'function') {
    var img = dialog.querySelector('img');
    var cap = dialog.querySelector('p');
    var current = 0;
    var show = function (i) {
      current = (i + items.length) % items.length;
      var el = items[current];
      img.src = el.getAttribute('data-full');
      img.alt = el.getAttribute('data-alt') || '';
      cap.textContent = el.getAttribute('data-caption') || '';
    };
    items.forEach(function (el, i) {
      el.addEventListener('click', function () { show(i); dialog.showModal(); });
    });
    dialog.querySelector('.lb-close').addEventListener('click', function () { dialog.close(); });
    dialog.querySelector('.lb-prev').addEventListener('click', function () { show(current - 1); });
    dialog.querySelector('.lb-next').addEventListener('click', function () { show(current + 1); });
    dialog.addEventListener('click', function (e) { if (e.target === dialog || e.target.classList.contains('lightbox-inner')) dialog.close(); });
    dialog.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') show(current + 1);
      if (e.key === 'ArrowLeft') show(current - 1);
    });
  }
})();
