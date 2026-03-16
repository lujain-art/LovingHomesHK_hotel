/* lang-apply.js — DOM interaction & event wiring.
   Requires lang-data.js to be loaded first (in <head>).
   This file is placed at the END of <body>. */

var lang = localStorage.getItem('lh_lang') || 'en';

function applyLang(l) {
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

/* Wire up everything on DOMContentLoaded */
document.addEventListener('DOMContentLoaded', function () {

    /* --- Language buttons --- */
    document.querySelectorAll('.lang-btn').forEach(function (b) {
        b.addEventListener('click', function () {
            applyLang(b.dataset.lang);
        });
    });

    /* Apply saved/default language on every page load */
    applyLang(lang);

    /* --- Hamburger menu (works on ALL pages) --- */
    var hamburger = document.getElementById('hamburger');
    var navbar    = document.querySelector('.navbar');
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function () {
            var open = navbar.classList.toggle('nav-open');
            hamburger.classList.toggle('open', open);
            hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        navbar.querySelectorAll('a').forEach(function (a) {
            a.addEventListener('click', function () {
                navbar.classList.remove('nav-open');
                hamburger.classList.remove('open');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    /* --- Music button (works on ALL pages) --- */
    var musicBtn = document.getElementById('music-btn');
    var audio    = document.getElementById('bg-music');
    var icon     = document.getElementById('music-icon');
    var playing  = false;
    if (musicBtn && audio && icon) {
        musicBtn.addEventListener('click', function () {
            if (playing) {
                audio.pause();
                icon.src = 'Pictures/mute.gif';
                icon.alt = 'Music off';
                musicBtn.setAttribute('aria-label', 'Play background music');
                playing = false;
            } else {
                audio.play().catch(function () {});
                icon.src = 'Pictures/sound.gif';
                icon.alt = 'Music on';
                musicBtn.setAttribute('aria-label', 'Pause background music');
                playing = true;
            }
        });
    }

});
