/* lang-apply.js — DOM interaction & event wiring.
   Requires lang-data.js to be loaded first (in <head>).
   This file is placed at the END of <body> as before. */

var lang = localStorage.getItem('lh_lang') || 'en';

function applyLang(l, activatedByUser) {
    lang = l;
    localStorage.setItem('lh_lang', l);
    var t = TRANSLATIONS[l];
    if (!t) return;

    document.documentElement.setAttribute('lang', l);

    var contentArea = document.getElementById('content-area');
    if (contentArea) {
        contentArea.dir = (l === 'ar') ? 'rtl' : 'ltr';
    }

    document.querySelectorAll('[data-t]').forEach(function (el) {
        var k = el.dataset.t;
        if (t[k] !== undefined) {
            if (el.tagName === 'INPUT' && el.type === 'submit') {
                el.value = t[k];
            } else {
                el.textContent = t[k];
            }
        }
    });

    /* Handle <button data-t-value="..."> (Send button in contact form) */
    document.querySelectorAll('[data-t-value]').forEach(function (el) {
        var k2 = el.getAttribute('data-t-value');
        if (t[k2] !== undefined) {
            if (el.tagName === 'INPUT') { el.value = t[k2]; }
            else { el.textContent = t[k2]; }
        }
    });

    /* Sync active state on lang buttons */
    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.classList.toggle('active', b.dataset.lang === l);
    });

    /* Update WhatsApp link with a pre-filled message in the active language */
    var waMessages = {
        en: 'Hello, I would like to make a booking at Loving Homes Dog Hotel.',
        ar: 'مرحباً، أود حجز موعد في فندق لوفينج هومز للكلاب.',
        zh: '你好，我想預約 Loving Homes 寵物酒店的住宿。'
    };
    var waText = waMessages[l] || waMessages['en'];
    document.querySelectorAll('.soc-whatsapp').forEach(function (a) {
        a.href = 'https://wa.me/962779462452?text=' + encodeURIComponent(waText);
    });

    /* Reveal page — remove the hide-style injected by the inline head script */
    var hideStyle = document.getElementById('__lh_flash_hide');
    if (hideStyle) { hideStyle.parentNode.removeChild(hideStyle); }
}

/* Wire up buttons & run once on load */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () { applyLang(b.dataset.lang, true); });
    });
    applyLang(lang, false);
});
