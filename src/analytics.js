// Google Tag Manager - Solo en producción
if (import.meta.env.PROD) {
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-5GBFX3K8');

  // Noscript fallback
  document.addEventListener('DOMContentLoaded', () => {
    const noscript = document.createElement('noscript');
    noscript.innerHTML =
      '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GBFX3K8" height="0" width="0" style="display:none;visibility:hidden"></iframe>';
    document.body.insertBefore(noscript, document.body.firstChild);
  });
}
