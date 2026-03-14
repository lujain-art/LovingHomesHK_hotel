# 🐾 Loving Homes Dog Hotel

> A premium multi-language website for **Loving Homes Dog Hotel** — Hong Kong's finest luxury dog hotel.  
> Built with pure HTML, CSS, and JavaScript. No frameworks. No dependencies.

---

## 🌐 Live Site

🔗 [View Website](https://lujain-art.github.io/your-repo-name/)


---

## 📋 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `HTML/index.html` | Hero video, background music toggle |
| Services | `HTML/Services_Page.html` | 9 service cards with hover image swap |
| Packages | `HTML/Packages_Page.html` | 3 flip cards (Premium, Classic, Day) with entrance animation |
| Gallery | `HTML/Gallery_Page.html` | Masonry photo grid with lightbox viewer |
| About Us | `HTML/About_Us_Page.html` | Mission, vision, values, team |
| Contact Us | `HTML/Contact_Us_Page.html` | Contact form + embedded Google Map |

---

## 🌍 Multi-Language Support

The website supports **3 languages** with instant switching and no flash:

| Language | Code |
|----------|------|
| English  | `en` |
| Arabic   | `ar` |
| Chinese (Traditional) | `zh` |

- Language preference is saved in `localStorage` and persists across pages
- Arabic activates RTL layout automatically
- Pre-filled WhatsApp message changes language automatically based on user's selection

### Language Files

| File | Purpose |
|------|---------|
| `Js/lang-data.js` | All translation strings — loaded in `<head>` to prevent flash |
| `Js/lang-apply.js` | DOM wiring, language switching logic, WhatsApp link updater |

---

## 📁 Project Structure

```
📁 root/
├── 📄 sitemap.xml
├── 📄 README.md
├── 📁 HTML/
│   ├── index.html
│   ├── Services_Page.html
│   ├── Packages_Page.html
│   ├── Gallery_Page.html
│   ├── About_Us_Page.html
│   └── Contact_Us_Page.html
├── 📁 CSS/
│   └── Style.css
├── 📁 Js/
│   ├── lang-data.js
│   └── lang-apply.js
├── 📁 Pictures/
│   ├── Loving-Homes-Logo.png
│   ├── Poodle.gif
│   ├── instagram.svg
│   ├── facebook.svg
│   ├── whatsapp.svg
│   ├── gmail.svg
│   └── ... (service & package images)
├── 📁 Videos/
│   └── Humen's best friend.mp4
├── 📁 Sounds/
│   └── background_music.mp3
└── 📁 Text Files/
    └── GoodPawooDisplay-qZd96.ttf
```

---

## ✨ Features

- 🎥 **Autoplay hero video** with background music toggle
- 🔄 **Flip cards** for packages with staggered entrance animation
- 🖼️ **Masonry gallery** with lightbox and keyboard navigation
- 🌙 **Hover image swap** on service cards
- 📱 **Fully responsive** with hamburger menu on mobile
- ♿ **Accessibility** via UserWay widget
- 💬 **WhatsApp integration** with pre-filled message in user's language
- 🔍 **SEO optimised** — meta description, Open Graph, Twitter Card, sitemap

---

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Brown | `#5c3d1e` |
| Primary Green | `#7ab648` |
| Dark Green | `#5e8e35` |
| Beige | `#f5f0e0` |
| Display Font | `GoodPawoo Display` + `Cairo` |
| Body Font | `Cairo` (Google Fonts) |

---

## 🚀 Deployment (GitHub Pages)

1. Push all files to your GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://your-username.github.io/your-repo-name/`
5. Submit `sitemap.xml` to [Google Search Console](https://search.google.com/search-console)

---

## 📬 Contact & Social

- 📸 Instagram: [@islam_is_life1234](https://www.instagram.com/islam_is_life1234/)
- 📘 Facebook: [wooden.kh](https://www.facebook.com/wooden.kh)
- 💬 WhatsApp: [+962 779 462 452](https://wa.me/962779462452)

---

© 2026 Loving Homes Dog Hotel — All rights reserved — Hong Kong
