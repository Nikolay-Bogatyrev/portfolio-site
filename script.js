// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.timeline-item, .article-card, .repo-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Mobile menu toggle
const initMobileMenu = () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!hamburger || !navMenu) return;
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
    });
    
    // Handle window resize
    const handleResize = () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    };
    
    window.addEventListener('resize', handleResize);
};

// Initialize mobile menu
initMobileMenu();

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

header.style.transition = 'transform 0.3s ease';

// ===== LANGUAGE SWITCHER =====
const translations = {
    "nav-about": {
        ru: "О себе",
        en: "About"
    },
    "nav-experience": {
        ru: "Опыт",
        en: "Experience"
    },
    "nav-case-studies": {
        ru: "Case Studies",
        en: "Case Studies"
    },
    "nav-projects": {
        ru: "Проекты",
        en: "Projects"
    },
    "nav-contact": {
        ru: "Контакты",
        en: "Contact"
    },
    "hero-title": {
        ru: "Привет, я <span class=\"highlight\">Николай Богатырев</span>",
        en: "Hi, I'm <span class=\"highlight\">Nikolay Bogatyrev</span>"
    },
    "hero-subtitle": {
        ru: "Product Manager/Ai entrepreneur",
        en: "Product Manager/AI entrepreneur"
    },
    "stat-experience": {
        ru: "лет опыта",
        en: "years experience"
    },
    "stat-team": {
        ru: "макс. размер команды",
        en: "max team size"
    },
    "stat-efficiency": {
        ru: "рост эффективности",
        en: "efficiency growth"
    },
    "btn-download": {
        ru: "Скачать CV (PDF)",
        en: "Download CV (PDF)"
    },
    "btn-contact": {
        ru: "Связаться",
        en: "Contact me"
    },
    "about-title": {
        ru: "О себе",
        en: "About Me"
    },
    "experience-title": {
        ru: "Опыт работы",
        en: "Work Experience"
    },
    "case-studies-title": {
        ru: "📚 Кейсы",
        en: "📚 Case Studies"
    },
    "case-studies-subtitle": {
        ru: "Реальные примеры влияния продуктов и решения проблем",
        en: "Real examples of product impact and problem-solving"
    },
    "projects-title": {
        ru: "Pet Projects",
        en: "Pet Projects"
    },
    "contact-title": {
        ru: "Контакты",
        en: "Contact"
    },
    "contact-description": {
        ru: "Свяжитесь со мной через социальные сети или отправьте email",
        en: "Contact me through social networks or send an email"
    },
    "about-intro-1": {
        ru: "Product Manager с 6+ годами опыта в Gambling, Fintech и SaaS.",
        en: "Product Manager with 6+ years of experience in Gambling, Fintech, and SaaS."
    },
    "about-intro-2": {
        ru: "Строю продуктовую стратегию, управляю кроссфункциональными командами до 17 человек, запускаю продукты с нуля и оптимизирую существующие.",
        en: "Building product strategy, managing cross-functional teams up to 17 people, launching products from scratch and optimizing existing ones."
    },
    "about-results-title": {
        ru: "Результаты",
        en: "Results"
    },
    "about-result-1": {
        ru: "60-90% эффективность команд",
        en: "60-90% team efficiency"
    },
    "about-result-2": {
        ru: "80-90% доставка в срок",
        en: "80-90% on-time delivery"
    },
    "about-result-3": {
        ru: "Сокращение time-to-market на 70%+",
        en: "Time-to-market reduction by 70%+"
    },
    "about-tools-title": {
        ru: "Инструменты",
        en: "Tools"
    },
    "about-tool-1": {
        ru: "Roadmap Development, Agile/Scrum",
        en: "Roadmap Development, Agile/Scrum"
    },
    "about-tool-2": {
        ru: "SQL/Redshift/Looker/DBT",
        en: "SQL/Redshift/Looker/DBT"
    },
    "about-tool-3": {
        ru: "Payment Systems, Market Research",
        en: "Payment Systems, Market Research"
    },
    "btn-expand": {
        ru: "Подробнее",
        en: "Details"
    },
    "btn-collapse": {
        ru: "Свернуть",
        en: "Collapse"
    },
    "case-challenge": {
        ru: "Challenge",
        en: "Challenge"
    },
    "case-solution": {
        ru: "Solution",
        en: "Solution"
    },
    "case-result": {
        ru: "Result",
        en: "Result"
    },
    "case-1-title": {
        ru: "От нуля до PM: Первые шаги в карьере",
        en: "From Zero to PM: First Steps in Career"
    },
    "case-1-stat-1": {
        ru: "Хакатонов",
        en: "Hackathons"
    },
    "case-1-stat-2": {
        ru: "Первая работа",
        en: "First job"
    },
    "case-1-stat-3": {
        ru: "До первого оффера",
        en: "To first offer"
    },
    "case-1-challenge": {
        ru: "Прошел обучение по монетизации продукта, но не брали на позицию Product Manager из-за отсутствия практического опыта. Нужно было быстро набрать реальный опыт и доказать способность управлять продуктом.",
        en: "Completed product monetization training, but wasn't hired for Product Manager position due to lack of practical experience. Needed to quickly gain real experience and prove ability to manage a product."
    },
    "case-1-solution-1": {
        ru: "Участвовал в 5 хакатонах — собирал команды, описывал идею продукта, доводил до результата",
        en: "Participated in 5 hackathons — assembled teams, described product idea, brought it to fruition"
    },
    "case-1-solution-2": {
        ru: "Быстро анализировал ошибки и извлекал уроки из каждого опыта",
        en: "Quickly analyzed mistakes and learned lessons from each experience"
    },
    "case-1-solution-3": {
        ru: "Фокусировался на практических навыках: управление командой, описание требований, приоритизация",
        en: "Focused on practical skills: team management, requirements description, prioritization"
    },
    "case-1-result": {
        ru: "Несмотря на отсутствие побед, быстро собрал практический опыт и получил первую работу в качестве менеджера проектов. Опыт хакатонов стал фундаментом для дальнейшего роста в PM.",
        en: "Despite no wins, quickly gained practical experience and got the first job as a project manager. Hackathon experience became the foundation for further growth in PM."
    },
    "case-2-title": {
        ru: "Доставка проекта в новогодние праздники",
        en: "Project Delivery During New Year Holidays"
    },
    "case-2-stat-1": {
        ru: "Разработчика",
        en: "Developers"
    },
    "case-2-stat-2": {
        ru: "Идеальная доставка",
        en: "Perfect delivery"
    },
    "case-2-stat-3": {
        ru: "Новый контракт",
        en: "New contract"
    },
    "case-2-challenge": {
        ru: "Первое рабочее место — крупный проект на сложную верстку. Сроки совпали с новогодними праздниками, когда большинство команды в отпуске. Минимальный состав команды — всего 2 разработчика.",
        en: "First job — a large project with complex layout. Deadlines coincided with New Year holidays when most of the team was on vacation. Minimal team composition — only 2 developers."
    },
    "case-2-solution-1": {
        ru: "Оптимизировал процесс работы с учетом ограниченных ресурсов",
        en: "Optimized work process considering limited resources"
    },
    "case-2-solution-2": {
        ru: "Организовал эффективную коммуникацию между разработчиками",
        en: "Organized effective communication between developers"
    },
    "case-2-solution-3": {
        ru: "Приоритизировал задачи для максимальной эффективности",
        en: "Prioritized tasks for maximum efficiency"
    },
    "case-2-solution-4": {
        ru: "Обеспечил качественную доставку проекта в срок",
        en: "Ensured quality project delivery on time"
    },
    "case-2-result": {
        ru: "Проект успешно доставлен в срок. Клиент вернулся с новым большим контрактом, что подтвердило качество работы и надежность команды.",
        en: "Project successfully delivered on time. Client returned with a new large contract, confirming the quality of work and team reliability."
    },
    "case-3-title": {
        ru: "Рост эффективности команды в криптопроекте",
        en: "Team Efficiency Growth in Crypto Project"
    },
    "case-3-stat-1": {
        ru: "Эффективность",
        en: "Efficiency"
    },
    "case-3-stat-2": {
        ru: "Доски",
        en: "Boards"
    },
    "case-3-stat-3": {
        ru: "Время на уточнения",
        en: "Clarification time"
    },
    "case-3-challenge": {
        ru: "В криптопроекте не было четкости в процессах. Продукт заводил свои задачи на общую доску разработки, что создавало путаницу и снижало эффективность команды. Задачи приходили в разработку непродуманными и плохо описанными.",
        en: "In the crypto project, there was no clarity in processes. Product manager created tasks on a shared development board, which caused confusion and reduced team efficiency. Tasks came into development ill-conceived and poorly described."
    },
    "case-3-solution-1": {
        ru: "Создал отдельную доску для менеджера продукта",
        en: "Created a separate board for product manager"
    },
    "case-3-solution-2": {
        ru: "На доске разработки оставил только задачи, которые точно надо делать",
        en: "Left only tasks that definitely needed to be done on the development board"
    },
    "case-3-solution-3": {
        ru: "Внедрил процесс предварительной проработки задач перед передачей в разработку",
        en: "Implemented a process for preliminary task elaboration before handing over to development"
    },
    "case-3-solution-4": {
        ru: "Обеспечил четкое описание требований и контекста для каждой задачи",
        en: "Ensured clear description of requirements and context for each task"
    },
    "case-3-result": {
        ru: "Эффективность команды увеличилась — закрывали до 80% задач. Задачи приходили в разработку продуманными и описанными, что сократило время на уточнения и переделки.",
        en: "Team efficiency increased — up to 80% of tasks were completed. Tasks came into development well-thought-out and described, reducing time for clarifications and rework."
    },
    "case-4-title": {
        ru: "Фреймворк предсказуемости интеграций",
        en: "Integration Predictability Framework"
    },
    "case-4-stat-1": {
        ru: "Попадание в срок",
        en: "On-time delivery"
    },
    "case-4-stat-2": {
        ru: "Стандартный план",
        en: "Standard plan"
    },
    "case-4-stat-3": {
        ru: "Время планирования",
        en: "Planning time"
    },
    "case-4-challenge": {
        ru: "Работа с гемблинг платформой. Прогнозирование интеграций было слабым — половина выходила за рамки сроков. Не было единого подхода к планированию, что приводило к непредсказуемым задержкам и переработкам.",
        en: "Working with a gambling platform. Integration forecasting was weak — half exceeded deadlines. There was no unified approach to planning, leading to unpredictable delays and rework."
    },
    "case-4-solution-1": {
        ru: "Выяснил, что интеграции подчиняются одному шаблону",
        en: "Found that integrations follow one pattern"
    },
    "case-4-solution-2": {
        ru: "Ввел новый процесс планирования: с новой интеграцией открывали стандартный план в MIRO",
        en: "Introduced new planning process: with each new integration, opened a standard plan in MIRO"
    },
    "case-4-solution-3": {
        ru: "Фиксировали требования и риски на раннем этапе",
        en: "Fixed requirements and risks at an early stage"
    },
    "case-4-solution-4": {
        ru: "Формировали список вопросов для технического аккаунт-менеджера клиента заранее",
        en: "Formed a list of questions for client's technical account manager in advance"
    },
    "case-4-result": {
        ru: "Попадание в срок улучшилось до 80%. Стандартизация процесса позволила предсказывать риски и сроки, сократила время на планирование и улучшила качество интеграций.",
        en: "On-time delivery improved to 80%. Process standardization allowed predicting risks and deadlines, reduced planning time and improved integration quality."
    },
    "case-5-title": {
        ru: "Система отслеживания обращений клиента",
        en: "Client Request Tracking System"
    },
    "case-5-stat-1": {
        ru: "Confluence страница",
        en: "Confluence page"
    },
    "case-5-stat-2": {
        ru: "Поиск тикетов",
        en: "Ticket search"
    },
    "case-5-stat-3": {
        ru: "Потерянных тикетов",
        en: "Lost tickets"
    },
    "case-5-challenge": {
        ru: "Работа с support командой с крупным клиентом в Америке (сайт с товарами). Support и Dev команды были разными. Когда клиент жаловался, Support не мог быстро найти тикет или список обращений. Проблема: клиент мог иметь несколько имен для компаний, но ссылка на бекенде одинаковая.",
        en: "Working with support team for a large client in America (e-commerce site). Support and Dev teams were separate. When client complained, Support couldn't quickly find the ticket or list of requests. Problem: client could have multiple company names, but backend link was the same."
    },
    "case-5-solution-1": {
        ru: "Настроил JIRA — из адреса на бекенде вытаскивать ID",
        en: "Configured JIRA — extract ID from backend address"
    },
    "case-5-solution-2": {
        ru: "По этому ID настроил фильтр для быстрого поиска всех тикетов клиента",
        en: "Set up a filter by this ID for quick search of all client tickets"
    },
    "case-5-solution-3": {
        ru: "Сделал Confluence страницу — по ссылке клиента можно посмотреть все тикеты",
        en: "Created Confluence page — by client link you can view all tickets"
    },
    "case-5-solution-4": {
        ru: "Добавил возможность поставить тикет на разработку и отследить статус",
        en: "Added ability to assign ticket to development and track status"
    },
    "case-5-result": {
        ru: "Support команда получила возможность быстро находить все обращения клиента, независимо от названия компании. Прозрачность процесса улучшила коммуникацию между Support и Dev командами, сократила время на поиск информации.",
        en: "Support team gained ability to quickly find all client requests, regardless of company name. Process transparency improved communication between Support and Dev teams, reduced time for information search."
    },
    "case-6-title": {
        ru: "Автоматизация онбординга клиентов",
        en: "Client Onboarding Automation"
    },
    "case-6-stat-1": {
        ru: "Время онбординга",
        en: "Onboarding time"
    },
    "case-6-stat-2": {
        ru: "Время разработчика",
        en: "Developer time"
    },
    "case-6-stat-3": {
        ru: "Сокращение ошибок",
        en: "Error reduction"
    },
    "case-6-challenge": {
        ru: "При добавлении нового клиента возникали проблемы с данными. Разные POS — разные варианты представления информации о товарах. Support тратил время на перевод данных вручную, допускал ошибки. Разработчику приходилось тратить время на уточнения. Добавление клиента растягивалось до 4 дней.",
        en: "When adding a new client, data problems arose. Different POS systems — different ways of representing product information. Support spent time manually converting data, made errors. Developer had to spend time on clarifications. Client addition stretched to 4 days."
    },
    "case-6-solution-1": {
        ru: "Создал на основе Python систему переработки данных в нужный формат",
        en: "Created Python-based system for converting data to required format"
    },
    "case-6-solution-2": {
        ru: "Автоматизировал процесс конвертации данных из разных форматов POS",
        en: "Automated data conversion process from different POS formats"
    },
    "case-6-solution-3": {
        ru: "Добавил возможность для Support самостоятельно загружать данные через систему",
        en: "Added ability for Support to independently upload data through the system"
    },
    "case-6-solution-4": {
        ru: "Внедрил валидацию данных для предотвращения ошибок",
        en: "Implemented data validation to prevent errors"
    },
    "case-6-result": {
        ru: "Сократил ручную работу с 2-4 дней до 1-2 часов. Сократил время работы разработчика с 8 часов до 30 минут при ошибках с дублированием. Система автоматически обрабатывает данные и предотвращает большинство ошибок.",
        en: "Reduced manual work from 2-4 days to 1-2 hours. Reduced developer time from 8 hours to 30 minutes for duplication errors. System automatically processes data and prevents most errors."
    },
    "case-7-title": {
        ru: "AI-ассистент для аналитики данных",
        en: "AI Assistant for Data Analytics"
    },
    "case-7-stat-1": {
        ru: "Junior+ разработчик",
        en: "Junior+ developer"
    },
    "case-7-stat-2": {
        ru: "Senior времени",
        en: "Senior time"
    },
    "case-7-stat-3": {
        ru: "Нагрузка на лида",
        en: "Lead workload"
    },
    "case-7-challenge": {
        ru: "У клиентов была система работы с данными на основе Looker. Когда ушел аналитик данных, самостоятельно научился настраивать отчеты. У CEO возникла идея использовать AI помощника для Looker. Оказалось, что готовое решение не подходит для архитектуры. Нужно было найти open-source структуру и развернуть сервис без нагрузки на лида frontend разработки.",
        en: "Clients had a data system based on Looker. When data analyst left, learned to configure reports independently. CEO had an idea to use AI assistant for Looker. Turned out that ready solution didn't fit the architecture. Needed to find open-source structure and deploy service without loading frontend lead."
    },
    "case-7-solution-1": {
        ru: "Нашли готовую open-source структуру, подходящую для архитектуры",
        en: "Found ready open-source structure suitable for architecture"
    },
    "case-7-solution-2": {
        ru: "Убедил CEO, что не нужно ставить лида frontend разработки (у него нагруженная работа)",
        en: "Convinced CEO that frontend lead wasn't needed (he had heavy workload)"
    },
    "case-7-solution-3": {
        ru: "Поставили разработчика уровня Junior+",
        en: "Assigned Junior+ level developer"
    },
    "case-7-solution-4": {
        ru: "Организовал процесс так, чтобы frontend разработчик самостоятельно развернул сервис",
        en: "Organized process so frontend developer independently deployed the service"
    },
    "case-7-result": {
        ru: "Frontend разработчик самостоятельно развернул сервис. Лид frontend не был загружен дополнительной работой. AI-ассистент успешно интегрирован в систему аналитики, улучшив работу с данными для клиентов.",
        en: "Frontend developer independently deployed the service. Frontend lead wasn't loaded with additional work. AI assistant successfully integrated into analytics system, improving data work for clients."
    },
    "project-1-desc": {
        ru: "Современный адаптивный сайт-портфолио для размещения на GitHub Pages с поддержкой видео-визитки, опыта работы, статей и проектов.",
        en: "Modern responsive portfolio website for GitHub Pages with video introduction, work experience, articles and projects support."
    },
    "project-2-desc": {
        ru: "Статическая версия шаблона карточек Zettelkasten для публикации на GitHub Pages. Шаблон для печати карточек Zettelkasten - системы организации знаний с использованием карточек-заметок. Оптимизирован для печати на формате A4.",
        en: "Static version of Zettelkasten cards template for GitHub Pages publication. Template for printing Zettelkasten cards - knowledge organization system using note cards. Optimized for A4 format printing."
    },
    "btn-view-github": {
        ru: "Смотреть на GitHub",
        en: "View on GitHub"
    },
    "btn-demo": {
        ru: "Демо",
        en: "Demo"
    },
    "btn-all-projects": {
        ru: "Все проекты на GitHub",
        en: "All projects on GitHub"
    },
    "footer-name": {
        ru: "Николай Богатырев",
        en: "Nikolay Bogatyrev"
    },
    "footer-rights": {
        ru: "Все права защищены",
        en: "All rights reserved"
    }
};

