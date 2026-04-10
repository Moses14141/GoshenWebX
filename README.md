# Goshen Web X - Client Portal & Website Builder Platform

**Official Repository for Goshen Web X**  
A modern web development agency based in Québec, Canada, offering custom websites, optimization services, and a **self-service website builder** (Wix-style platform).

**Live Site:** [https://goshenwebx.io](https://goshenwebx.io)

---

## 📁 Current Project Structure (Exact - March 2026)

---

## 🎯 Project Overview

Goshen Web X has two parts:

1. **Public Marketing Site** (root folder)  
   - Beautiful homepage, services, portfolio, blog, pricing, and contact pages  
   - Bilingual (English + French)  
   - Designed to attract new clients

2. **Client Portal** (`/portal/`)  
   - Private self-service platform  
   - Clients log in and can:  
     - Choose a template  
     - Edit their website in a **live editor**  
     - Manage all their sites  
     - Change password, view help, etc.

This is the foundation of our future **Wix-like builder**.

---

## ✨ Current Features (Completed)

### Public Site
- Fully responsive Tailwind CSS design
- Bilingual support (EN/FR)
- Smooth animations (AOS)
- Contact form + quote modal
- SEO-optimized pages
- Netlify deployment ready (`netlify.toml`)

### Client Portal (Fully Built)
- Login / Signup / Forgot Password
- Dashboard with "Start New Website" button
- Template gallery (5 templates)
- Live editor with real-time preview
- My Sites management
- My Account (profile + change password)
- Help Center (FAQ)
- Consistent header & mobile drawer across all portal pages
- Terms & Privacy links everywhere

---

## 🛠 Technologies & Stack

- **Frontend:** HTML5, Tailwind CSS, Vanilla JavaScript
- **Styling:** Tailwind CSS + custom config
- **Icons:** Font Awesome 6
- **Fonts:** Poppins (headings) + Plus Jakarta Sans (body)
- **Deployment:** Netlify (`netlify.toml` + functions/)
- **Future Backend:** Firebase (Auth + Firestore)
- **Future Payments:** Stripe / PayPal (planned)

---

## 🚀 How to Run Locally

1. Clone or open the folder in VS Code / any editor
2. No installation needed for basic testing
3. Double-click any `.html` file to open in browser
4. For portal pages: start from `portal/login.html`

**Note:** Login/signup are static for now. Firebase connection will be added next.

---

## 📋 Future Development Roadmap

- Connect Firebase Authentication
- Add Firestore to save user websites
- Membership system (Free + Premium plans)
- Payment integration (Stripe)
- Advanced editor (drag-and-drop)
- Custom domain support
- Analytics dashboard

---

## 📌 Important Notes

- All portal pages (`/portal/*`) have **portal-only navigation** (no public marketing links).
- French versions of public pages end with `-fr.html`.
- `functions/` folder is ready for Netlify serverless functions.
- `js/` folder will hold shared scripts (auth.js, firestore.js, etc.) when we connect the backend.

---

## 🤝 Contributing / Development

This is a private project for **Goshen Web X**.  
For internal development:
- Always keep the public site and portal header consistent.
- Test on mobile (hamburger menu).
- Use the exact color scheme (`primary: #14532d`, `emerald: #10b981`).

---

**Made with ❤️ in Québec, Canada**  
**Last updated:** March 21, 2026

For questions:  
- Email: info@goshenwebx.io  
- X (Twitter): [@goshenwebx](https://x.com/goshenwebx)

---


GOSHENWEBX-MAIN/
├── articles/                          ← Blog articles (SEO content)
├── functions/                         ← Netlify serverless functions (for future Firebase/Stripe)
├── images/                            ← All images used on the site
├── js/                                ← Custom JavaScript files
├── node_modules/                      ← NPM dependencies (Tailwind, etc.)
├── portal/                            ← 🔥 CLIENT PORTAL (Private area)
│   ├── account.html                   ← My Account + Change Password
│   ├── dashboard.html                 ← Main client dashboard
│   ├── editor.html                    ← Live website editor (real-time preview)
│   ├── forgot-password.html           ← Password reset page
│   ├── help.html                      ← Help Center
│   ├── login.html                     ← Login page
│   ├── my-sites.html                  ← User's websites list
│   ├── signup.html                    ← Create free account
│   ├── templates.html                 ← Template gallery
│   └── templates/                     ← Pre-built editable templates
│       ├── business.html
│       ├── church.html
│       ├── clinic.html
│       ├── portfolio.html
│       └── restaurant.html
│
├── about-fr.html
├── about.html
├── blog-fr.html
├── blog.html
├── contact-fr.html
├── contact.html
├── custom-web-dev-fr.html
├── custom-web-dev.html
├── index-fr.html
├── index.html
├── netlify.toml                       ← Netlify deployment config
├── package.json                       ← NPM dependencies & scripts
├── package-lock.json
├── portfolio-fr.html
├── portfolio.html
├── pricing_guide-fr.html
├── pricing_guide.html
├── privacy-policy-fr.html
├── privacy-policy.html
├── README.md                          ← This file
├── service-fr.html
├── service.html
├── terms-fr.html
├── terms.html
├── web-optimisation-fr.html
├── web-optimisation.html
├── website-dev-fr.html
├── website-dev.html
└── (other language-specific pages)
text