// Pure mapping shared by initial backfill and future connector-driven imports.
// Never store submission data in this public repository.
export const HEADERS = [
  'Record ID','Conversation ID','Channel','Direction','Form name','Source record ID','Source link',
  'Source timestamp UTC','Date Eastern','Time Eastern','Display time zone','Timestamp basis',
  'Name','Email','Phone','Organization','Inquiry type','Subject','Message content',
  'Clinical discipline','Service locations','Preferred contact','Need timing','Role title',
  'Organization type','Care setting','Therapy categories','Volume range','License type',
  'Infusion experience years','Practice authorization','License states','Therapy experience',
  'Settings experience','Availability','Contact consent','Form page path','Page URL',
  'Landing page','Referring page','Netlify submission referrer','UTM source','UTM medium',
  'UTM campaign','UTM content','UTM term','Client submitted UTC','Client time zone',
  'Capture version','Client reference','Original submitted fields JSON','Imported UTC',
  'Record category','Category reason','Email thread ID','To','Cc'
];
export const ZONE = 'America/New_York';
export function easternParts(iso) {
  const date = new Date(iso);
  if (!iso || !Number.isFinite(date.getTime())) throw new Error('Missing or invalid source timestamp');
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: ZONE, year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', second:'2-digit', hourCycle:'h23' }).formatToParts(date).map(p=>[p.type,p.value]));
  return { date: `${parts.year}-${parts.month}-${parts.day}`, time: `${parts.hour}:${parts.minute}:${parts.second}` };
}
export const cellText = value => Array.isArray(value) ? value.join('; ') : (value ?? '');
export function mapSubmission(s, importedAt = new Date().toISOString()) {
  if (!s.id || !s.form_name) throw new Error('Submission ID and form name are required');
  const d = s.data || {};
  const {date,time} = easternParts(s.created_at);
  const name = d.name || d.contact_name || d.full_name || s.name || '';
  const org = d.organization || d.organization_name || '';
  const isTest = /\b(QA|TEST|fictional)\b/i.test(`${name} ${org}`);
  const category = isTest ? 'Test' : 'Needs review';
  const raw = Object.fromEntries(Object.entries(d).filter(([key])=>!['ip','user_agent','bot-field'].includes(key)));
  const values = [
    `netlify:${s.id}`,`netlify:${s.id}`,'Website form','Inbound',s.form_name,s.id,
    `https://app.netlify.com/projects/advantageclinicians/forms/${s.form_id}`,
    s.created_at,date,time,ZONE,'Netlify server receipt',name,d.email||d.work_email||s.email||'',
    d.phone||d.work_phone||'',org,d.inquiry_type||s.form_name,'',d.message||d.message_limited||'',
    d.clinical_discipline||d.license_type||'',d.service_locations||d.state_regions||d.service_geography||'',
    d.preferred_contact||'',d.need_timing||'',d.role_title||'',d.organization_type||'',d.care_setting||'',
    d.therapy_categories||'',d.volume_range||'',d.license_type||'',d.years_infusion_range||'',
    d.practice_authorization_status||d.ohio_practice_status||'',d.license_states||'',
    d.therapy_experience||'',d.settings_experience||'',d.availability_band||'',
    d.consent_to_contact||d.business_contact_consent||'',d.source_page||'',d.page_url||'',
    d.landing_page||'',d.referring_page||'',d.referrer||'',d.utm_source||'',d.utm_medium||'',
    d.utm_campaign||'',d.utm_content||'',d.utm_term||'',d.client_submitted_at||'',d.client_timezone||'',
    d.capture_version||'',d.submission_reference||'',JSON.stringify(raw),importedAt,category,
    isTest?'Explicit test/QA label in source':'Historical record; reply state requires review','','',''
  ];
  return values.map(cellText);
}