// Language Switcher Class
class LanguageSwitcher {
    constructor() {
        this.currentLang = this.getInitialLanguage();
        this.init();
    }

    getInitialLanguage() {
        // Check localStorage first
        const savedLang = localStorage.getItem('portfolio-lang');
        if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
            return savedLang;
        }

        // Auto-detect browser language
        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('ru')) {
            return 'ru';
        }
        return 'en'; // Default to English
    }

    init() {
        // Wait a bit to ensure DOM is fully ready
        setTimeout(() => {
            // Add event listeners to language buttons FIRST
            const langButtons = document.querySelectorAll('.lang-btn');
            console.log('Initializing language switcher. Found buttons:', langButtons.length);
            
            if (langButtons.length === 0) {
                console.error('Language switcher buttons not found!');
                return;
            }

            langButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const lang = btn.getAttribute('data-lang');
                    console.log('Language button clicked:', lang);
                    if (lang) {
                        this.setLanguage(lang, true);
                    }
                });
            });

            // Set initial language AFTER event listeners are attached
            this.setLanguage(this.currentLang, false);
        }, 100);

        // Keyboard shortcut: Alt+L
        document.addEventListener('keydown', (e) => {
            if (e.altKey && e.key.toLowerCase() === 'l') {
                e.preventDefault();
                const newLang = this.currentLang === 'ru' ? 'en' : 'ru';
                this.setLanguage(newLang, true);
            }
        });
    }

    setLanguage(lang, animate = true) {
        console.log('Setting language to:', lang);
        this.currentLang = lang;
        localStorage.setItem('portfolio-lang', lang);

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Update active button
        const langButtons = document.querySelectorAll('.lang-btn');
        console.log('Found language buttons:', langButtons.length);
        langButtons.forEach(btn => {
            const btnLang = btn.getAttribute('data-lang');
            if (btnLang === lang) {
                btn.classList.add('active');
                console.log('Activated button:', btnLang);
            } else {
                btn.classList.remove('active');
            }
        });

        // Update all translatable elements
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[key] && translations[key][lang]) {
                if (animate) {
                    // Fade animation
                    element.style.transition = 'opacity 0.3s ease';
                    element.style.opacity = '0';
                    
                    setTimeout(() => {
                        element.innerHTML = translations[key][lang];
                        element.style.opacity = '1';
                    }, 150);
                } else {
                    element.innerHTML = translations[key][lang];
                }
            }
        });

        // Handle content with data-lang attribute (for case studies)
        // Exclude language switcher buttons
        document.querySelectorAll('[data-lang]:not(.lang-btn)').forEach(element => {
            if (element.getAttribute('data-lang') === lang) {
                if (animate) {
                    element.style.transition = 'opacity 0.3s ease';
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.style.display = '';
                        element.style.opacity = '1';
                    }, 150);
                } else {
                    element.style.display = '';
                    element.style.opacity = '1';
                }
            } else {
                if (animate) {
                    element.style.opacity = '0';
                    setTimeout(() => {
                        element.style.display = 'none';
                    }, 150);
                } else {
                    element.style.display = 'none';
                }
            }
        });
    }
}

