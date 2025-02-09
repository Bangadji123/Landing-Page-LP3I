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

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Menutup menu saat link diklik
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Menutup menu saat scroll
    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });

    // Program Dropdown Function
    function toggleContent(contentId) {
        const content = document.getElementById(contentId);
        const allContents = document.querySelectorAll('.program-content');
        const allCards = document.querySelectorAll('.program-card');
        
        // Tutup semua konten yang terbuka kecuali yang sedang diklik
        allContents.forEach(item => {
            if (item.id !== contentId) {
                item.classList.remove('active');
                // Cari card yang berhubungan dan hapus class active-nya
                const relatedCard = item.previousElementSibling;
                if (relatedCard) {
                    relatedCard.classList.remove('active');
                }
            }
        });
        
        // Toggle konten yang diklik
        content.classList.toggle('active');
        
        // Toggle class active pada card yang diklik
        const clickedCard = content.previousElementSibling;
        if (clickedCard) {
            clickedCard.classList.toggle('active');
        }
    }

    // Tambahkan event listener untuk setiap program card
    document.querySelectorAll('.program-card').forEach(card => {
        card.addEventListener('click', function() {
            const contentId = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            toggleContent(contentId);
        });
    });

    // Menu Icon Functionality
    const menuIcon = document.querySelector('.menu-icon');
    const mobileNav = document.querySelector('.mobile-nav');
    const navLinksMobile = document.querySelectorAll('.mobile-nav a');

    menuIcon.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Change menu icon
        const icon = menuIcon.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('bx-menu');
            icon.classList.add('bx-x');
        } else {
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });

    // Close mobile nav when clicking a link
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !menuIcon.contains(e.target)) {
            mobileNav.classList.remove('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
    