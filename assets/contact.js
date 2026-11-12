(() => {
  'use strict';
  const fields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'type'];
  const safeUrl = value => {
    try {
      const url = new URL(value);
      if (!['http:', 'https:'].includes(url.protocol)) return '';
      const clean = new URL(url.origin + url.pathname);
      fields.forEach(key => { if (url.searchParams.has(key)) clean.searchParams.set(key, url.searchParams.get(key).slice(0, 200)); });
      return clean.href;
    } catch { return ''; }
  };
  const read = key => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } };
  const save = (key, value) => { try { sessionStorage.setItem(key, JSON.stringify(value)); } catch { /* Forms still work when storage is blocked. */ } };
  let attribution = read('ac-attribution-v1');
  if (!attribution || typeof attribution !== 'object') {
    attribution = { landing_page: safeUrl(location.href), referring_page: safeUrl(document.referrer) };
    const params = new URLSearchParams(location.search);
    fields.filter(key => key.startsWith('utm_')).forEach(key => { attribution[key] = (params.get(key) || '').slice(0, 200); });
    save('ac-attribution-v1', attribution);
  }
  document.querySelectorAll('form[data-contact-tracking]').forEach(form => {
    let pending = false;
    const set = (key, value) => { const field = form.elements.namedItem(key); if (field) field.value = value || ''; };
    const stamp = () => {
      set('submission_reference', form.elements.namedItem('submission_reference').value || (crypto.randomUUID ? crypto.randomUUID() : `ac-${Date.now()}-${Math.random().toString(36).slice(2)}`));
      set('source_page', location.pathname);
      set('page_url', safeUrl(location.href));
      set('client_submitted_at', new Date().toISOString());
      set('client_timezone', Intl.DateTimeFormat().resolvedOptions().timeZone || '');
      Object.entries(attribution).forEach(([key, value]) => set(key, value));
    };
    stamp();
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (pending || !form.reportValidity()) return;
      pending = true;
      stamp();
      const button = form.querySelector('[type="submit"]');
      const status = form.querySelector('[data-submit-status]');
      button.disabled = true;
      form.setAttribute('aria-busy', 'true');
      status.textContent = 'Sending your inquiry…';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch(form.action, {
          method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(new FormData(form)).toString(), signal: controller.signal
        });
        if (!response.ok) throw new Error('Submission was not accepted');
        save('ac-last-receipt', { reference: form.elements.namedItem('submission_reference').value, page: new URL(form.action).pathname, at: Date.now() });
        location.assign(form.action);
      } catch {
        status.textContent = 'We could not confirm delivery. Your entries are still here. Please try again. If you retry, keep the same reference so we can identify a duplicate.';
        const reference = form.elements.namedItem('submission_reference').value;
        status.textContent += ` Reference: ${reference}`;
        status.focus();
        button.disabled = false;
        pending = false;
        form.removeAttribute('aria-busy');
      } finally { clearTimeout(timeout); }
    });
  });
  const receipt = read('ac-last-receipt');
  const target = document.querySelector('[data-contact-receipt]');
  if (target && receipt && receipt.page === location.pathname && Date.now() - receipt.at < 3600000) {
    target.textContent = `Your inquiry reference: ${receipt.reference}`;
    target.hidden = false;
  }
})();
