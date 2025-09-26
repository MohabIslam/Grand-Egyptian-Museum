

const state = {
    currentLang: 'en',
    currentPage: 'home',
};

const elements = {
    appContent: document.getElementById('app-content'),
    navLinks: document.querySelectorAll('.nav-link'),
    body: document.body,
    pageTitle: document.getElementById('page-title'),
    languageButtons: document.querySelectorAll('.lang-btn'),
};

function switchLanguage(lang) {
    if (!content[lang]) return console.error('Language not supported.');

    state.currentLang = lang;
    elements.body.setAttribute('lang', lang);
    elements.pageTitle.textContent = content[lang].title;

    // Update navigation links
    elements.navLinks.forEach(link => {
        const pageKey = link.getAttribute('data-page');
        if (content[lang].nav[pageKey]) {
            link.textContent = content[lang].nav[pageKey];
        }
    });

    // Update language buttons
    elements.languageButtons.forEach(btn => {
        btn.classList.toggle('font-semibold', btn.getAttribute('data-lang') === lang);
        btn.classList.toggle('text-accent-gold', btn.getAttribute('data-lang') === lang);
        btn.classList.toggle('text-subtle-gray', btn.getAttribute('data-lang') !== lang);
    });

    renderPage(state.currentPage, true);
}

function getPageContent(pageName) {
    const data = content[state.currentLang][pageName] || {};
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.640947214713!2d31.1118742848834!3d30.0055260806037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584628f4f6e625%3A0x9d4a046c3749c952!2sGrand%20Egyptian%20Museum!5e0!3m2!1sen!2seg!4v1678893456789";

    switch (pageName) {
        case 'home':
            return `
                <section class="py-16 md:py-24 space-y-20">
                    <div class="text-center">
                        <h2 class="text-5xl md:text-7xl font-extrabold mb-4 text-accent-gold leading-tight">
                            ${data.hero_title} <span class="block text-text-white">${data.hero_subtitle}</span>
                        </h2>
                        <p class="text-xl text-subtle-gray max-w-3xl mx-auto mb-8">${data.hero_tagline}</p>
                        <a href="#contact" data-page="contact" class="nav-link inline-block bg-accent-gold text-primary-navy font-bold py-3 px-8 rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">${data.cta}</a>
                        <p class="text-xs text-subtle-gray/70 mt-6 tracking-wider">${data.motto}</p>
                    </div>
                    <div>
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.expertise_title}</h3>
                        <div class="grid md:grid-cols-3 gap-8 mt-4">
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp1_title}</h4>
                                <p class="text-subtle-gray">${data.exp1_text}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp2_title}</h4>
                                <p class="text-subtle-gray">${data.exp2_text}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp3_title}</h4>
                                <p class="text-subtle-gray">${data.exp3_text}</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-8">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.testimonials_title}</h3>
                        <div class="space-y-8 max-w-5xl mx-auto">
                            <div class="bg-black/50 p-8 rounded-xl shadow-2xl border-l-4 border-accent-gold">
                                <p class="text-xl italic text-subtle-gray mb-4">${data.test1_quote}</p>
                                <p class="text-accent-gold font-semibold text-lg">${data.test1_client}</p>
                            </div>
                            <div class="bg-black/50 p-8 rounded-xl shadow-2xl border-r-4 border-accent-gold">
                                <p class="text-xl italic text-subtle-gray mb-4">${data.test2_quote}</p>
                                <p class="text-accent-gold font-semibold text-lg">${data.test2_client}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        case 'about':
            return `
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <div class="bg-black/30 p-10 rounded-xl border border-subtle-gray/30 shadow-inner shadow-black/50">
                        <h3 class="text-3xl font-bold mb-4 text-text-white">${data.background_heading}</h3>
                        <p class="text-subtle-gray leading-relaxed mb-4">${data.background_p1}</p>
                        <p class="text-subtle-gray leading-relaxed">${data.background_p2}</p>
                    </div>
                    <div class="pt-4">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.values_heading}</h3>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value1_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value1_text}</p>
                            </div>
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value2_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value2_text}</p>
                            </div>
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value3_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value3_text}</p>
                            </div>
                        </div>
                    </div>
                    <div class="pt-4">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.team_heading}</h3>
                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=F.E" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Chief Curator" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att1_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att1_role}</p>
                                <p class="text-sm text-text-white/80">${data.att1_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=Z.A" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Head of Conservation" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att2_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att2_role}</p>
                                <p class="text-sm text-text-white/80">${data.att2_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=L.H" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Specialist" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att3_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att3_role}</p>
                                <p class="text-sm text-text-white/80">${data.att3_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=K.M" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Researcher" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att4_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att4_role}</p>
                                <p class="text-sm text-text-white/80">${data.att4_focus}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        case 'exhibits':
            return `
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <p class="text-xl text-subtle-gray text-center max-w-4xl mx-auto mb-10">${data.tagline}</p>
                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s1_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s1_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s1_l1}</li>
                                <li>${data.s1_l2}</li>
                                <li>${data.s1_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s2_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s2_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s2_l1}</li>
                                <li>${data.s2_l2}</li>
                                <li>${data.s2_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s3_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s3_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s3_l1}</li>
                                <li>${data.s3_l2}</li>
                                <li>${data.s3_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s4_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s4_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s4_l1}</li>
                                <li>${data.s4_l2}</li>
                                <li>${data.s4_l3}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            `;
        case 'discoveries':
            return `
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <p class="text-xl text-subtle-gray text-center max-w-4xl mx-auto mb-10">${data.tagline}</p>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c1_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c1_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c1_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c2_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c2_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c2_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c3_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c3_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c3_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c4_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c4_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c4_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c5_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c5_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c5_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c6_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c6_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c6_text}</p>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <p class="text-subtle-gray italic">${data.note}</p>
                    </div>
                </section>
            `;
        case 'contact':
            return `
                <section class="py-12 md:py-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <div class="grid lg:grid-cols-2 gap-12">
                        <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 shadow-2xl">
                            <h3 class="text-3xl font-bold text-text-white mb-6">${data.form_heading}</h3>
                            <form id="consultation-form" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-subtle-gray mb-1">${data.name_label}</label>
                                    <input type="text" id="name" name="name" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-subtle-gray mb-1">${data.email_label}</label>
                                    <input type="email" id="email" name="email" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="subject" class="block text-sm font-medium text-subtle-gray mb-1">${data.subject_label}</label>
                                    <input type="text" id="subject" name="subject" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-subtle-gray mb-1">${data.message_label}</label>
                                    <textarea id="message" name="message" rows="4" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-accent-gold text-primary-navy font-bold py-3 rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.01]">${data.submit_button}</button>
                                <div id="form-message" class="mt-4 text-center text-accent-gold opacity-0 transition duration-300"></div>
                            </form>
                        </div>
                        <div class="space-y-8">
                            <div class="bg-black/30 p-8 rounded-xl border border-subtle-gray/30">
                                <h3 class="text-3xl font-bold text-accent-gold mb-4">${data.location_heading}</h3>
                                <p class="text-subtle-gray mb-2">${data.address_line1}</p>
                                <p class="text-subtle-gray mb-4">${data.address_line2}</p>
                                <div class="w-full h-48 rounded-lg overflow-hidden border border-subtle-gray/50">
                                    <iframe src="${mapEmbedUrl}" width="100%" height="192" class="dark-map-filter" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                                </div>
                                <p class="text-sm text-subtle-gray/70 mt-2">${data.map_placeholder}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-subtle-gray/30">
                                <h3 class="text-3xl font-bold text-accent-gold mb-4">${data.direct_heading}</h3>
                                <p class="text-lg text-text-white mb-2">${data.phone_label} <span class="text-accent-gold">${data.phone_number}</span></p>
                                <p class="text-lg text-text-white">${data.email_label_direct} <span class="text-accent-gold">${data.email_address}</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        default:
            return getPageContent('home');
    }
}

function renderPage(pageName, animateOut = true) {
    state.currentPage = pageName;
    updateActiveLink(pageName);

    const performRender = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        elements.appContent.innerHTML = getPageContent(pageName);
        animateContentIn(elements.appContent);

        if (pageName === 'contact') {
            setupContactForm();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (animateOut && elements.appContent.children.length > 0) {
        gsap.to(elements.appContent.children, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            stagger: 0.05,
            onComplete: performRender
        });
    } else {
        performRender();
    }
}

function updateActiveLink(pageName) {
    elements.navLinks.forEach(link => {
        link.classList.toggle('text-accent-gold', link.getAttribute('data-page') === pageName);
        link.classList.toggle('border-accent-gold', link.getAttribute('data-page') === pageName);
        link.classList.toggle('font-semibold', link.getAttribute('data-page') === pageName);
        link.classList.toggle('text-text-white/80', link.getAttribute('data-page') !== pageName);
        link.classList.toggle('border-transparent', link.getAttribute('data-page') !== pageName);
    });
}

function setupContactForm() {
    const form = document.getElementById('consultation-form');
    const messageDiv = document.getElementById('form-message');
    const successMessage = content[state.currentLang]?.contact?.form_success || 'Inquiry submitted.';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            messageDiv.textContent = successMessage;
            gsap.to(messageDiv, { opacity: 1, duration: 0.5 });
            form.reset();
            setTimeout(() => {
                gsap.to(messageDiv, { opacity: 0, duration: 0.5 });
            }, 4000);let currentLang = 'en';
let currentPage = 'home';
const appContent = document.getElementById('app-content');
const navLinks = document.querySelectorAll('.nav-link');
const bodyElement = document.body;

function switchLanguage(lang) {
    if (!content[lang]) return console.error('Language not supported.');

    currentLang = lang;
    bodyElement.setAttribute('lang', lang);

    // Update Page Title
    document.getElementById('page-title').textContent = content[lang].title;

    // Update Navigation Links
    navLinks.forEach(link => {
        const pageKey = link.getAttribute('data-page');
        if (content[lang].nav[pageKey]) {
            link.textContent = content[lang].nav[pageKey];
        }
    });

    // Update language buttons active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('font-semibold', 'text-accent-gold');
            btn.classList.remove('text-subtle-gray');
        } else {
            btn.classList.add('text-subtle-gray');
            btn.classList.remove('font-semibold', 'text-accent-gold');
        }
    });

    // Re-render the current page with new content
    renderPage(currentPage, true);
}

function getPageContent(pageName) {
    const data = content[currentLang][pageName];
    
    if (!data) {
        console.error(`Content data for page '${pageName}' in language '${currentLang}' is missing.`);
        return `<section class="text-center py-20 text-red-500">Error: Content Missing.</section>`;
    }

    switch (pageName) {
        case 'home':
            return `
                <!-- Home Page Content -->
                <section class="py-16 md:py-24 space-y-20">
                    <!-- Hero Section -->
                    <div class="text-center">
                        <h2 class="text-5xl md:text-7xl font-extrabold mb-4 text-accent-gold leading-tight">
                            ${data.hero_title} <span class="block text-text-white">${data.hero_subtitle}</span>
                        </h2>
                        <p class="text-xl text-subtle-gray max-w-3xl mx-auto mb-8">
                            ${data.hero_tagline}
                        </p>
                        <a href="#contact" data-page="contact" class="nav-link inline-block bg-accent-gold text-primary-navy font-bold py-3 px-8 rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-105">
                            ${data.cta}
                        </a>
                        <p class="text-xs text-subtle-gray/70 mt-6 tracking-wider">${data.motto}</p>
                    </div>

                    <!-- Expertise Overview -->
                    <div>
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.expertise_title}</h3>
                        <div class="grid md:grid-cols-3 gap-8 mt-4">
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp1_title}</h4>
                                <p class="text-subtle-gray">${data.exp1_text}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp2_title}</h4>
                                <p class="text-subtle-gray">${data.exp2_text}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 hover:border-accent-gold transition duration-300 transform hover:shadow-gold">
                                <h4 class="text-3xl font-bold mb-3 text-accent-gold">${data.exp3_title}</h4>
                                <p class="text-subtle-gray">${data.exp3_text}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Testimonials -->
                    <div class="pt-8">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.testimonials_title}</h3>
                        <div class="space-y-8 max-w-5xl mx-auto">
                            <div class="bg-black/50 p-8 rounded-xl shadow-2xl border-l-4 border-accent-gold">
                                <p class="text-xl italic text-subtle-gray mb-4">
                                    ${data.test1_quote}
                                </p>
                                <p class="text-accent-gold font-semibold text-lg">${data.test1_client}</p>
                            </div>
                            <div class="bg-black/50 p-8 rounded-xl shadow-2xl border-r-4 border-accent-gold">
                                <p class="text-xl italic text-subtle-gray mb-4">
                                    ${data.test2_quote}
                                </p>
                                <p class="text-accent-gold font-semibold text-lg">${data.test2_client}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        case 'about':
            return `
                <!-- About Page Content -->
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>

                    <!-- Museum Background -->
                    <div class="bg-black/30 p-10 rounded-xl border border-subtle-gray/30 shadow-inner shadow-black/50">
                        <h3 class="text-3xl font-bold mb-4 text-text-white">${data.background_heading}</h3>
                        <p class="text-subtle-gray leading-relaxed mb-4">${data.background_p1}</p>
                        <p class="text-subtle-gray leading-relaxed">${data.background_p2}</p>
                    </div>

                    <!-- Core Values -->
                    <div class="pt-4">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.values_heading}</h3>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value1_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value1_text}</p>
                            </div>
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value2_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value2_text}</p>
                            </div>
                            <div class="bg-primary-navy/50 p-6 rounded-xl border border-accent-gold/20 text-center">
                                <h4 class="text-2xl font-bold text-accent-gold mb-2">${data.value3_title}</h4>
                                <p class="text-sm text-subtle-gray">${data.value3_text}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Curators Grid -->
                    <div class="pt-4">
                        <h3 class="text-4xl font-bold text-center mb-10 text-text-white relative pb-2 inline-block animated-title-line">${data.team_heading}</h3>
                        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=F.E" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Chief Curator" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att1_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att1_role}</p>
                                <p class="text-sm text-text-white/80">${data.att1_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=Z.A" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Head of Conservation" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att2_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att2_role}</p>
                                <p class="text-sm text-text-white/80">${data.att2_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=L.H" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Specialist" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att3_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att3_role}</p>
                                <p class="text-sm text-text-white/80">${data.att3_focus}</p>
                            </div>
                            <div class="bg-black/30 rounded-xl overflow-hidden border border-accent-gold/20 p-6 text-center shadow-lg">
                                <img src="https://placehold.co/150x150/1A232F/FFD700?text=K.M" onerror="this.src='https://placehold.co/150x150/1A232F/FFD700?text=Curator';" alt="Researcher" class="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-accent-gold">
                                <h4 class="text-xl font-bold text-accent-gold">${data.att4_name}</h4>
                                <p class="text-sm text-subtle-gray mb-3">${data.att4_role}</p>
                                <p class="text-sm text-text-white/80">${data.att4_focus}</p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        case 'exhibits':
            return `
                <!-- Exhibits Page Content (Based on Egyptian Artifacts Data) -->
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <p class="text-xl text-subtle-gray text-center max-w-4xl mx-auto mb-10">
                        ${data.tagline}
                    </p>

                    <div class="grid md:grid-cols-2 gap-8">
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s1_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s1_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s1_l1}</li>
                                <li>${data.s1_l2}</li>
                                <li>${data.s1_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s2_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s2_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s2_l1}</li>
                                <li>${data.s2_l2}</li>
                                <li>${data.s2_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s3_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s3_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s3_l1}</li>
                                <li>${data.s3_l2}</li>
                                <li>${data.s3_l3}</li>
                            </ul>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-accent-gold/20 transition duration-300 hover:shadow-2xl hover:shadow-black/70">
                            <h3 class="text-3xl font-bold text-accent-gold mb-2">${data.s4_title}</h3>
                            <p class="text-subtle-gray mb-3">${data.s4_p}</p>
                            <ul class="list-disc text-sm text-text-white/90 ml-4">
                                <li>${data.s4_l1}</li>
                                <li>${data.s4_l2}</li>
                                <li>${data.s4_l3}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            `;
        case 'discoveries':
            return `
                <!-- Discoveries Page Content -->
                <section class="py-12 md:py-16 space-y-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>
                    <p class="text-xl text-subtle-gray text-center max-w-4xl mx-auto mb-10">
                        ${data.tagline}
                    </p>

                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c1_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c1_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c1_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c2_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c2_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c2_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c3_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c3_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c3_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c4_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c4_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c4_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c5_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c5_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c5_text}</p>
                        </div>
                        <div class="bg-black/30 p-6 rounded-xl border border-subtle-gray/30 hover:border-accent-gold transition duration-300 transform hover:translate-y-[-2px] shadow-lg">
                            <p class="text-xs font-semibold text-accent-gold uppercase mb-2">${data.c6_area}</p>
                            <h4 class="text-xl font-bold mb-2">${data.c6_title}</h4>
                            <p class="text-sm text-subtle-gray">${data.c6_text}</p>
                        </div>
                    </div>
                    <div class="text-center mt-12">
                        <p class="text-subtle-gray italic">${data.note}</p>
                    </div>
                </section>
            `;
        case 'contact':
            const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.640947214713!2d31.1118742848834!3d30.0055260806037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584628f4f6e625%3A0x9d4a046c3749c952!2sGrand%20Egyptian%20Museum!5e0!3m2!1sen!2seg!4v1678893456789";
            
            return `
                <!-- Contact Page Content -->
                <section class="py-12 md:py-16">
                    <h2 class="text-5xl font-extrabold text-accent-gold text-center mb-12 relative pb-2 inline-block animated-title-line">${data.title}</h2>

                    <div class="grid lg:grid-cols-2 gap-12">
                        <!-- Contact Form -->
                        <div class="bg-black/30 p-8 rounded-xl border border-accent-gold/20 shadow-2xl">
                            <h3 class="text-3xl font-bold text-text-white mb-6">${data.form_heading}</h3>
                            <form id="consultation-form" class="space-y-6">
                                <div>
                                    <label for="name" class="block text-sm font-medium text-subtle-gray mb-1">${data.name_label}</label>
                                    <input type="text" id="name" name="name" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="email" class="block text-sm font-medium text-subtle-gray mb-1">${data.email_label}</label>
                                    <input type="email" id="email" name="email" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="subject" class="block text-sm font-medium text-subtle-gray mb-1">${data.subject_label}</label>
                                    <input type="text" id="subject" name="subject" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200">
                                </div>
                                <div>
                                    <label for="message" class="block text-sm font-medium text-subtle-gray mb-1">${data.message_label}</label>
                                    <textarea id="message" name="message" rows="4" required class="w-full p-3 bg-primary-navy/70 border border-subtle-gray/50 rounded-lg focus:border-accent-gold focus:ring-1 focus:ring-accent-gold transition duration-200"></textarea>
                                </div>
                                <button type="submit" class="w-full bg-accent-gold text-primary-navy font-bold py-3 rounded-lg shadow-xl hover:bg-yellow-500 transition duration-300 transform hover:scale-[1.01]">
                                    ${data.submit_button}
                                </button>
                                <div id="form-message" class="mt-4 text-center text-accent-gold opacity-0 transition duration-300"></div>
                            </form>
                        </div>

                        <!-- Location & Details -->
                        <div class="space-y-8">
                            <div class="bg-black/30 p-8 rounded-xl border border-subtle-gray/30">
                                <h3 class="text-3xl font-bold text-accent-gold mb-4">${data.location_heading}</h3>
                                <p class="text-subtle-gray mb-2">${data.address_line1}</p>
                                <p class="text-subtle-gray mb-4">${data.address_line2}</p>
                                <div class="w-full h-48 rounded-lg overflow-hidden border border-subtle-gray/50">
                                    <iframe
                                        src="${mapEmbedUrl}"
                                        width="100%"
                                        height="192"
                                        class="dark-map-filter"
                                        style="border:0;"
                                        allowfullscreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                                <p class="text-sm text-subtle-gray/70 mt-2">${data.map_placeholder}</p>
                            </div>
                            <div class="bg-black/30 p-8 rounded-xl border border-subtle-gray/30">
                                <h3 class="text-3xl font-bold text-accent-gold mb-4">${data.direct_heading}</h3>
                                <p class="text-lg text-text-white mb-2">${data.phone_label} <span class="text-accent-gold">${data.phone_number}</span></p>
                                <p class="text-lg text-text-white">${data.email_label_direct} <span class="text-accent-gold">${data.email_address}</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            `;
        default:
            return getPageContent('home');
    }
}

function renderPage(pageName, animateOut = true) {
    currentPage = pageName;
    updateActiveLink(pageName);

    const performRender = () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        appContent.innerHTML = getPageContent(pageName);
        animateContentIn(appContent);

        if (pageName === 'contact') {
            setupContactForm();
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (animateOut && appContent.children.length > 0) {
        gsap.to(appContent.children, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            stagger: 0.05,
            onComplete: performRender
        });
    } else {
        performRender();
    }
}

function updateActiveLink(pageName) {
    navLinks.forEach(link => {
        link.classList.remove('text-accent-gold', 'border-accent-gold', 'font-semibold');
        link.classList.add('text-text-white/80', 'border-transparent');

        if (link.getAttribute('data-page') === pageName) {
            link.classList.add('text-accent-gold', 'border-accent-gold', 'font-semibold');
            link.classList.remove('text-text-white/80', 'border-transparent');
        }
    });
}

function setupContactForm() {
    const form = document.getElementById('consultation-form');
    const messageDiv = document.getElementById('form-message');
    const successMessage = content[currentLang]?.contact?.form_success || 'Inquiry submitted.';

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            messageDiv.textContent = successMessage;
            gsap.to(messageDiv, { opacity: 1, duration: 0.5 });
            form.reset();
            setTimeout(() => {
                gsap.to(messageDiv, { opacity: 0, duration: 0.5 });
            }, 4000);
        });
    }
}

function initApp() {
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('nav-link') && target.hasAttribute('data-page')) {
            e.preventDefault();
            const pageName = target.getAttribute('data-page');
            renderPage(pageName);
        } else if (target.classList.contains('lang-btn') && target.hasAttribute('data-lang')) {
            const lang = target.getAttribute('data-lang');
            switchLanguage(lang);
        }
    });

    gsap.from("#logo", { duration: 1, opacity: 0, x: -50, ease: "power3.out" });
    gsap.from("#nav-links li", { duration: 0.6, opacity: 0, y: -20, stagger: 0.1, delay: 0.5 });
    gsap.from("#language-switcher button", { duration: 0.6, opacity: 0, y: -20, delay: 0.8 });

    switchLanguage('en');
}

window.onload = initApp;
        });
    }
}

function initApp() {
    document.body.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('nav-link') && target.hasAttribute('data-page')) {
            e.preventDefault();
            renderPage(target.getAttribute('data-page'));
        } else if (target.classList.contains('lang-btn') && target.hasAttribute('data-lang')) {
            switchLanguage(target.getAttribute('data-lang'));
        }
    });

    animateInitialLoad();
    switchLanguage('en');
}

window.onload = initApp;