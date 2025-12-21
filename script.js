// Language Switcher
function showLanguage(lang) {
    const contents = document.querySelectorAll('.language-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(lang);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
    
    // Reload Lottie animations when language changes
    setTimeout(() => {
        const lottieElements = document.querySelectorAll('lottie-player');
        lottieElements.forEach(el => {
            if (el.load) {
                el.load();
            }
        });
    }, 100);
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    // Optional: Store theme preference in localStorage
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

// Lottie Animation Observer for autoplay when visible
const lottieObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const lottiePlayer = entry.target.querySelector('lottie-player');
        if (lottiePlayer) {
            if (entry.isIntersecting) {
                lottiePlayer.play && lottiePlayer.play();
            } else {
                lottiePlayer.pause && lottiePlayer.pause();
            }
        }
    });
}, { threshold: 0.5 });

// Content section observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
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
    
    return modal;
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio initializing...');
    
    // Show English by default
    showLanguage('en');

    // Restore theme preference from localStorage
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
        toggleTheme();
    }

    // Add event listener for theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if(themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
    
    // Setup gallery
    setupGallery();
    
    // Initialize observers and lottie players
    setTimeout(() => {
        // Observe hidden content sections
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        // Observe project icons for animation
        const projectIcons = document.querySelectorAll('.project-icon');
        projectIcons.forEach((icon) => {
            lottieObserver.observe(icon);
        });
        
        // Initialize all lottie players
        const lottieElements = document.querySelectorAll('lottie-player');
        console.log('Found ' + lottieElements.length + ' Lottie players');
        lottieElements.forEach(el => {
            if (el.load) {
                el.load();
            }
        });
    }, 300);
});