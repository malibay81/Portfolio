// Language Switcher
function showLanguage(lang) {
    const contents = document.querySelectorAll('.language-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(lang);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        
        // Re-trigger fade animations for the newly visible section
        setTimeout(() => {
            const sections = selectedSection.querySelectorAll('.fade-in-section');
            sections.forEach((section, index) => {
                setTimeout(() => {
                    section.classList.add('visible');
                }, index * 150);
            });
        }, 100);
    }
    
    // Update active flag button
    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.style.background = 'rgba(255, 255, 255, 0.05)';
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.textContent = body.classList.contains('dark-theme') ? '🌓' : '☀️';
    }
    
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    try {
        localStorage.setItem('theme', currentTheme);
    } catch (e) {
        console.log('localStorage not available');
    }
}

// Scroll observer for fade-in animations
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Image gallery lightbox functionality
function setupGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                const modal = createLightboxModal(e.target);
                document.body.appendChild(modal);
            }
        });
    });
}

function createLightboxModal(imgElement) {
    const modal = document.createElement('div');
    modal.className = 'lightbox-modal';
    modal.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="${imgElement.src}" alt="${imgElement.alt}">
            <p class="lightbox-caption">${imgElement.alt || 'Image'}</p>
        </div>
    `;
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('lightbox-close')) {
            modal.remove();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            modal.remove();
            document.removeEventListener('keydown', escHandler);
        }
    });
    
    return modal;
}

// Smooth scroll for anchor links
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// Typing effect for hero (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initializing...');
    
    // Show English by default
    showLanguage('en');

    // Restore theme preference from localStorage
    try {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
            const themeSwitcher = document.getElementById('theme-switcher');
            if (themeSwitcher) themeSwitcher.textContent = '☀️';
        }
    } catch (e) {
        console.log('localStorage not available (tracking prevention)');
    }

    // Add event listener for theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if (themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
    
    // Setup gallery and smooth scroll
    setupGallery();
    setupSmoothScroll();
    
    // Initialize fade-in observers
    const fadeElements = document.querySelectorAll('.fade-in-section');
    fadeElements.forEach((el) => fadeObserver.observe(el));
    
    // Add parallax effect to hero on scroll
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroAnimations = document.querySelectorAll('.hero-animation svg');
        heroAnimations.forEach(svg => {
            svg.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    });

    console.log('Portfolio ready ✨');
});
