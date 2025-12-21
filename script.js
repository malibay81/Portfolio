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
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

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
    try {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        if (savedTheme === 'light') {
            toggleTheme();
        }
    } catch (e) {
        console.log('localStorage not available (tracking prevention)');
    }

    // Add event listener for theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if(themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
    
    // Setup gallery
    setupGallery();
    
    // Initialize observers
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    console.log('Portfolio ready');
});
