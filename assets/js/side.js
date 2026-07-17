// Burger-menu
var burger = document.querySelector('.burger');
var menu = document.getElementById('menu');
if (burger && menu) {
  burger.addEventListener('click', function () {
    var aaben = menu.classList.toggle('aaben');
    burger.setAttribute('aria-expanded', aaben ? 'true' : 'false');
  });
}

// Klik-for-kort (GDPR: intet indlæses fra Google før brugerens valg)
var kortklik = document.getElementById('kortklik');
if (kortklik) {
  var knap = kortklik.querySelector('button[data-kort]');
  if (knap) {
    knap.addEventListener('click', function () {
      var f = document.createElement('iframe');
      f.src = knap.getAttribute('data-kort');
      f.title = 'Kort: Ryvej 5, 8752 Østbirk';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer';
      knap.replaceWith(f);
    });
  }
}
