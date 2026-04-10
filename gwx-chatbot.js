/**
 * ============================================================
 *  GOSHEN WEB X — Site Chatbot Widget  v2.0  (English)
 *
 *  EMBED (one line before </body>):
 *    <script src="gwx-chatbot.js"></script>
 *
 *  AI UPGRADE LATER:
 *    Find "/* AI HOOK" and replace the setTimeout block with
 *    a fetch() call to OpenAI / Gemini / Claude.
 * ============================================================
 */
(function () {
  'use strict';

  const C = {
    primary:'#14532d',emerald:'#10b981',emeraldLt:'#34d399',
    light:'#f8faf5',white:'#ffffff',textGray:'#6b7280',textDark:'#111827',border:'#e5e7eb',
  };

  /* ── Pricing (accurate) ─────────────────────────────────── */
  const PLANS = [
    { icon:'🌱', name:'Starter',      price:499,   mo:false, desc:'Up to 5 pages, mobile-ready, contact form, basic SEO, Google Analytics.' },
    { icon:'🚀', name:'Business',     price:999,   mo:false, desc:'Up to 10 pages, blog, CMS, advanced SEO, Analytics + Search Console.' },
    { icon:'🛒', name:'E-Commerce',   price:1499,  mo:false, desc:'Online store — Shopify or custom cart, product pages, payment integration.' },
    { icon:'⚙️', name:'Web App',      price:2499,  mo:false, desc:'Custom web applications — dashboards, portals, Firebase / MySQL backend.' },
    { icon:'🎨', name:'Portfolio',    price:349,   mo:false, desc:'Gallery, bio, contact — optimised to impress clients & employers.' },
    { icon:'📈', name:'SEO Basic',    price:299,   mo:true,  desc:'Technical audit, on-page fixes, Core Web Vitals, monthly report.' },
    { icon:'📊', name:'SEO Pro',      price:549,   mo:true,  desc:'Everything in Basic + content strategy, backlink outreach, Google Ads.' },
    { icon:'🛠️', name:'Maintenance',  price:99,    mo:true,  desc:'Bug fixes, content updates, security monitoring & hosting management.' },
  ];

  function pricingCard(p) {
    return `<div style="background:#f1f5f0;border-radius:12px;padding:9px 12px;display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:5px">
      <span style="font-size:13px">${p.icon} <strong>${p.name}</strong><br><span style="font-size:11px;color:#6b7280">${p.desc}</span></span>
      <span style="background:#14532d;color:#fff;font-size:11.5px;font-weight:700;padding:3px 9px;border-radius:20px;white-space:nowrap;flex-shrink:0">$${p.price.toLocaleString()}${p.mo?'/mo':''}</span>
    </div>`;
  }

  function planDetail(p) {
    return `${p.icon} <strong>${p.name} Plan</strong><br><br>${p.desc}<br><br>
<strong>Starting at: $${p.price.toLocaleString()} CAD${p.mo?' / month':' one-time'}</strong><br><br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 Full pricing guide</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Get a custom quote →</a>`;
  }

  /* ── FAQ ────────────────────────────────────────────────── */
  const FAQ = [
    {
      keys:['price','pricing','cost','how much','rates','plan','package','fee','charge','budget','afford'],
      answer:()=>`💰 <strong>Goshen Web X — Pricing (CAD)</strong><br><br>${PLANS.map(pricingCard).join('')}<br>
All prices in <strong>CAD</strong>. Every project includes a <strong>free discovery call</strong>.<br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 Full pricing guide</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Get a free custom quote →</a>`,
    },
    { keys:['starter','basic website','simple site','5 page'], answer:()=>planDetail(PLANS[0]) },
    { keys:['business plan','business website','10 page','blog','cms'], answer:()=>planDetail(PLANS[1]) },
    { keys:['ecommerce','e-commerce','online store','shopify','sell online','shop'], answer:()=>planDetail(PLANS[2]) },
    { keys:['web app','webapp','application','dashboard','portal','firebase','mysql'], answer:()=>planDetail(PLANS[3]) },
    { keys:['maintenance','support','update','fix','after launch','warranty','bug'], answer:()=>planDetail(PLANS[7]) },
    {
      keys:['portfolio','portfolio website','creative','showcase','artist','gallery'],
      answer:`🖼️ <strong>Our Portfolio</strong><br><br>
Recent projects we have built:<br><br>
• <a href="https://rcmchurch.netlify.app/" target="_blank" style="color:#10b981;font-weight:600">RCM Church</a> — Events, sermons & community site<br>
• <a href="https://wokovuway.org/" target="_blank" style="color:#10b981;font-weight:600">Wokovuway.org</a> — Non-profit digital experience<br>
• <a href="http://cliniquedepodologielilibethhuertas.com/" target="_blank" style="color:#10b981;font-weight:600">Podology Clinic</a> — Professional clinic site<br><br>
Portfolio websites start at <strong>$349 CAD</strong>.<br>
<a href="/portfolio.html" style="color:#10b981;font-weight:600">👉 See full portfolio</a>`,
    },
    {
      keys:['seo','google','rank','search engine','optimise','optimize','speed','lighthouse','core web','traffic'],
      answer:`⚡ <strong>Web Optimisation & SEO</strong><br><br>
We consistently hit <strong>98/100 Lighthouse scores</strong>. Services include:<br><br>
• Core Web Vitals & page speed optimisation<br>
• On-page & technical SEO<br>
• Schema markup & meta optimisation<br>
• Image compression & lazy loading<br>
• Google Analytics & Search Console setup<br><br>
<strong>SEO Basic</strong> — $299/mo &nbsp;·&nbsp; <strong>SEO Pro</strong> — $549/mo<br><br>
<a href="/web-optimisation.html" style="color:#10b981;font-weight:600">👉 Learn more about SEO</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Get a free SEO audit →</a>`,
    },
    {
      keys:['service','services','offer','what do you do','help with','provide'],
      answer:`🌐 <strong>Our Services</strong><br><br>
<a href="/website-dev.html" style="color:#10b981;font-weight:600"><strong>🌐 Website Development</strong></a> — From $499<br>
Bespoke, responsive sites built for conversions.<br><br>
<a href="/web-optimisation.html" style="color:#10b981;font-weight:600"><strong>⚡ Web Optimisation & SEO</strong></a> — From $299/mo<br>
Speed, performance & Google rankings.<br><br>
<a href="/portfolio.html" style="color:#10b981;font-weight:600"><strong>🎨 Portfolio Websites</strong></a> — From $349<br>
Elegant showcases for creatives & professionals.<br><br>
<a href="/pricing_guide.html" style="color:#10b981;font-weight:600">👉 See full pricing breakdown</a>`,
    },
    {
      keys:['contact','reach','email','phone','get in touch','talk','message','social'],
      answer:`📬 <strong>Get in Touch</strong><br><br>
• 📧 <a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">info@goshenwebx.io</a><br>
• 💬 <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp: +1 418-573-8680</a><br>
• 📍 Quebec, Canada<br>
• 🐦 <a href="https://x.com/goshenwebx" target="_blank" style="color:#10b981;font-weight:600">@goshenwebx</a> on X<br>
• 💼 <a href="https://www.linkedin.com/in/goshen-web-x-9b3246364" target="_blank" style="color:#10b981;font-weight:600">LinkedIn</a><br>
• 📸 <a href="https://www.instagram.com/gwx_technologies" target="_blank" style="color:#10b981;font-weight:600">@gwx_technologies</a> on Instagram<br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Open contact form</a>`,
    },
    {
      keys:['location','where','based','canada','quebec','office','remote'],
      answer:`📍 We are based in <strong>Quebec, Canada</strong> and serve clients across Canada and internationally.<br><br>
All services are delivered <strong>100% remotely</strong> — we work with you anywhere in the world! 🌍<br><br>
<a href="/about.html" style="color:#10b981;font-weight:600">Learn more about us →</a>`,
    },
    {
      keys:['book','booking','appointment','schedule','call','consultation','meeting','discovery'],
      answer:`📅 <strong>Book a Free Consultation</strong><br><br>
Completely <strong>free & no-obligation</strong>. Here's how it works:<br><br>
1️⃣ You share your project goals<br>
2️⃣ We analyse your needs & audience<br>
3️⃣ You receive a tailored proposal within <strong>24 hours</strong><br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Book your free consultation</a> &nbsp;·&nbsp; <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp us →</a>`,
    },
    {
      keys:['quote','free quote','estimate','proposal','custom'],
      answer:`🎉 <strong>Get Your Free Custom Quote</strong><br><br>
Takes less than 2 minutes! Just tell us:<br>
• What type of site you need<br>
• Your approximate budget<br>
• Your preferred timeline<br><br>
We reply within <strong>24 hours</strong> — no obligation.<br><br>
<a href="/contact.html" style="color:#10b981;font-weight:600">👉 Request free quote</a> &nbsp;·&nbsp; <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">Chat on WhatsApp →</a>`,
    },
    {
      keys:['timeline','how long','turnaround','delivery','deadline','fast','rush'],
      answer:`⏱️ <strong>Project Timelines</strong><br><br>
Typical delivery times:<br><br>
• <strong>Portfolio / Starter</strong> — 5–7 business days<br>
• <strong>Business Website</strong> — 10–14 business days<br>
• <strong>E-Commerce</strong> — 14–21 business days<br>
• <strong>Web Application</strong> — 3–6 weeks<br>
• <strong>SEO Audit</strong> — 3–5 business days<br><br>
Need it faster? Ask about our <strong>Rush Delivery</strong> option.<br>
<a href="/contact.html" style="color:#10b981;font-weight:600">Discuss your timeline →</a>`,
    },
    {
      keys:['payment','deposit','pay','invoice','refund','interac','paypal','installment'],
      answer:`💳 <strong>Payment & Billing</strong><br><br>
• <strong>50% deposit</strong> required to start the project<br>
• <strong>50% on completion</strong> before site goes live<br>
• Accepted: <strong>Interac e-Transfer, PayPal, Credit card</strong><br>
• Monthly SEO plans billed at start of each month<br>
• All invoices issued in <strong>CAD</strong><br><br>
<a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">Questions about payment? Email us →</a>`,
    },
    {
      keys:['technology','tech','stack','tools','framework','php','javascript','aws','firebase'],
      answer:`⚙️ <strong>Our Technology Stack</strong><br><br>
• <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES2024), Tailwind CSS<br>
• <strong>Backend:</strong> PHP 8, Node.js, RESTful APIs<br>
• <strong>Database:</strong> MySQL, Firebase Realtime DB<br>
• <strong>Cloud:</strong> AWS (EC2, S3, CloudFront)<br>
• <strong>E-Commerce:</strong> Shopify, WooCommerce<br>
• <strong>CMS:</strong> WordPress, custom-built CMS<br><br>
<a href="/website-dev.html" style="color:#10b981;font-weight:600">Learn about our development process →</a>`,
    },
    {
      keys:['blog','article','insight','read','tips','guide'],
      answer:`📝 <strong>Blog & Insights</strong><br><br>
• <a href="/articles/SEO-strategies-for-small-business-growth-in-2026.html" style="color:#10b981;font-weight:600">SEO Strategies for Small Business Growth in 2026</a><br>
• <a href="/articles/how-to-choose-the-perfect-website-for-your-business.html" style="color:#10b981;font-weight:600">How to Choose the Perfect Website for Your Business</a><br>
• <a href="/articles/why-speed-matters.html" style="color:#10b981;font-weight:600">Why Speed Matters: Core Web Vitals Explained</a><br><br>
<a href="/blog.html" style="color:#10b981;font-weight:600">👉 Visit the full blog</a>`,
    },
    {
      keys:['career','job','hire','volunteer','work with','join','opening','position'],
      answer:`💼 <strong>Join Goshen Web X</strong><br><br>
Current openings:<br><br>
• <strong>Front-End Developer</strong> — Remote (Canada)<br>
• <strong>Backend Developer</strong> — Remote<br>
• <strong>Digital Marketing Specialist</strong> — Remote/Hybrid<br><br>
We also welcome <strong>volunteers</strong> — web mentors, content creators & non-profit supporters.<br><br>
<a href="/job-listings.html" style="color:#10b981;font-weight:600">👉 View all openings</a> &nbsp;·&nbsp; <a href="/contact.html" style="color:#10b981;font-weight:600">Send speculative application →</a>`,
    },
    {
      keys:['about','who are you','company','team','goshen','story','history'],
      answer:`🌱 <strong>About Goshen Web X</strong><br><br>
Professional web development agency based in <strong>Quebec, Canada</strong> — helping small businesses grow online since <strong>2024</strong>.<br><br>
📊 <strong>By the numbers:</strong><br>
• 47+ satisfied clients<br>
• 98/100 average Lighthouse score<br>
• 340% average conversion growth<br>
• 98% client satisfaction rate<br><br>
<a href="/about.html" style="color:#10b981;font-weight:600">👉 Our full story</a>`,
    },
    {
      keys:['hello','hi','hey','good morning','good afternoon','good evening','howdy','start'],
      answer:`👋 <strong>Hello! Welcome to Goshen Web X!</strong><br><br>
I'm your virtual assistant. I can help with:<br><br>
💰 Pricing &amp; plans &nbsp;·&nbsp; 🌐 Services<br>
📅 Book a call &nbsp;·&nbsp; 🖼️ Portfolio<br>
⏱️ Timelines &nbsp;·&nbsp; 💳 Payment<br>
🛠️ Support &nbsp;·&nbsp; 💼 Careers<br><br>
Use the quick buttons below or type your question! 😊`,
    },
    {
      keys:['thank','thanks','appreciate','awesome','great','perfect','excellent','amazing'],
      answer:`You're very welcome! 😊 Happy to help.<br><br>
Ready to get started? <a href="/contact.html" style="color:#10b981;font-weight:600">Request a free quote →</a>`,
    },
  ];

  const FALLBACK = `I'm not sure about that one, but our team definitely can help! 🤝<br><br>
<strong>Reach us directly:</strong><br>
• 📧 <a href="mailto:info@goshenwebx.io" style="color:#10b981;font-weight:600">info@goshenwebx.io</a><br>
• 💬 <a href="https://wa.me/14185738680" target="_blank" style="color:#10b981;font-weight:600">WhatsApp: +1 418-573-8680</a><br>
• 📋 <a href="/contact.html" style="color:#10b981;font-weight:600">Fill out our contact form</a><br><br>
We respond within <strong>24 hours</strong> — usually much faster! ⚡`;

  /* ── Autocomplete suggestions ───────────────────────────── */
  const SUGGESTIONS = [
    'What are your prices?','What services do you offer?','How can I contact you?',
    'I want a free quote','How long does a project take?','Do you offer SEO services?',
    'What is your tech stack?','Can I see your portfolio?','What payment methods do you accept?',
    'Do you offer maintenance plans?','Where are you located?','How do I book a consultation?',
    'Tell me about the Starter plan','Tell me about the Business plan',
    'Do you build e-commerce sites?','Do you build web applications?',
    'What are your SEO packages?','Are you hiring?','Tell me about Goshen Web X',
    'What is your turnaround time?','Do you offer rush delivery?',
  ];

  function getReply(input) {
    const t = input.toLowerCase().trim();
    for (const item of FAQ) {
      if (item.keys.some(k => t.includes(k))) return typeof item.answer === 'function' ? item.answer() : item.answer;
    }
    return FALLBACK;
  }

  const QUICK = [
    { label:'💰 Pricing',     msg:'What are your prices?' },
    { label:'🌐 Services',    msg:'What services do you offer?' },
    { label:'📅 Book a Call', msg:'I want to book a consultation' },
    { label:'📋 Free Quote',  msg:'I want a free quote' },
    { label:'🖼️ Portfolio',   msg:'Can I see your portfolio?' },
    { label:'⏱️ Timeline',    msg:'How long does a project take?' },
  ];

  /* ── CSS ────────────────────────────────────────────────── */
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
  toggle.setAttribute('aria-label','Open chat');
  toggle.innerHTML = `<svg class="gwx-open-icon" viewBox="0 0 24 24"><path d="M20 2H4a2 2 0 00-2 2v18l4-4h14a2 2 0 002-2V4a2 2 0 00-2-2zm-2 10H6V10h12v2zm0-3H6V7h12v2z"/></svg><svg class="gwx-close-icon" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`;

  const win = document.createElement('div');
  win.id = 'gwx-chat-window'; win.className = 'gwx-hidden';
  win.setAttribute('role','dialog'); win.setAttribute('aria-label','Goshen Web X Chat');
  win.innerHTML = `
    <div class="gwx-header">
      <div class="gwx-avatar">🌱</div>
      <div class="gwx-header-info">
        <div class="gwx-header-name">Goshen Web X</div>
        <div class="gwx-header-status"><span class="gwx-status-dot"></span> Online — usually replies instantly</div>
      </div>
    </div>
    <div class="gwx-messages" id="gwx-msgs"></div>
    <div class="gwx-quick-wrap" id="gwx-quick">${QUICK.map(q=>`<button class="gwx-quick-btn" data-msg="${q.msg}">${q.label}</button>`).join('')}</div>
    <div class="gwx-ac-wrap">
      <div class="gwx-suggestions" id="gwx-sug"></div>
      <div class="gwx-input-row">
        <input class="gwx-input" id="gwx-inp" type="text" placeholder="Ask anything about our services…" autocomplete="off" maxlength="300"/>
        <button class="gwx-send" id="gwx-snd" aria-label="Send"><svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>
    </div>
    <div class="gwx-footer">Powered by <a href="https://goshenwebx.io" target="_blank">GoshenWebX</a></div>`;

  document.body.appendChild(toggle);
  document.body.appendChild(win);

  const msgBox = document.getElementById('gwx-msgs');
  const inp    = document.getElementById('gwx-inp');
  const sugBox = document.getElementById('gwx-sug');
  let isOpen=false, isBusy=false, actIdx=-1;

  const scrollBot = () => { msgBox.scrollTop = msgBox.scrollHeight; };

  function addMsg(html, who) {
    const w = document.createElement('div');
    w.className = `gwx-msg ${who}`;
    w.innerHTML = who==='bot' ? `<div class="gwx-bot-av">🌱</div><div class="gwx-bubble">${html}</div>` : `<div class="gwx-bubble">${html}</div>`;
    msgBox.appendChild(w); scrollBot();
  }

  function showTyping() {
    const t=document.createElement('div'); t.className='gwx-msg bot gwx-typing'; t.id='gwx-typ';
    t.innerHTML=`<div class="gwx-bot-av">🌱</div><div class="gwx-bubble"><span class="gwx-dot"></span><span class="gwx-dot"></span><span class="gwx-dot"></span></div>`;
    msgBox.appendChild(t); scrollBot();
  }
  const removeTyping = () => { const t=document.getElementById('gwx-typ'); if(t) t.remove(); };

  /* autocomplete */
  function showSug(val) {
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

  function send(text) {
    text=text.trim(); if(!text||isBusy) return;
    isBusy=true; inp.value=''; closeSug();
    addMsg(text,'user');
    const qw=document.getElementById('gwx-quick'); if(qw) qw.style.display='none';
    showTyping();
    /* AI HOOK — replace setTimeout with fetch() to your AI API */
    setTimeout(()=>{ removeTyping(); addMsg(getReply(text),'bot'); isBusy=false; }, 500+Math.random()*500);
  }

  toggle.addEventListener('click',()=>{
    isOpen=!isOpen;
    toggle.classList.toggle('open',isOpen);
    win.classList.toggle('gwx-hidden',!isOpen);
    if(isOpen&&msgBox.children.length===0){
      setTimeout(()=>addMsg(`👋 <strong>Hello! Welcome to Goshen Web X!</strong><br><br>I'm here to help with questions about our <strong>services, pricing, portfolio</strong>, timelines, and more.<br><br>What can I help you with today? 😊`,'bot'),300);
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