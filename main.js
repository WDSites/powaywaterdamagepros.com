(function(){
  var mq = window.matchMedia('(max-width: 960px)');
  var tg = document.querySelector('.menu-toggle'), mm = document.getElementById('mobile-menu');
  if (tg && mm) {
    tg.addEventListener('click', function(){
      var open = mm.classList.toggle('open');
      tg.setAttribute('aria-expanded', open ? 'true' : 'false');
      tg.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    var onChange = function(){ if (!mq.matches) { mm.classList.remove('open'); tg.setAttribute('aria-expanded','false'); } };
    if (mq.addEventListener) mq.addEventListener('change', onChange); else mq.addListener(onChange);
  }
  document.querySelectorAll('.nav-menu > li > button').forEach(function(b){
    var li = b.parentNode;
    li.addEventListener('mouseenter', function(){ b.setAttribute('aria-expanded','true'); });
    li.addEventListener('mouseleave', function(){ b.setAttribute('aria-expanded','false'); });
    li.addEventListener('focusin', function(){ b.setAttribute('aria-expanded','true'); });
    li.addEventListener('focusout', function(){ b.setAttribute('aria-expanded','false'); });
  });
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var item = q.closest('.faq-item'), a = item.querySelector('.faq-a');
      var open = item.classList.toggle('open');
      q.setAttribute('aria-expanded', open ? 'true' : 'false');
      a.style.maxHeight = open ? a.scrollHeight + 'px' : '0px';
    });
  });
  var fc = document.querySelector('.floatcall'), ft = document.querySelector('.site-footer');
  if (fc && ft && 'IntersectionObserver' in window) {
    new IntersectionObserver(function(e){ fc.classList.toggle('hide', e[0].isIntersecting); }).observe(ft);
  }
})();
