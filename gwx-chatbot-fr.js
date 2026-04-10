/**
 * ============================================================
 *  GOSHEN WEB X — Widget Clavardage  v2.0  (Français)
 *
 *  INTÉGRATION (une ligne avant </body>) :
 *    <script src="gwx-chatbot-fr.js"></script>
 *
 *  MISE À NIVEAU IA :
 *    Trouvez "/* AI HOOK" et remplacez le bloc setTimeout
 *    par un appel fetch() vers OpenAI / Gemini / Claude.
 * ============================================================
 */
(function () {
  'use strict';

  const C = {
    primary:'#14532d',emerald:'#10b981',emeraldLt:'#34d399',
    light:'#f8faf5',white:'#ffffff',textGray:'#6b7280',textDark:'#111827',border:'#e5e7eb',
  };

  /* ── Tarifs (précis) ────────────────────────────────────── */
  const PLANS = [
    { icon:'🌱', name:'Vitrine',         price:499,   mo:false, desc:'Jusqu\'à 5 pages, adapté mobile, formulaire de contact, SEO de base, Google Analytics.' },
    { icon:'🚀', name:'Entreprise',      price:999,   mo:false, desc:'Jusqu\'à 10 pages, blogue, CMS, SEO avancé, Analytics + Search Console.' },
    { icon:'🛒', name:'E-Commerce',      price:1499,  mo:false, desc:'Boutique en ligne — Shopify ou panier sur mesure, pages produits, paiement intégré.' },
    { icon:'⚙️', name:'Application Web', price:2499,  mo:false, desc:'Applications web sur mesure — tableaux de bord, portails, backend Firebase / MySQL.' },
    { icon:'🎨', name:'Portfolio',       price:349,   mo:false, desc:'Galerie, biographie, contact — optimisé pour impressionner clients & employeurs.' },
    { icon:'📈', name:'SEO Basic',       price:299,   mo:true,  desc:'Audit technique, corrections on-page, Core Web Vitals, rapport mensuel.' },
    { icon:'📊', name:'SEO Pro',         price:549,   mo:true,  desc:'Tout Basic + stratégie de contenu, backlinks, configuration Google Ads.' },
    { icon:'🛠️', name:'Maintenance',     price:99,    mo:true,  desc:'Corrections de bogues, mises à jour de contenu, surveillance sécurité & hébergement.' },
  ];

  function pricingCard(p) {
    return `<div style="background:#f1f5f0;border-radius:12px;padding:9px 12px;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:5px">
      <span style="font-size:13px">${p.icon} <strong>${p.name}</strong><br><span style="font-size:11px;color:#6b7280">${p.desc}</span></span>
      <span style="background:#14532d;color:#fff;font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:20px;white-space:nowrap;flex-shrink:0">${p.price.toLocaleString('fr-CA')} $${p.mo?'/mois':''}</span>
    </div>`;
  }

  function planDetail(p) {
    return `${p.icon} <strong>Forfait ${p.name}</strong><br><br>${p.desc}<br><br>
<strong>À partir de : ${p.price.toLocaleString('fr-CA')} $ CAD${p.mo?' / mois':' (une fois)'}</strong><br><br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 Guide des prix complet</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Obtenir un devis →</a>`;
  }

  /* ── FAQ ────────────────────────────────────────────────── */
  const FAQ = [
    {
      keys:['prix','tarif','coût','combien','forfait','budget','frais','tarification','abordable'],
      answer:()=>`💰 <strong>Goshen Web X — Tarifs (CAD)</strong><br><br>${PLANS.map(pricingCard).join('')}<br>
Tous les prix en <strong>CAD</strong>. Chaque projet inclut un <strong>appel découverte gratuit</strong>.<br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 Guide des prix complet</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Devis gratuit →</a>`,
    },
    { keys:['vitrine','site simple','5 pages','site de base'], answer:()=>planDetail(PLANS[0]) },
    { keys:['entreprise','10 pages','blogue','cms'], answer:()=>planDetail(PLANS[1]) },
    { keys:['ecommerce','e-commerce','boutique','shopify','vente en ligne','magasin'], answer:()=>planDetail(PLANS[2]) },
    { keys:['application','web app','tableau de bord','portail','firebase','mysql'], answer:()=>planDetail(PLANS[3]) },
    { keys:['maintenance','soutien','mise à jour','correction','après lancement','garantie','bogue'], answer:()=>planDetail(PLANS[7]) },
    {
      keys:['portfolio','site portfolio','créatif','vitrine créative','artiste','galerie'],
      answer:`🖼️ <strong>Notre Portfolio</strong><br><br>
Projets récents réalisés :<br><br>
• <a href="https://rcmchurch.netlify.app/" target="_blank" style="color:#10b981;font-weight:600">RCM Church</a> — Événements, sermons & communauté<br>
• <a href="https://wokovuway.org/" target="_blank" style="color:#10b981;font-weight:600">Wokovuway.org</a> — Expérience numérique pour OBNL<br>
• <a href="http://cliniquedepodologielilibethhuertas.com/" target="_blank" style="color:#10b981;font-weight:600">Clinique de Podologie</a> — Site professionnel de clinique<br><br>
Sites portfolio à partir de <strong>349 $ CAD</strong>.<br>
<a href="/portfolio.html" style="color:#10b981;font-weight:600">👉 Voir le portfolio complet</a>`,
    },
    {
      keys:['seo','google','classement','référencement','optimiser','vitesse','lighthouse','core web','trafic'],
      answer:`⚡ <strong>Optimisation Web & SEO</strong><br><br>
Nous atteignons régulièrement <strong>98/100 sur Lighthouse</strong>. Nos services :<br><br>
• Optimisation des Core Web Vitals & vitesse de chargement<br>
• SEO technique et on-page<br>
• Balisage Schema & optimisation des métadonnées<br>
• Compression d'images & chargement différé<br>
• Configuration Google Analytics & Search Console<br><br>
<strong>SEO Basic</strong> — 299 $/mois &nbsp;·&nbsp; <strong>SEO Pro</strong> — 549 $/mois<br><br>
<a href="/web-optimisation.html" style="color:#10b981;font-weight:600">👉 En savoir plus sur le SEO</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Audit SEO gratuit →</a>`,
    },
    {
      keys:['service','services','offre','que faites-vous','que proposez-vous','aide'],
      answer:`🌐 <strong>Nos Services</strong><br><br>
<a href="/website-dev.html" style="color:#10b981;font-weight:600"><strong>🌐 Développement Web</strong></a> — À partir de 499 $<br>
Sites sur mesure, réactifs et orientés conversions.<br><br>
<a href="/web-optimisation.html" style="color:#10b981;font-weight:600"><strong>⚡ Optimisation Web & SEO</strong></a> — À partir de 299 $/mois<br>
Vitesse, performance & classement Google.<br><br>
<a href="/portfolio.html" style="color:#10b981;font-weight:600"><strong>🎨 Sites Portfolio</strong></a> — À partir de 349 $<br>
Vitrines élégantes pour créatifs & professionnels.<br><br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 Voir le guide des prix complet</a>`,
    },
    {
      keys:['contact','joindre','email','courriel','téléphone','parler','message','réseaux','social'],
      answer:`📬 <strong>Nous Contacter</strong><br><br>
• 📧 <a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">info@goshenwebx.io</a><br>
• 💬 <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp : +1 418-573-8680</a><br>
• 📍 Québec, Canada<br>
• 🐦 <a href="https://x.com/goshenwebx" target="_blank" style="color:#10b981;font-weight:600">@goshenwebx</a> sur X<br>
• 💼 <a href="https://www.linkedin.com/in/goshen-web-x-9b3246364" target="_blank" style="color:#10b981;font-weight:600">LinkedIn</a><br>
• 📸 <a href="https://www.instagram.com/gwx_technologies" target="_blank" style="color:#10b981;font-weight:600">@gwx_technologies</a> sur Instagram<br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Formulaire de contact</a>`,
    },
    {
      keys:['où','localisation','emplacement','basé','canada','québec','bureau','à distance'],
      answer:`📍 Nous sommes basés à <strong>Québec, Canada</strong> et servons des clients partout au Canada et à l'international.<br><br>
Tous nos services sont livrés <strong>100 % à distance</strong> — nous travaillons avec vous peu importe où vous êtes ! 🌍<br><br>
<a href="/about.html" style="color:#10b981;font-weight:600">En savoir plus sur nous →</a>`,
    },
    {
      keys:['réserver','réservation','rendez-vous','consultation','appel','planifier','meeting','découverte'],
      answer:`📅 <strong>Réserver une Consultation Gratuite</strong><br><br>
Entièrement <strong>gratuit et sans engagement</strong>. Voici comment ça fonctionne :<br><br>
1️⃣ Vous partagez vos objectifs de projet<br>
2️⃣ Nous analysons vos besoins & votre audience<br>
3️⃣ Vous recevez une proposition personnalisée dans <strong>24 heures</strong><br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Réserver votre consultation</a> &nbsp;·&nbsp; <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp →</a>`,
    },
    {
      keys:['devis','devis gratuit','estimation','proposition','soumission','gratuit'],
      answer:`🎉 <strong>Obtenez Votre Devis Gratuit</strong><br><br>
Ça prend moins de 2 minutes ! Dites-nous simplement :<br>
• Le type de site dont vous avez besoin<br>
• Votre budget approximatif<br>
• Votre délai souhaité<br><br>
Nous répondons dans <strong>24 heures</strong> — sans engagement.<br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Demander un devis gratuit</a> &nbsp;·&nbsp; <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp →</a>`,
    },
    {
      keys:['délai','combien de temps','livraison','échéance','rapide','urgent','rush'],
      answer:`⏱️ <strong>Délais de Livraison</strong><br><br>
Délais typiques :<br><br>
• <strong>Portfolio / Vitrine</strong> — 5–7 jours ouvrables<br>
• <strong>Site Entreprise</strong> — 10–14 jours ouvrables<br>
• <strong>E-Commerce</strong> — 14–21 jours ouvrables<br>
• <strong>Application Web</strong> — 3–6 semaines<br>
• <strong>Audit SEO</strong> — 3–5 jours ouvrables<br><br>
Besoin de plus vite ? Renseignez-vous sur notre option <strong>Livraison Express</strong>.<br>
<a href="/contact.html" style="color:#10b981;font-weight:600">Discuter de votre délai →</a>`,
    },
    {
      keys:['paiement','dépôt','payer','facture','remboursement','interac','paypal','versement'],
      answer:`💳 <strong>Paiement & Facturation</strong><br><br>
• <strong>50 % de dépôt</strong> requis pour démarrer le projet<br>
• <strong>50 % à la livraison</strong> avant la mise en ligne<br>
• Accepté : <strong>Virement Interac, PayPal, carte de crédit</strong><br>
• Plans SEO mensuels facturés en début de mois<br>
• Toutes les factures en <strong>CAD</strong><br><br>
<a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">Questions sur le paiement ? Écrivez-nous →</a>`,
    },
    {
      keys:['technologie','tech','outils','framework','php','javascript','aws','firebase'],
      answer:`⚙️ <strong>Notre Stack Technologique</strong><br><br>
• <strong>Frontend :</strong> HTML5, CSS3, JavaScript (ES2024), Tailwind CSS<br>
• <strong>Backend :</strong> PHP 8, Node.js, APIs RESTful<br>
• <strong>Base de données :</strong> MySQL, Firebase Realtime DB<br>
• <strong>Cloud :</strong> AWS (EC2, S3, CloudFront)<br>
• <strong>E-Commerce :</strong> Shopify, WooCommerce<br>
• <strong>CMS :</strong> WordPress, CMS sur mesure<br><br>
<a href="/website-dev.html" style="color:#10b981;font-weight:600">Notre processus de développement →</a>`,
    },
    {
      keys:['blogue','blog','article','conseils','lire','astuces','guide'],
      answer:`📝 <strong>Blogue & Ressources</strong><br><br>
• <a href="/articles/SEO-strategies-for-small-business-growth-in-2026.html" style="color:#10b981;font-weight:600">Stratégies SEO pour la croissance des PME en 2026</a><br>
• <a href="/articles/how-to-choose-the-perfect-website-for-your-business.html" style="color:#10b981;font-weight:600">Comment choisir le site web parfait pour votre entreprise</a><br>
• <a href="/articles/why-speed-matters.html" style="color:#10b981;font-weight:600">Pourquoi la vitesse est cruciale : Les Core Web Vitals expliqués</a><br><br>
<a href="/blog.html" style="color:#10b981;font-weight:600">👉 Visiter le blogue complet</a>`,
    },
    {
      keys:['carrière','emploi','embauche','bénévole','travailler','rejoindre','poste','recrutement'],
      answer:`💼 <strong>Rejoindre Goshen Web X</strong><br><br>
Postes disponibles :<br><br>
• <strong>Développeur Front-End</strong> — Télétravail (Canada)<br>
• <strong>Développeur Backend</strong> — Télétravail<br>
• <strong>Spécialiste Marketing Numérique</strong> — Télétravail/Hybride<br><br>
Nous accueillons également des <strong>bénévoles</strong> — mentors web, créateurs de contenu & soutien aux OBNL.<br><br>
<a href="/job-listings.html" style="color:#10b981;font-weight:600">👉 Toutes les offres d'emploi</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Candidature spontanée →</a>`,
    },
    {
      keys:['à propos','qui êtes-vous','entreprise','équipe','goshen','histoire'],
      answer:`🌱 <strong>À propos de Goshen Web X</strong><br><br>
Agence web professionnelle basée à <strong>Québec, Canada</strong> — aidant les petites entreprises à croître en ligne depuis <strong>2024</strong>.<br><br>
📊 <strong>En chiffres :</strong><br>
• 47+ clients satisfaits<br>
• 98/100 score Lighthouse moyen<br>
• 340 % de croissance des conversions en moyenne<br>
• 98 % de taux de satisfaction client<br><br>
<a href="/about.html" style="color:#10b981;font-weight:600">👉 Notre histoire complète</a>`,
    },
    {
      keys:['bonjour','salut','allô','allo','bonsoir','coucou','hello','hi','démarrer'],
      answer:`👋 <strong>Bonjour ! Bienvenue chez Goshen Web X !</strong><br><br>
Je suis votre assistant virtuel. Je peux vous aider avec :<br><br>
💰 Tarifs &amp; forfaits &nbsp;·&nbsp; 🌐 Services<br>
📅 Réserver un appel &nbsp;·&nbsp; 🖼️ Portfolio<br>
⏱️ Délais &nbsp;·&nbsp; 💳 Paiement<br>
🛠️ Maintenance &nbsp;·&nbsp; 💼 Carrières<br><br>
Utilisez les boutons rapides ou tapez votre question ! 😊`,
    },
    {
      keys:['merci','super','parfait','excellent','génial','bravo','formidable','impressionnant'],
      answer:`Avec plaisir ! 😊 C'est notre bonheur de vous aider.<br><br>
Prêt à démarrer ? <a href="/contact.html" style="color:#10b981;font-weight:600">Demandez un devis gratuit →</a>`,
    },
  ];

  const FALLBACK = `Je ne suis pas certain de la réponse, mais notre équipe peut certainement vous aider ! 🤝<br><br>
<strong>Contactez-nous directement :</strong><br>
• 📧 <a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">info@goshenwebx.io</a><br>
• 💬 <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp : +1 418-573-8680</a><br>
• 📋 <a href="/contact.html" style="color:#10b981;font-weight:600">Formulaire de contact</a><br><br>
Nous répondons dans <strong>24 heures</strong> — souvent bien plus vite ! ⚡`;

  /* ── Suggestions d'autocomplétion ──────────────────────── */
  const SUGGESTIONS = [
    'Quels sont vos prix ?','Quels services offrez-vous ?','Comment vous contacter ?',
    'Je veux un devis gratuit','Combien de temps prend un projet ?','Offrez-vous des services SEO ?',
    'Quelle est votre stack technologique ?','Puis-je voir votre portfolio ?',
    'Quels modes de paiement acceptez-vous ?','Offrez-vous des forfaits de maintenance ?',
    'Où êtes-vous situés ?','Comment réserver une consultation ?',
    'Parlez-moi du forfait Vitrine','Parlez-moi du forfait Entreprise',
    'Faites-vous des boutiques en ligne ?','Faites-vous des applications web ?',
    'Quels sont vos forfaits SEO ?','Recrutez-vous ?','Parlez-moi de Goshen Web X',
    'Quel est votre délai de livraison ?','Offrez-vous une livraison express ?',
  ];

  function getReply(input) {
    const t=input.toLowerCase().trim();
    for(const item of FAQ){
      if(item.keys.some(k=>t.includes(k))) return typeof item.answer==='function'?item.answer():item.answer;
    }
    return FALLBACK;
  }

  const QUICK = [
    { label:'💰 Tarifs',         msg:'Quels sont vos prix ?' },
    { label:'🌐 Services',       msg:'Quels services offrez-vous ?' },
    { label:'📅 Consultation',   msg:'Je veux réserver un appel' },
    { label:'📋 Devis Gratuit',  msg:'Je veux un devis gratuit' },
    { label:'🖼️ Portfolio',      msg:'Puis-je voir votre portfolio ?' },
    { label:'⏱️ Délais',         msg:'Combien de temps prend un projet ?' },
  ];

  /* ── CSS (identique EN, réutilisé) ─────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    #gwx-chat-toggle{position:fixed;bottom:88px;right:88px;width:60px;height:60px;background:${C.primary};border-radius:50%;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 8px 24px rgba(20,83,45,.35);transition:background .25s,transform .25s;z-index:10001;}
    #gwx-chat-toggle:hover{background:${C.emerald};transform:scale(1.08);}
    #gwx-chat-toggle svg{width:28px;height:28px;fill:#fff;}
    #gwx-chat-toggle .gwx-close-icon{display:none;}
    #gwx-chat-toggle.open .gwx-open-icon{display:none;}
    #gwx-chat-toggle.open .gwx-close-icon{display:block;}
    #gwx-chat-window{position:fixed;bottom:164px;right:88px;width:390px;max-height:640px;background:${C.white};border-radius:24px;box-shadow:0 24px 64px rgba(20,83,45,.18),0 4px 16px rgba(0,0,0,.08);display:flex;flex-direction:column;overflow:hidden;z-index:10000;transition:opacity .3s,transform .3s;font-family:'Plus Jakarta Sans','Poppins',system-ui,sans-serif;font-size:14px;}
    #gwx-chat-window.gwx-hidden{opacity:0;transform:translateY(16px) scale(0.97);pointer-events:none;}
    .gwx-header{background:${C.primary};padding:16px 20px;display:flex;align-items:center;gap:12px;flex-shrink:0;}
    .gwx-avatar{width:42px;height:42px;border-radius:50%;background:${C.emerald};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;}
    .gwx-header-info{flex:1;}
    .gwx-header-name{font-weight:700;color:#fff;font-size:15px;line-height:1.2;font-family:'Poppins',sans-serif;}
    .gwx-header-status{font-size:12px;color:${C.emeraldLt};display:flex;align-items:center;gap:5px;margin-top:2px;}
    .gwx-status-dot{width:7px;height:7px;border-radius:50%;background:${C.emeraldLt};animation:gwx-pulse 2s ease-in-out infinite;}
    @keyframes gwx-pulse{0%,100%{opacity:1}50%{opacity:.4}}
    .gwx-messages{flex:1;overflow-y:auto;padding:16px 14px 10px;display:flex;flex-direction:column;gap:10px;background:${C.light};}
    .gwx-messages::-webkit-scrollbar{width:4px;}
    .gwx-messages::-webkit-scrollbar-thumb{background:${C.border};border-radius:4px;}
    .gwx-msg{display:flex;align-items:flex-end;gap:8px;max-width:100%;}
    .gwx-msg.bot{justify-content:flex-start;}
    .gwx-msg.user{justify-content:flex-end;}
    .gwx-bot-av{width:28px;height:28px;border-radius:50%;background:${C.primary};color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0;}
    .gwx-bubble{padding:10px 14px;border-radius:18px;line-height:1.6;max-width:86%;word-break:break-word;}
    .gwx-msg.bot .gwx-bubble{background:${C.white};color:${C.textDark};border-bottom-left-radius:5px;border:1px solid ${C.border};}
    .gwx-msg.user .gwx-bubble{background:${C.primary};color:#fff;border-bottom-right-radius:5px;}
    .gwx-msg.bot .gwx-bubble a{color:${C.emerald};}
    .gwx-typing .gwx-bubble{padding:13px 16px;display:flex;gap:5px;align-items:center;}
    .gwx-dot{width:7px;height:7px;border-radius:50%;background:${C.textGray};animation:gwx-bounce .9s infinite ease-in-out;}
    .gwx-dot:nth-child(2){animation-delay:.18s}.gwx-dot:nth-child(3){animation-delay:.36s}
    @keyframes gwx-bounce{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-7px)}}
    .gwx-quick-wrap{padding:8px 14px 6px;display:flex;flex-wrap:wrap;gap:6px;background:${C.light};border-top:1px solid ${C.border};}
    .gwx-quick-btn{background:${C.white};border:1px solid ${C.emerald};color:${C.primary};font-weight:600;font-size:11.5px;padding:5px 11px;border-radius:20px;cursor:pointer;transition:background .2s,color .2s;font-family:inherit;}
    .gwx-quick-btn:hover{background:${C.emerald};color:#fff;}
    .gwx-ac-wrap{position:relative;}
    .gwx-suggestions{position:absolute;bottom:100%;left:0;right:0;background:${C.white};border:1px solid ${C.border};border-radius:14px;overflow:hidden;box-shadow:0 -8px 24px rgba(0,0,0,.09);max-height:190px;overflow-y:auto;display:none;z-index:10;margin-bottom:6px;}
    .gwx-suggestions.open{display:block;}
    .gwx-sug{padding:10px 14px;cursor:pointer;font-size:13px;color:${C.textDark};border-bottom:1px solid #f3f4f6;transition:background .15s;}
    .gwx-sug:last-child{border-bottom:none;}
    .gwx-sug:hover,.gwx-sug.active{background:${C.light};color:${C.primary};}
    .gwx-sug strong{color:${C.emerald};}
    .gwx-input-row{padding:10px 14px;border-top:1px solid ${C.border};display:flex;align-items:center;gap:8px;background:${C.white};flex-shrink:0;}
    .gwx-input{flex:1;border:1px solid ${C.border};border-radius:30px;padding:9px 16px;font-size:16px;font-family:inherit;outline:none;color:${C.textDark};background:${C.light};transition:border-color .2s,box-shadow .2s;-webkit-text-size-adjust:100%;touch-action:manipulation;}
    @media(min-width:481px){.gwx-input{font-size:13.5px;}}
    .gwx-input:focus{border-color:${C.emerald};box-shadow:0 0 0 3px rgba(16,185,129,.12);}
    .gwx-send{width:38px;height:38px;border-radius:50%;background:${C.primary};border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s,transform .2s;flex-shrink:0;}
    .gwx-send:hover{background:${C.emerald};transform:scale(1.08);}
    .gwx-send svg{width:17px;height:17px;fill:#fff;}
    .gwx-footer{text-align:center;font-size:11px;color:${C.textGray};padding:5px 0 9px;background:${C.white};}
    .gwx-footer a{color:${C.emerald};text-decoration:none;font-weight:600;}
    @media(max-width:480px){#gwx-chat-window{bottom:0;right:0;left:0;top:0;width:100%;max-height:100%;border-radius:0;}#gwx-chat-toggle{bottom:24px;right:24px;}}
  `;
  document.head.appendChild(style);

  /* ── DOM ────────────────────────────────────────────────── */
  const toggle = document.createElement('button');
  toggle.id = 'gwx-chat-toggle';
  toggle.setAttribute('aria-label','Ouvrir le clavardage');
  toggle.innerHTML = `<svg class="gwx-open-icon" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z"/></svg><svg class="gwx-close-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

  const win = document.createElement('div');
  win.id='gwx-chat-window'; win.className='gwx-hidden';
  win.setAttribute('role','dialog'); win.setAttribute('aria-label','Assistant Goshen Web X');
  win.innerHTML = `
    <div class="gwx-header">
      <div class="gwx-avatar">🌱</div>
      <div class="gwx-header-info">
        <div class="gwx-header-name">Goshen Web X</div>
        <div class="gwx-header-status"><span class="gwx-status-dot"></span> En ligne — répond instantanément</div>
      </div>
    </div>
    <div class="gwx-messages" id="gwx-msgs"></div>
    <div class="gwx-quick-wrap" id="gwx-quick">${QUICK.map(q=>`<button class="gwx-quick-btn" data-msg="${q.msg}">${q.label}</button>`).join('')}</div>
    <div class="gwx-ac-wrap">
      <div class="gwx-suggestions" id="gwx-sug"></div>
      <div class="gwx-input-row">
        <input class="gwx-input" id="gwx-inp" type="text" placeholder="Posez votre question…" autocomplete="off" maxlength="300"/>
        <button class="gwx-send" id="gwx-snd" aria-label="Envoyer"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
    </div>
    <div class="gwx-footer">Propulsé par <a href="https://goshenwebx.io" target="_blank">GoshenWebX</a></div>`;

  document.body.appendChild(toggle);
  document.body.appendChild(win);

  const msgBox=document.getElementById('gwx-msgs');
  const inp=document.getElementById('gwx-inp');
  const sugBox=document.getElementById('gwx-sug');
  let isOpen=false,isBusy=false,actIdx=-1;

  const scrollBot=()=>{msgBox.scrollTop=msgBox.scrollHeight;};

  function addMsg(html,who){
    const w=document.createElement('div'); w.className=`gwx-msg ${who}`;
    w.innerHTML=who==='bot'?`<div class="gwx-bot-av">🌱</div><div class="gwx-bubble">${html}</div>`:`<div class="gwx-bubble">${html}</div>`;
    msgBox.appendChild(w); scrollBot();
  }

  function showTyping(){
    const t=document.createElement('div'); t.className='gwx-msg bot gwx-typing'; t.id='gwx-typ';
    t.innerHTML=`<div class="gwx-bot-av">🌱</div><div class="gwx-bubble"><span class="gwx-dot"></span><span class="gwx-dot"></span><span class="gwx-dot"></span></div>`;
    msgBox.appendChild(t); scrollBot();
  }
  const removeTyping=()=>{const t=document.getElementById('gwx-typ');if(t)t.remove();};

  function showSug(val){
    const v=val.toLowerCase().trim();
    if(v.length<2){closeSug();return;}
    const m=SUGGESTIONS.filter(s=>s.toLowerCase().includes(v)).slice(0,7);
    if(!m.length){closeSug();return;}
    actIdx=-1;
    sugBox.innerHTML=m.map((s,i)=>{
      const hi=s.replace(new RegExp(`(${v.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi'),'<strong>$1</strong>');
      return `<div class="gwx-sug" data-v="${s}" data-i="${i}">${hi}</div>`;
    }).join('');
    sugBox.classList.add('open');
  }
  function closeSug(){sugBox.classList.remove('open');sugBox.innerHTML='';actIdx=-1;}

  sugBox.addEventListener('mousedown',e=>{
    const it=e.target.closest('.gwx-sug');
    if(it){e.preventDefault();send(it.dataset.v);}
  });

  inp.addEventListener('input',()=>showSug(inp.value));
  inp.addEventListener('keydown',e=>{
    const items=sugBox.querySelectorAll('.gwx-sug');
    if(e.key==='ArrowDown'){e.preventDefault();actIdx=Math.min(actIdx+1,items.length-1);items.forEach((el,i)=>el.classList.toggle('active',i===actIdx));}
    else if(e.key==='ArrowUp'){e.preventDefault();actIdx=Math.max(actIdx-1,-1);items.forEach((el,i)=>el.classList.toggle('active',i===actIdx));}
    else if(e.key==='Enter'&&!e.shiftKey){if(actIdx>=0&&items[actIdx]){e.preventDefault();send(items[actIdx].dataset.v);}else send(inp.value);}
    else if(e.key==='Escape') closeSug();
  });
  document.addEventListener('click',e=>{if(!e.target.closest('.gwx-ac-wrap')) closeSug();});

  function send(text){
    text=text.trim(); if(!text||isBusy) return;
    isBusy=true; inp.value=''; closeSug();
    addMsg(text,'user');
    const qw=document.getElementById('gwx-quick'); if(qw) qw.style.display='none';
    showTyping();
    /* AI HOOK — remplacez le setTimeout par fetch() vers votre API IA */
    setTimeout(()=>{removeTyping();addMsg(getReply(text),'bot');isBusy=false;},500+Math.random()*500);
  }

  toggle.addEventListener('click',()=>{
    isOpen=!isOpen;
    toggle.classList.toggle('open',isOpen);
    win.classList.toggle('gwx-hidden',!isOpen);
    if(isOpen&&msgBox.children.length===0){
      setTimeout(()=>addMsg(`👋 <strong>Bonjour ! Bienvenue chez Goshen Web X !</strong><br><br>Je suis votre assistant virtuel. Je peux vous aider avec nos <strong>services, tarifs, portfolio</strong>, délais et plus encore.<br><br>Comment puis-je vous aider aujourd'hui ? 😊`,'bot'),300);
    }
    if(isOpen) setTimeout(()=>inp.focus(),350);
  });

  document.getElementById('gwx-snd').addEventListener('click',()=>send(inp.value));
  document.getElementById('gwx-quick').addEventListener('click',e=>{
    const b=e.target.closest('.gwx-quick-btn'); if(b) send(b.dataset.msg);
  });
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&isOpen){isOpen=false;toggle.classList.remove('open');win.classList.add('gwx-hidden');}
  });

})();