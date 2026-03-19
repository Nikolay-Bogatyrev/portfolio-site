/* ========================================================
   Portfolio Site — script.js
   ======================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------
     1. TRANSLATIONS
     ------------------------------------------------------- */
  const translations = {
    // Nav
    'nav-experience': { ru: 'Опыт', en: 'Experience' },
    'nav-achievements': { ru: 'Достижения', en: 'Achievements' },
    'nav-cases': { ru: 'Кейсы', en: 'Cases' },
    'nav-skills': { ru: 'Навыки', en: 'Skills' },
    'nav-contact': { ru: 'Контакты', en: 'Contact' },

    // Header
    'btn-download-cv': { ru: 'Скачать CV', en: 'Download CV' },

    // Hero
    'hero-title': { ru: 'Я создаю продукты,<br>которые приносят результат.', en: 'I build products<br>that deliver results.' },
    'hero-subtitle': { ru: 'Technical Product Manager — соединяю продуктовую стратегию и инженерную реализацию. 6+ лет в SaaS, Fintech и платформенных продуктах на рынке EMEA.', en: 'Technical Product Manager — bridging product strategy and engineering execution. 6+ years shipping SaaS, Fintech, and Platform products across EMEA.' },
    'btn-download': { ru: 'Скачать CV', en: 'Download CV' },
    'btn-contact': { ru: 'Связаться', en: 'Get in Touch' },

    // Metrics
    'metric-1': { ru: 'Sprint Efficiency', en: 'Sprint Efficiency' },
    'metric-2': { ru: 'Рост Throughput', en: 'Throughput Growth' },
    'metric-3': { ru: 'Макс. команда', en: 'Max Team Size' },
    'metric-4': { ru: 'On-Time Delivery', en: 'On-Time Delivery' },

    // Experience section
    'exp-title': { ru: 'Опыт работы', en: 'Experience' },
    'exp-subtitle': { ru: '6+ лет создания продуктов в SaaS, Fintech и платформенных компаниях', en: '6+ years building products across SaaS, Fintech, and Platform companies' },

    // Experience cards
    'exp-1-date': { ru: 'Авг 2025 — настоящее время', en: 'Aug 2025 — Present' },
    'exp-1-type': { ru: 'Полная занятость', en: 'Full-time' },
    'exp-1-role': { ru: 'Product Manager', en: 'Product Manager' },
    'exp-1-company': { ru: 'NDA — Gambling-платформа', en: 'Confidential — Gambling Platform' },
    'exp-1-desc': { ru: 'Веду продуктовую стратегию для платформы с миллионами пользователей. Полный цикл продукта: бонусные системы, платёжные интеграции, функции вовлечения. Команда 17+.', en: 'Leading product strategy for platform serving millions of users. End-to-end lifecycle for bonus systems, payment integrations, engagement features. Team of 17+.' },

    'exp-2-date': { ru: 'Ноя 2024 — Июнь 2025', en: 'Nov 2024 — Jun 2025' },
    'exp-2-type': { ru: 'Контракт', en: 'Contract' },
    'exp-2-role': { ru: 'Project Manager', en: 'Project Manager' },
    'exp-2-company': { ru: 'Star IT — Маркетплейс и Android POS', en: 'Star IT — Marketplace & Android POS' },
    'exp-2-desc': { ru: 'Запуск 0→1 POS (500+ устройств, 30+ городов). Delivery 50→80%. Голосовая AI-аналитика. Миграция Looker в облако, $50K/год экономии.', en: '0→1 POS launch (500+ devices, 30+ cities). Delivery 50→80%. Voice AI analytics. Looker cloud migration, zero downtime, $50K/yr savings.' },

    'exp-3-date': { ru: 'Окт 2023 — Июль 2024', en: 'Oct 2023 — Jul 2024' },
    'exp-3-type': { ru: 'Полная занятость', en: 'Full-time' },
    'exp-3-role': { ru: 'Project Manager', en: 'Project Manager' },
    'exp-3-company': { ru: 'Slotegrator — SaaS игровых интеграций', en: 'Slotegrator — SaaS Game Integrations' },
    'exp-3-desc': { ru: 'Команда 17 человек. On-time delivery 50→80%. Throughput ×3. Аналитический процесс с нуля. Онбординг: 3 мес → 1 мес.', en: 'Team of 17. On-time delivery 50→80%. Throughput ×3. Built analytics process from scratch. Onboarding: 3mo → 1mo.' },

    'exp-4-date': { ru: 'Апр 2022 — Окт 2023', en: 'Apr 2022 — Oct 2023' },
    'exp-4-type': { ru: 'Полная занятость', en: 'Full-time' },
    'exp-4-role': { ru: 'Project Manager', en: 'Project Manager' },
    'exp-4-company': { ru: 'NDA — Крипто-обменник', en: 'Confidential — Crypto Exchange Aggregator' },
    'exp-4-desc': { ru: 'Пивот B2C→B2B. 2 версии API + виджет для сторонних платформ. Миграция сервер→облако. Sprint efficiency 50→90%.', en: 'B2C→B2B pivot. 2 API versions + widget for third-party platforms. Server→cloud migration. Sprint efficiency 50→90%.' },

    'exp-5-date': { ru: '2018 — 2022', en: '2018 — 2022' },
    'exp-5-type': { ru: '~3.5 года', en: '~3.5 years' },
    'exp-5-role': { ru: 'PM → Senior Project Manager', en: 'PM → Senior Project Manager' },
    'exp-5-company': { ru: 'e-Legion · Heads and Hands · Лига А', en: 'e-Legion · Heads and Hands · Liga A' },
    'exp-5-desc': { ru: 'Tele2 (топ-3 телеком), приложения апарт-отелей, диджитал-продукты. Вырос до Senior PM, вёл A-tier проекты. Рентабельность 17%.', en: 'Tele2 (top-3 telecom), apart-hotel apps, digital products. Grew to Senior PM selling A-tier projects. 17% project profitability.' },

    'badge-current': { ru: 'СЕЙЧАС', en: 'CURRENT' },

    // Achievements
    'ach-title': { ru: 'Ключевые достижения', en: 'Key Achievements' },
    'ach-subtitle': { ru: 'Истории влияния в формате Ситуация → Задача → Действие → Результат', en: 'Impact stories in Situation → Task → Action → Result format' },

    'ach-1-title': { ru: 'Пивот продукта B2C → B2B', en: 'Product Pivot B2C → B2B' },
    'ach-1-s': { ru: 'Крипто-обменник для конечных пользователей не находил product-market fit', en: 'Crypto exchange aggregator serving end-users wasn\'t finding product-market fit' },
    'ach-1-t': { ru: 'Перевести продуктовую модель на B2B с white-label интеграциями', en: 'Pivot the product model to serve B2B clients with white-label integrations' },
    'ach-1-a': { ru: 'Разработал 2 версии API + встраиваемый виджет. Провёл миграцию сервер → облако', en: 'Led development of 2 API versions + embeddable widget. Managed full server → cloud migration' },
    'ach-1-r': { ru: 'Сторонние платформы интегрировали обмен. Sprint efficiency 50 → 90%', en: 'Third-party platforms integrated exchange. Sprint efficiency 50 → 90%' },

    'ach-2-title': { ru: 'Предсказуемость поставки ×3', en: 'Delivery Predictability ×3' },
    'ach-2-s': { ru: 'Команда 17 человек, только 50% задач в срок, 1 фича в месяц', en: 'Team of 17, only 50% tasks on time, 1 feature shipped per month' },
    'ach-2-t': { ru: 'Сделать поставку предсказуемой и увеличить throughput команды', en: 'Make delivery predictable and increase team throughput' },
    'ach-2-a': { ru: 'Ввёл итеративное планирование, построил аналитический процесс с нуля, спроектировал онбординг', en: 'Introduced iterative planning, built analytics process from scratch, designed onboarding program' },
    'ach-2-r': { ru: '80% on-time delivery, 3 фичи/мес, онбординг 3мес → 1мес', en: '80% on-time delivery, 3 features/month, onboarding 3mo → 1mo' },

    'ach-3-title': { ru: 'Запуск Android POS 0→1', en: '0→1 Android POS Launch' },
    'ach-3-s': { ru: 'Маркетплейсу нужно было омниканальное расширение, мобильного POS не было', en: 'Marketplace needed omnichannel expansion, no mobile POS solution existed' },
    'ach-3-t': { ru: 'Запустить Android POS от концепции до продакшена в 30+ городах', en: 'Launch Android POS from concept to production across 30+ cities' },
    'ach-3-a': { ru: 'Полное управление жизненным циклом, agile, кросс-командная координация', en: 'Full lifecycle management, agile implementation, cross-team coordination with support & dev' },
    'ach-3-r': { ru: '500+ устройств, 30+ городов, delivery 50 → 80%', en: '500+ devices live, 30+ cities, delivery improved 50 → 80%' },

    'ach-4-title': { ru: 'Победа на хакатоне: Образование', en: 'Hackathon Win: Education' },
    'ach-4-s': { ru: 'MoscowCityHack 2021, трек образование, 25 команд-соперников', en: 'MoscowCityHack 2021, education track, 25 competing teams' },
    'ach-4-t': { ru: 'Создать MVP-победитель с командой незнакомцев за 10 дней', en: 'Build a winning MVP with a team of complete strangers in 10 days' },
    'ach-4-a': { ru: 'Собрал команду без тех.бэкграунда, использовал только фасилитацию + MIRO', en: 'Assembled team with zero tech background, used only facilitation + MIRO for alignment' },
    'ach-4-r': { ru: '1-е место из 25 команд. От интервью до MVP за 10 дней', en: '1st place out of 25 teams. User interviews → working MVP in 10 days' },

    // Case Studies
    'cases-title': { ru: 'Кейсы', en: 'Case Studies' },
    'cases-subtitle': { ru: 'Реальные примеры продуктового влияния и решения проблем', en: 'Real examples of product impact and problem-solving' },

    'case-1-title': { ru: 'Рост эффективности команды в крипто-проекте', en: 'Team Efficiency Growth in Crypto Project' },
    'case-1-desc': { ru: 'Создал раздельные доски, внедрил процесс предварительной проработки задач. Эффективность команды достигла 80%.', en: 'Created separate boards, implemented pre-elaboration process. Team efficiency reached 80%.' },
    'case-1-stat-1-label': { ru: 'Выполнение задач', en: 'Task Completion' },
    'case-1-stat-2-label': { ru: 'Время на уточнения', en: 'Clarification Time' },

    'case-2-title': { ru: 'Фреймворк предсказуемости интеграций', en: 'Integration Predictability Framework' },
    'case-2-desc': { ru: 'Обнаружил, что интеграции следуют одному паттерну. Ввёл стандартный план MIRO для каждой новой интеграции.', en: 'Discovered integrations follow one pattern. Introduced standard MIRO plan for each new integration.' },
    'case-2-stat-1-label': { ru: 'On-Time Delivery', en: 'On-Time Delivery' },
    'case-2-stat-2-label': { ru: 'Время планирования', en: 'Planning Time' },

    'case-3-title': { ru: 'AI-ассистент для аналитики данных', en: 'AI Assistant for Data Analytics' },
    'case-3-desc': { ru: 'Нашёл open-source решение, назначил Junior+ разработчика, который самостоятельно развернул Looker AI сервис.', en: 'Found open-source structure, assigned Junior+ developer who independently deployed the Looker AI service.' },
    'case-3-stat-1-label': { ru: 'Часов Senior\'ов', en: 'Senior Hours Needed' },

    // Skills
    'skills-title': { ru: 'Навыки и инструменты', en: 'Skills & Tools' },
    'skills-product': { ru: 'Продукт', en: 'Product' },
    'skills-technical': { ru: 'Технические', en: 'Technical' },
    'skills-domains': { ru: 'Домены', en: 'Domains' },
    'skills-ai': { ru: 'AI и Vibe Coding', en: 'AI & Vibe Coding' },
    'skill-claude-code': { ru: 'Claude Code', en: 'Claude Code' },
    'skill-cursor': { ru: 'Cursor', en: 'Cursor' },
    'skill-vibe-coding': { ru: '0→1 Vibe Coding', en: '0→1 Vibe Coding' },
    'skill-ai-tools': { ru: 'AI-инструменты', en: 'AI Tools' },
    'skills-ai-note': { ru: 'Использую AI-инструменты на всех этапах продуктового цикла — от исследований и прототипирования до деплоя. Могу обучить команду AI-воркфлоу.', en: 'I use AI tools across the full product lifecycle — from research and prototyping to deployment. Can train teams to adopt AI workflows.' },

    // Vibe-Coded MVPs
    'mvps-title': { ru: 'Vibe-Coded MVP', en: 'Vibe-Coded MVPs' },
    'mvps-subtitle': { ru: 'Продукты, которые я создал как Product Manager используя AI-разработку (Claude Code, Cursor)', en: 'Products I built as Product Manager using AI-assisted development (Claude Code, Cursor)' },
    'mvp-1-title': { ru: 'SaveSM — LinkedIn Copilot', en: 'SaveSM — LinkedIn Copilot' },
    'mvp-1-desc': { ru: 'Геймифицированный контент-планер для TPM/PM. Превращает рабочие достижения в посты LinkedIn через JTBD-фреймворк. Голосовой ввод, Telegram Mini App, синхронизация с GitHub.', en: 'Gamified content planning tool for TPM/PM. Turns work achievements into LinkedIn posts via JTBD framework. Voice input, Telegram Mini App, GitHub sync.' },
    'mvp-2-title': { ru: 'BoardGame Copilot', en: 'BoardGame Copilot' },
    'mvp-2-desc': { ru: 'AI-ассистент для настольных игр на iPad. Отвечает на вопросы по правилам с цитатами и номерами страниц за 10 секунд. RAG, тёмная тема, офлайн.', en: 'AI assistant for board games on iPad. Answers rules questions with citations and page references in under 10 seconds. RAG-based, dark theme, offline-ready.' },
    'mvp-3-title': { ru: 'MovePlan', en: 'MovePlan' },
    'mvp-3-desc': { ru: 'Совместный планировщик переезда. Планы этажей с drag-and-drop, библиотека объектов через GitHub Projects, бюджет. PWA + Telegram-бот.', en: 'Collaborative moving planner. Floor plans with drag-and-drop furniture, object library synced with GitHub Projects, budget tracking. PWA + Telegram bot.' },
    'mvp-view': { ru: 'Открыть проект', en: 'View project' },

    // Contact
    'contact-title': { ru: 'Давайте создадим что-то вместе.', en: 'Let\'s build something together.' },
    'contact-subtitle': { ru: 'Открыт для позиций Technical Product Manager и Product Manager в SaaS и EdTech.', en: 'Open to Technical Product Manager and Product Manager roles in SaaS and EdTech.' },

    // Footer
    'footer-copy': { ru: '\u00A9 2025 Николай Богатырев', en: '\u00A9 2025 Nikolai Bogatyrev' },
  };

  /* -------------------------------------------------------
     2. SMOOTH SCROLLING
     ------------------------------------------------------- */
  function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (!href || href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* -------------------------------------------------------
     3. ACTIVE NAV HIGHLIGHTING ON SCROLL
     ------------------------------------------------------- */
  function initActiveNav() {
    function update() {
      var current = '';
      var sections = document.querySelectorAll('section[id]');

      sections.forEach(function (section) {
        var top = section.offsetTop;
        if (window.scrollY >= top - 120) {
          current = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.nav-menu a').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }

    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* -------------------------------------------------------
     4. INTERSECTION OBSERVER — FADE-IN ANIMATIONS
     ------------------------------------------------------- */
  function initScrollAnimations() {
    var observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    };

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    var selectors = '.exp-card, .achievement-card, .case-card, .skill-column, .mvp-card';
    document.querySelectorAll(selectors).forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  /* -------------------------------------------------------
     5. MOBILE MENU
     ------------------------------------------------------- */
  function initMobileMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navMenu = document.querySelector('.nav-menu');
    if (!hamburger || !navMenu) return;

    function closeMenu() {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    }

    function openMenu() {
      hamburger.classList.add('active');
      navMenu.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    // Toggle on hamburger click
    hamburger.addEventListener('click', function () {
      if (navMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
          closeMenu();
        }
      }
    });

    // Close on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  /* -------------------------------------------------------
     6. HEADER HIDE / SHOW ON SCROLL
     ------------------------------------------------------- */
  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;

    var lastScroll = 0;
    header.style.transition = 'transform 0.3s ease';

    window.addEventListener('scroll', function () {
      var currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  /* -------------------------------------------------------
     7. LANGUAGE SWITCHER
     ------------------------------------------------------- */
  class LanguageSwitcher {
    constructor() {
      this.currentLang = this._detectLanguage();
      this._bindButtons();
      this._bindKeyboardShortcut();
      this.setLanguage(this.currentLang, false);
    }

    /* Detect: localStorage → browser language → default "en" */
    _detectLanguage() {
      var saved = localStorage.getItem('portfolio-lang');
      if (saved === 'ru' || saved === 'en') return saved;

      var browser = navigator.language || navigator.userLanguage || '';
      return browser.startsWith('ru') ? 'ru' : 'en';
    }

    /* Bind click handlers to .lang-btn elements */
    _bindButtons() {
      var self = this;
      document.querySelectorAll('.lang-btn').forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          e.stopPropagation();
          var lang = btn.getAttribute('data-lang');
          if (lang) self.setLanguage(lang, true);
        });
      });
    }

    /* Alt+L toggles language */
    _bindKeyboardShortcut() {
      var self = this;
      document.addEventListener('keydown', function (e) {
        if (e.altKey && e.key.toLowerCase() === 'l') {
          e.preventDefault();
          self.setLanguage(self.currentLang === 'ru' ? 'en' : 'ru', true);
        }
      });
    }

    /* Apply language to the page */
    setLanguage(lang, animate) {
      this.currentLang = lang;
      localStorage.setItem('portfolio-lang', lang);
      document.documentElement.setAttribute('lang', lang);

      // Update active button state
      document.querySelectorAll('.lang-btn').forEach(function (btn) {
        if (btn.getAttribute('data-lang') === lang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

      // Translate all data-lang-key elements
      document.querySelectorAll('[data-lang-key]').forEach(function (el) {
        var key = el.getAttribute('data-lang-key');
        if (!translations[key] || !translations[key][lang]) return;

        var newContent = translations[key][lang];

        if (animate) {
          el.style.transition = 'opacity 0.15s ease';
          el.style.opacity = '0';

          setTimeout(function () {
            el.innerHTML = newContent;
            el.style.opacity = '1';

            // Re-create Lucide icons inside the updated element
            if (typeof lucide !== 'undefined') {
              lucide.createIcons({ nodes: [el] });
            }
          }, 150);
        } else {
          el.innerHTML = newContent;
        }
      });

      // Switch CV download links based on language
      var cvFile = lang === 'ru' ? 'docs/Nikolai_Bogatyrev_CV_RU.pdf' : 'docs/Nikolai_Bogatyrev_CV_EN.pdf';
      document.querySelectorAll('a[download][href*="CV_"]').forEach(function (a) {
        a.setAttribute('href', cvFile);
      });

      // After all translations applied (with or without animation),
      // re-initialize Lucide icons globally to catch any that were
      // outside data-lang-key elements but still need rendering.
      if (animate) {
        setTimeout(function () {
          if (typeof lucide !== 'undefined') {
            lucide.createIcons();
          }
        }, 200);
      }
    }
  }

  /* -------------------------------------------------------
     8. BOOT
     ------------------------------------------------------- */
  function boot() {
    initSmoothScrolling();
    initActiveNav();
    initScrollAnimations();
    initMobileMenu();
    initHeaderScroll();

    // Language switcher (must run after DOM is ready)
    new LanguageSwitcher();

    // Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