// Initialize language switcher when DOM is ready
const initLanguageSwitcher = () => {
    const langSwitcher = new LanguageSwitcher();
    console.log('Language switcher initialized. Current language:', langSwitcher.currentLang);
    return langSwitcher;
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguageSwitcher);
} else {
    initLanguageSwitcher();
}

// Cases Carousel and Expand Functionality
const initCasesCarousel = () => {
    const carousel = document.getElementById('casesCarousel');
    const prevBtn = document.querySelector('.carousel-btn-prev');
    const nextBtn = document.querySelector('.carousel-btn-next');
    const expandButtons = document.querySelectorAll('.case-expand-btn');
    
    if (!carousel) return;
    
    // Carousel navigation
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: -940, behavior: 'smooth' });
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            carousel.scrollBy({ left: 940, behavior: 'smooth' });
        });
    }
    
    // Expand/Collapse functionality
    expandButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const caseId = btn.getAttribute('data-case');
            const content = document.getElementById(`case-${caseId}`);
            const isActive = btn.classList.contains('active');
            
            if (isActive) {
                btn.classList.remove('active');
                content.classList.remove('active');
                const expandText = btn.querySelector('.expand-text');
                if (expandText) {
                    expandText.setAttribute('data-lang-key', 'btn-expand');
                    // Update text immediately using current language
                    const currentLang = document.documentElement.getAttribute('lang') || 'ru';
                    if (translations['btn-expand']) {
                        expandText.textContent = translations['btn-expand'][currentLang];
                    }
                }
            } else {
                // Close all other expanded cases
                expandButtons.forEach(otherBtn => {
                    if (otherBtn !== btn) {
                        otherBtn.classList.remove('active');
                        const otherCaseId = otherBtn.getAttribute('data-case');
                        const otherContent = document.getElementById(`case-${otherCaseId}`);
                        if (otherContent) {
                            otherContent.classList.remove('active');
                            const otherExpandText = otherBtn.querySelector('.expand-text');
                            if (otherExpandText) {
                                otherExpandText.setAttribute('data-lang-key', 'btn-expand');
                                const currentLang = document.documentElement.getAttribute('lang') || 'ru';
                                if (translations['btn-expand']) {
                                    otherExpandText.textContent = translations['btn-expand'][currentLang];
                                }
                            }
                        }
                    }
                });
                
                btn.classList.add('active');
                content.classList.add('active');
                const expandText = btn.querySelector('.expand-text');
                if (expandText) {
                    expandText.setAttribute('data-lang-key', 'btn-collapse');
                    // Update text immediately using current language
                    const currentLang = document.documentElement.getAttribute('lang') || 'ru';
                    if (translations['btn-collapse']) {
                        expandText.textContent = translations['btn-collapse'][currentLang];
                    }
                }
                
                // Scroll to expanded case
                setTimeout(() => {
                    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            }
        });
    });
    
    // Hide/show navigation buttons based on scroll position
    const updateNavButtons = () => {
        if (prevBtn && nextBtn) {
            const isAtStart = carousel.scrollLeft <= 10;
            const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;
            
            prevBtn.style.opacity = isAtStart ? '0.3' : '1';
            prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
            
            nextBtn.style.opacity = isAtEnd ? '0.3' : '1';
            nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
        }
    };
    
    carousel.addEventListener('scroll', updateNavButtons);
    updateNavButtons();
};

// Initialize cases carousel
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCasesCarousel);
} else {
    initCasesCarousel();
}

console.log('Portfolio site loaded successfully! 🚀');
