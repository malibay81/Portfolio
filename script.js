function showLanguage(lang) {
    const contents = document.querySelectorAll('.language-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById(lang).style.display = 'block';
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


document.addEventListener('DOMContentLoaded', () => {
    // Show English by default
    showLanguage('en');

    // Add event listener for theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if(themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
});