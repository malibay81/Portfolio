﻿// wwwroot/site.js

function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

window.scrollToElement = scrollToElement;