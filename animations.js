gsap.registerPlugin(ScrollTrigger);

function animateContentIn(element) {
    gsap.context(() => {
        // Animation 1: Standard staggered fade-up for main sections
        gsap.fromTo(element.querySelectorAll('section > *'),
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.1 
            }
        );

        // Animation 2: Animated Title Lines
        gsap.utils.toArray('.animated-title-line').forEach(title => {
            if (title.parentElement && title.parentElement.style.position !== 'relative') {
                title.parentElement.style.position = 'relative';
            }
            
            const line = document.createElement('div');
            const isRtl = document.body.getAttribute('lang') === 'ar';
            line.className = `w-full h-1 bg-accent-gold/50 absolute bottom-0 ${isRtl ? 'right-0 origin-right' : 'left-0 origin-left'}`;
            
            title.parentElement.appendChild(line);

            gsap.fromTo(line,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.2,
                    ease: "power3.out",
                    transformOrigin: isRtl ? "right center" : "left center",
                    scrollTrigger: {
                        trigger: title,
                        start: "top 80%", 
                        toggleActions: "play none none none",
                    }
                }
            );
        });
    }, element);
}

function animateInitialLoad() {
    gsap.from("#logo", { duration: 1, opacity: 0, x: -50, ease: "power3.out" });
    gsap.from("#nav-links li", { duration: 0.6, opacity: 0, y: -20, stagger: 0.1, delay: 0.5 });
    gsap.from("#language-switcher button", { duration: 0.6, opacity: 0, y: -20, delay: 0.8 });
}