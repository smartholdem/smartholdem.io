// Browser-language auto-redirect for the static (SSG) site.
//
// Runs as a tiny inline <head> script BEFORE the page renders, so visitors
// never see an English flash:
//   • first visit (no cookie) to an English (unprefixed) URL → redirect to the
//     same page in the first browser language we support (navigator.languages),
//     otherwise stay on English;
//   • the visitor's manual choice in the language switcher is stored in the
//     `sth_lang` cookie (1 year) and always wins (also "en");
//   • explicit language URLs (/ru/…, /de/…) are never redirected;
//   • search engines / AI crawlers / link previews are never redirected, so
//     every language version stays indexable.
export const LANG_COOKIE = 'sth_lang'
export const SITE_LOCALES = ['en', 'ru', 'zh', 'id', 'ko', 'th', 'es', 'vi', 'fr', 'de', 'kk', 'pt', 'uz', 'mn', 'ja', 'sw', 'ar', 'hi']

export function rememberLocale (code: string) {
  if (typeof document === 'undefined') return
  document.cookie = `${LANG_COOKIE}=${encodeURIComponent(code)}; Max-Age=31536000; Path=/; SameSite=Lax`
}

export function browserLocaleScript (): string {
  const L = JSON.stringify(SITE_LOCALES)
  return `(function(){try{
var L=${L},C='${LANG_COOKIE}',d=document,n=navigator,l=location;
if(/bot|crawl|spider|slurp|yandex|google|bing|baidu|duckduck|sogou|exabot|facebookexternalhit|telegram|twitterbot|whatsapp|discord|slack|linkedin|embedly|lighthouse|headless|prerender|gptbot|chatgpt|claude|anthropic|perplexity|bytespider|ccbot|applebot|petalbot|semrush|ahrefs|mj12/i.test(n.userAgent||''))return;
var seg=(l.pathname.split('/')[1]||'').toLowerCase();
if(L.indexOf(seg)>0||seg==='devhub'||seg==='_nuxt'||seg==='news-i18n')return;
var m=d.cookie.match(new RegExp('(?:^|; )'+C+'=([^;]*)')),pick=m?decodeURIComponent(m[1]):'';
if(!pick){var ls=(n.languages&&n.languages.length?n.languages:[n.language||'']);
for(var i=0;i<ls.length&&!pick;i++){var c=String(ls[i]||'').toLowerCase().split('-')[0];if(L.indexOf(c)>=0)pick=c;}
pick=pick||'en';d.cookie=C+'='+pick+'; Max-Age=31536000; Path=/; SameSite=Lax';}
if(pick==='en'||L.indexOf(pick)<0)return;
var p=l.pathname==='/'?'':l.pathname;l.replace('/'+pick+p+l.search+l.hash);
}catch(e){}})();`
}
