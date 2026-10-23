/* PDFlow — shared site behaviour */
(function(){
  var d=document;
  var nav=d.querySelector('.nav'),burger=d.querySelector('.burger'),mnav=d.querySelector('.mnav');

  /* nav: shadow on scroll */
  function onScroll(){if(nav)nav.classList.toggle('scrolled',window.scrollY>12)}
  onScroll();window.addEventListener('scroll',onScroll,{passive:true});

  /* mobile menu */
  function setMenu(open){
    if(!burger||!mnav)return;
    burger.setAttribute('aria-expanded',open?'true':'false');
    mnav.classList.toggle('open',open);
  }
  if(burger){
    burger.addEventListener('click',function(){setMenu(burger.getAttribute('aria-expanded')!=='true')});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')setMenu(false)});
    d.addEventListener('click',function(e){
      if(!e.target.closest('.nav-wrap'))setMenu(false);
      else if(e.target.closest('.mnav a'))setMenu(false);
    });
  }

  /* reveal on scroll */
  var els=[].slice.call(d.querySelectorAll('.rv'));
  if(!('IntersectionObserver' in window)){els.forEach(function(el){el.classList.add('in')})}
  else{
    var io=new IntersectionObserver(function(es){
      es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
    },{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(el){io.observe(el)});
  }

  /* focus the upload box when arriving via #upload */
  function focusUpload(){
    if(location.hash!=='#upload')return;
    var u=d.getElementById('upload');
    if(u){setTimeout(function(){try{u.focus({preventScroll:true})}catch(e){}},500)}
  }
  focusUpload();window.addEventListener('hashchange',focusUpload);

  /* footer year */
  [].forEach.call(d.querySelectorAll('[data-year]'),function(el){el.textContent=new Date().getFullYear()});

  /* contact form -> pre-filled email (no backend needed) */
  var f=d.getElementById('contactForm');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var v=function(n){return (f.elements[n].value||'').trim()};
      var to=f.getAttribute('data-to')||'hello@yourdomain.com';
      var subject='['+v('topic')+'] '+(v('subject')||'Message from '+v('name'));
      var body=v('message')+'\n\n— '+v('name')+' ('+v('email')+')';
      window.location.href='mailto:'+to+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
      var ok=d.getElementById('formOk');if(ok)ok.classList.add('show');
    });
  }
})();
