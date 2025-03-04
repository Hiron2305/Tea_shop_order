document.addEventListener('DOMContentLoaded', () => {
    history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    setTimeout(() => {
        document.querySelector('main').style.opacity = '1';
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, 2200);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle('visible', entry.isIntersecting);
        });
    }, {
        threshold: 0.1,
        rootMargin: '-50px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-block').forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const bamboo = document.querySelector('.bamboo-pattern');
        
        if (scrolled < window.innerHeight) {
            document.querySelector('.hero-content').style.transform = 
                `translateY(${scrolled * 0.3}px)`;
        }
    });

    document.body.style.overflow = 'hidden';
    setTimeout(() => {
        document.body.style.overflow = 'auto';
    }, 2500);

    window.addEventListener('scroll', () => {
        const bambooLeft = document.querySelector('.bamboo-left');
        const bambooRight = document.querySelector('.bamboo-right');
        const scrollPos = window.scrollY;
        
        bambooLeft.style.transform = `translateY(${scrollPos * 0.1}px) rotate(-1deg)`;
        bambooRight.style.transform = `translateY(${scrollPos * 0.1}px) rotate(1deg)`;
    });
    
});