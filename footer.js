/**
 * FloorPricer shared footer renderer.
 * Drop <script src="/footer.js"></script> before </body> on any page.
 * The script locates the <footer> element and injects canonical links.
 */
(function () {
  'use strict';

  var FOOTER_LINKS = [
    { label: 'GitHub',  href: 'https://github.com/blainomd/floorpricer-site' },
    { label: 'Docs',    href: 'harness.html' },
    { label: 'Discord', href: 'https://discord.gg/floorpricer' },
    { label: 'Terms',   href: 'https://floorpricer.com/terms' },
  ];

  function render() {
    var footer = document.querySelector('footer');
    if (!footer) return;

    /* Build link list if the footer contains unresolved # placeholders */
    var anchors = footer.querySelectorAll('a[href="#"]');
    if (anchors.length === 0) return; /* already resolved */

    anchors.forEach(function (a, i) {
      var link = FOOTER_LINKS[i];
      if (link) {
        a.href = link.href;
        if (link.href.startsWith('http')) {
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
