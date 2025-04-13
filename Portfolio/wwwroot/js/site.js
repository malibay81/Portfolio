// wwwroot/site.js

window.initializeAnimations = () => {
    AOS.init({
        duration: 1000,
        once: false,
        mirror: true
    });
};

window.scrollToElement = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

window.scrollToElement = scrollToElement;

window.getThemePreference = () => {
    return localStorage.getItem('portfolioTheme') || 'light';
};

window.setThemePreference = (theme) => {
    localStorage.setItem('portfolioTheme', theme);
};