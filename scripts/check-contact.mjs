import assert from 'node:assert/strict';
import fs from 'node:fs';
import {HEADERS,easternParts,mapSubmission} from './communication-record.mjs';
assert.deepEqual(easternParts('2026-11-12T11:59:20.128Z'), {date:'2026-11-12',time:'06:59:20'});
assert.deepEqual(easternParts('2026-10-25T14:48:43.092Z'), {date:'2026-10-25',time:'10:48:43'});
// The two fall-back 1:30 AM events must retain distinct canonical UTC times.
const record = data => mapSubmission({id:'fixture',form_name:'contact',form_id:'fixture',created_at:'2026-11-12T11:59:20Z',data});
const r=record({name:'Sample',message:'=1+1',therapy_categories:['IVIG','Biologics'],ip:'not-exported'});
assert.equal(r.length,HEADERS.length);
assert.equal(r[HEADERS.indexOf('Message content')],'=1+1'); // writer must use literal string cells
assert.equal(r[HEADERS.indexOf('Therapy categories')],'IVIG; Biologics');
assert(!r[HEADERS.indexOf('Original submitted fields JSON')].includes('not-exported'));
assert.equal(record({name:'QA TEST'})[HEADERS.indexOf('Record category')],'Test');
assert.equal(record({name:'Sample'})[HEADERS.indexOf('Record category')],'Needs review');
assert.throws(()=>mapSubmission({id:'fixture',form_name:'contact',created_at:''}));
for(const path of ['index.html','contact/index.html','specialty-infusion-nursing/request-coverage/index.html','specialty-infusion-nursing/join-network/index.html']) {
  const html=fs.readFileSync(path,'utf8');
  for(const field of ['source_page','submission_reference','page_url','landing_page','referring_page','client_submitted_at','client_timezone','utm_source','utm_medium','utm_campaign','utm_content','utm_term','capture_version']) {
    assert.equal([...html.matchAll(new RegExp(`name="${field}"`,'g'))].length,1,`${path}: ${field}`);
  }
  assert(html.includes('data-contact-tracking'));
  assert(html.includes('data-submit-status'));
  assert(html.includes('/assets/contact.js'));
}
console.log('Contact checks PASS: attribution fields, timezone conversion, exact content, test isolation, raw-data minimization.');
