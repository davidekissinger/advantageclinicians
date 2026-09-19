(() => {
  const btn = document.querySelector('.menu-button');
  const nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open'); btn.setAttribute('aria-expanded','false'); btn.setAttribute('aria-label','Open menu');
    }));
  }
  const params = new URLSearchParams(location.search);
  const inquiry = document.querySelector('#inquiry-type');
  if (inquiry && params.get('type')) {
    const map = {staffing:'Staffing for my organization', clinician:'Clinical opportunities'};
    if (map[params.get('type')]) inquiry.value = map[params.get('type')];
  }
})();