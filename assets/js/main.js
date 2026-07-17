/* ============================================================
   CV — Mokhammad Afrizal Ramadhan  ·  interactions
   ============================================================ */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- i18n (English dictionary; ID is the HTML default) --------- */
  var EN = {
    skip: "Skip to content",
    nav1: "Summary", nav2: "Experience", nav3: "Projects", nav4: "Skills", nav5: "Awards", nav6: "Contact",
    cvbtn: "Download CV", emailbtn: "Email", contactbtn: "Contact Me", wabtn: "Contact Me",
    eyebrow: "Operations · Finance · Executive Support · Automation",
    headline: "Operations, Finance &amp; Executive Support Professional",
    tagline: "Trusted by the owner to run two business lines at once — a notary office &amp; an international ice-cream franchise network of 21 outlets.",
    loc: "Malang City, East Java, Indonesia",
    exp: "8+ years of experience",
    tape: "Profile · 2026",
    trust1: "Runs the finances of <b>3&nbsp;brands</b> — Aicha, Momoyo &amp; Mixue.",
    trust2: "Automation cut the workload <b>12&nbsp;hrs&nbsp;→&nbsp;3&nbsp;hrs</b>.",
    trust3: "Self-built systems <b>still in active use</b> today.",

    s1title: "Competency <em>balance sheet</em>",
    s1lead: "The key figures from 8+ years of work — read like a financial statement.",
    ledgerhead: "Performance Summary",
    k1l: "Professional experience", k1s: "Across administration, HR, finance &amp; automation",
    k2l: "Efficiency via automation", k2s: "Document processing: 12 hrs → 3 hrs (Python/VBA)",
    k3l: "Franchise outlets managed", k3s: "Finance for 3 brands: Aicha · Momoyo · Mixue",
    k4l: "Employees on payroll", k4s: "Attendance through salary transfer, every month",
    k5l: "Legal files processed", k5s: "National financing partners, per month",
    uyear: "+ years", ubranch: "outlets", uperson: "+ people", umonth: "/ month",

    s2title: "Career <em>track record</em>",
    s2lead: "Eight years of growing responsibility — from data operator to running two business lines.",
    now: "— Present",
    e2date: "Aug 2018", e4date: "Dec 2016",
    e1role: "Finance &amp; Operations Manager — Franchise Division", e1pill: "Owner's trust",
    e1a: "End-to-end finance for 3 brands (Aicha, Momoyo, Mixue) — from sales revenue to raw-material spend.",
    e1b: "Payroll for 150+ employees: attendance monitoring through salary transfer.",
    e1c: "Taxes via Coretax: PPh 21, PPh Final, PPh 23 — always on time.",
    e1d: "Personally built the AbsenKu &amp; StokGudang apps (see projects).",
    e1e: "Real-time financial report templates (Google Sheets + Apps Script).",
    e1award: "Designed &amp; built AbsenKu and StokGudang from scratch — two operational systems that are now the daily backbone of 21 outlets &amp; still in active use.",
    e2role: "Administrative, HR &amp; GA Officer · Right Hand to the Principal",
    e2a: "Legal documents for national financing partners — 5 cities/regencies, 2,000 files per month.",
    e2b: "Python &amp; VBA automation cut the process from 12 hours to 3 hours (75%).",
    e2c: "Represented the principal at key events (including two simultaneous agendas); managed schedules, itineraries, tickets &amp; travel.",
    e2d: "Digital BPN online partner files (2021–present), office cash, recruitment, and IT troubleshooting.",
    e2award: "Boosted document-input capacity &amp; speed via Python/VBA automation — 75% efficiency (12 hrs → 3 hrs), while raising the volume of files that can be handled.",
    e3role: "Data Administrator",
    e3a: "Verified tens of thousands of voter records (SIDALIH, Excel, Word).",
    e3aw1: "Best Data Operator — KPU Malang Regency (2018)",
    e3aw2: "Data Operator Charter — KPU East Java, 2018 Gov. Election",
    e4role: "Field Verification &amp; Validation Volunteer",
    e4a: "Verified &amp; validated beneficiary data directly in the field.",
    e5role: "Administrative Staff (Internship)",
    e5a: "Built archival software to organize the unit's documents.",
    e5aw: "Best Intern",

    s3title: "Featured <em>projects</em>",
    s3lead: "Three systems I designed, built, and operate myself for real businesses.",
    p1meta: "Attendance &amp; payroll · Web App",
    p1desc: "Online attendance with GPS + mandatory selfie verification. Two modes: Crew &amp; Owner. Per-outlet recaps, automatic tier- &amp; overtime-based pay, plus one-click recap and payslip export.",
    p1c1: "employees", p1c2: "mandatory selfie", p1c3: "payslip",
    p1i1: "Login — GPS + selfie verification", p1i2: "Owner panel — recap filter &amp; payslip export", p1i3: "Per-outlet attendance recap", p1i4: "Automated attendance recap export", p1i5: "Payroll recap export",
    privnote: "Some data is masked for privacy.",
    p2meta: "Multi-role inventory · Web App",
    p2desc: "Real-time inventory with 5 roles (Owner, Purchasing, Checker, Warehouse Admin, Outlet Crew). Full flow: PO → verification → allocation &amp; delivery note → inter-outlet transfer → stock opname → movement report.",
    p2c1: "access roles", p2c2: "outlets", p2c3: "stock",
    p2i1: "Multi-role login", p2i2: "Owner dashboard — real-time stock overview", p2i3: "Warehouse Admin — allocation &amp; stock opname", p2i4: "Outlet Crew — raw-material ordering",
    p3title: "Fiduciary Document Automation Suite (Python)",
    p3meta: "Python · RPA · End-to-end 3-stage suite",
    p3desc: "A suite of Python bots handling fiduciary paperwork end to end — downloading debtor documents, filling the online registration form, through to bulk-printing the deeds. All with zero manual input.",
    p3s1d: "Bot reads Excel, logs in, then bulk-downloads debtor documents.",
    p3s2d: "Fills the online fiduciary registration form automatically — including cascading address dropdowns.",
    p3s3d: "Prints hundreds of deed documents in one click — opens/closes files automatically, selects the pages to print &amp; sets paper size.",
    p3c1: "files / month", p3c1b: "2,000", p3c4: "12h → 3h",
    p3c2: "faster", p3c3b: "Hundreds", p3c3: "of documents auto-printed",
    p3i1: "Python bot — bulk debtor document download", p3i2: "Automated form input — cascading address dropdowns",
    p3i3: "Python bot printing hundreds of deed documents automatically — opens/closes files, selects pages &amp; paper size, in one click",

    s4title: "Core <em>skills</em>",
    s4lead: "A rare mix: understands finance &amp; tax, strong in operations, and can build the tools too.",
    sk1: "Automation &amp; Technology", skc1: "Process Automation", skc2: "Web Development",
    sk2: "Finance &amp; Tax", skc3: "Financial Reporting", skc4: "Cash Management", skc5: "Data Management",
    sk3: "HR, GA &amp; Executive Support", skc6: "Recruitment", skc7: "Attendance Management", skc8: "Procurement", skc9: "Scheduling &amp; Business Travel",

    s5title: "Certifications &amp; <em>awards</em>",
    s5lead: "Click a thumbnail to enlarge. Some numbers on the certificates are masked for privacy.",
    cert1t: "Accounting Training · 320 Hours", cert1b: "UPT PK Singosari — Disnakertrans East Java",
    cert2t: "Golden Typing · 61 WPM", cert2b: "Ratatype — 97.3% accuracy (English)",
    cert3t: "Data Operator Charter", cert3b: "KPU East Java Province — 2018 Gov. Election",
    cert4t: "Best Data Operator", cert4b: "KPU Malang Regency",
    cert5t: "Best Intern",

    s6title: "Education",
    edumeta: "B.Ed. Office Administration Education · 2013–2017",
    edudesc: "Management Department, Faculty of Economics. A strong foundation in administration, management, and organizational governance.",

    s7title: "Contact",
    ctitle: "Let's <em>work together</em>",
    cdesc: "Open to roles in operations, finance, executive support, or automation projects. Quick replies via WhatsApp &amp; email.",
    foot: "Built with ledger-grade precision."
  };

  var i18nEls = Array.prototype.slice.call(document.querySelectorAll("[data-i18n]"));
  i18nEls.forEach(function (el) { el.dataset._id = el.innerHTML; }); // capture ID default

  var htmlEl = document.documentElement;
  var langBtns = Array.prototype.slice.call(document.querySelectorAll(".lang [data-lang]"));

  function applyLang(lang) {
    var en = lang === "en";
    i18nEls.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.innerHTML = en ? (EN[key] != null ? EN[key] : el.dataset._id) : el.dataset._id;
    });
    htmlEl.setAttribute("lang", en ? "en" : "id");
    langBtns.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang)); });
    // reformat any already-rendered counters
    document.querySelectorAll(".count").forEach(function (c) {
      if (c.dataset._done) c.textContent = fmt(+c.getAttribute("data-count"), c.getAttribute("data-format"), lang);
    });
    currentLang = lang;
  }

  function fmt(n, format, lang) {
    if (format === "thousand") {
      return n.toLocaleString(lang === "en" ? "en-US" : "id-ID");
    }
    return String(n);
  }

  function getLangFromURL() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "id") return q;
    if (location.hash.replace("#", "") === "en") return "en";
    return "id";
  }

  var currentLang = getLangFromURL();
  applyLang(currentLang);

  langBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      applyLang(lang);
      var url = new URL(location.href);
      if (lang === "id") url.searchParams.delete("lang"); else url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
    });
  });

  /* ---------------- Nav stuck shadow --------------------------------------- */
  var nav = document.getElementById("nav");
  var onScroll = function () { nav.classList.toggle("is-stuck", window.scrollY > 8); };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------------- Reveal on scroll --------------------------------------- */
  var revealEls = document.querySelectorAll("[data-reveal],[data-reveal-stagger]");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  }

  /* ---------------- Count-up figures --------------------------------------- */
  var counters = document.querySelectorAll(".count");
  function runCount(el) {
    var target = +el.getAttribute("data-count");
    var format = el.getAttribute("data-format");
    if (reduceMotion) { el.textContent = fmt(target, format, currentLang); el.dataset._done = "1"; return; }
    var dur = 1300, start = null;
    function step(ts) {
      if (start === null) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(Math.round(target * eased), format, currentLang);
      if (p < 1) requestAnimationFrame(step); else el.dataset._done = "1";
    }
    requestAnimationFrame(step);
  }
  if (!("IntersectionObserver" in window)) {
    counters.forEach(runCount);
  } else {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting && !e.target.dataset._done) { runCount(e.target); cio.unobserve(e.target); }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---------------- Lightbox ---------------------------------------------- */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var lbCount = document.getElementById("lbCount");
  var group = [], gi = 0, lastFocus = null;

  function capOf(el) {
    var f = el.querySelector("figcaption");
    if (f) { var clone = f.cloneNode(true); var b = clone.querySelector(".cert__body"); return (b ? b : clone).textContent.trim().replace(/\s+/g, " "); }
    return el.getAttribute("aria-label") || "";
  }

  function buildGroup(el) {
    var container = el.closest("[data-gallery]") || el.closest(".certs");
    var items = container ? Array.prototype.slice.call(container.querySelectorAll("[data-full]")) : [el];
    return items;
  }

  function show(idx) {
    gi = (idx + group.length) % group.length;
    var el = group[gi];
    var full = el.getAttribute("data-full");
    var img = el.querySelector("img");
    lbImg.src = full;
    lbImg.alt = img ? img.alt : "";
    lbCap.textContent = capOf(el);
    lbCount.textContent = (gi + 1) + " / " + group.length;
    var multi = group.length > 1;
    document.getElementById("lbPrev").style.display = multi ? "" : "none";
    document.getElementById("lbNext").style.display = multi ? "" : "none";
  }

  function openLB(el) {
    group = buildGroup(el);
    lastFocus = document.activeElement;
    show(group.indexOf(el));
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("lbClose").focus();
  }
  function closeLB() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lbImg.src = "";
    if (lastFocus) lastFocus.focus();
  }

  document.querySelectorAll("[data-full]").forEach(function (el) {
    el.addEventListener("click", function () { openLB(el); });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLB(el); }
    });
  });
  document.getElementById("lbClose").addEventListener("click", closeLB);
  document.getElementById("lbPrev").addEventListener("click", function () { show(gi - 1); });
  document.getElementById("lbNext").addEventListener("click", function () { show(gi + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb || e.target.classList.contains("lb__stage")) closeLB(); });

  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLB();
    else if (e.key === "ArrowLeft") show(gi - 1);
    else if (e.key === "ArrowRight") show(gi + 1);
    else if (e.key === "Tab") { // focus trap
      var f = lb.querySelectorAll("button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ---------------- Preload lightbox neighbors ----------------------------- */
  lbImg.addEventListener("load", function () {
    if (group.length < 2) return;
    [gi + 1, gi - 1].forEach(function (n) {
      var el = group[(n + group.length) % group.length];
      var pre = new Image(); pre.src = el.getAttribute("data-full");
    });
  });
})();
