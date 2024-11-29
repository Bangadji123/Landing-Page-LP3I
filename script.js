const sections = document.querySelectorAll('.profile, .program, .blog');
    const blogCards = document.querySelectorAll('.blog-card');
    const homeContent = document.querySelector('.home-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                entry.target.classList.remove('fade-out');
            } else {
                // Tambahkan class fade-out ketika section keluar dari viewport
                entry.target.classList.add('fade-out');
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '-50px'
    });

    sections.forEach(section => {
        section.style.animationPlayState = 'paused';
        observer.observe(section);
    });

    blogCards.forEach(card => {
        observer.observe(card);
    });

    observer.observe(homeContent);