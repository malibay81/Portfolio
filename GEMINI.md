# Gemini Information

This file is for storing information related to Gemini interactions and configurations.

# Static Portfolio for GitHub Pages

This document outlines the files and content to create a static, multi-language portfolio website with a modern design inspired by `ai.google.dev`, and deploy it to GitHub Pages automatically.

## File Structure

```
/
|-- Portfolio/
    |-- index.html
    |-- style.css
    |-- script.js
|-- .github/
    |-- workflows/
        |-- deploy.yml
```

---

## `Portfolio/index.html`

This is the main file for your portfolio. It includes a theme switcher, content in English, German, and Turkish, and sections for About Me, Skills, and Projects.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>
<body class="dark-theme">
    <header>
        <div class="container">
            <div class="logo">My Portfolio</div>
            <nav>
                <button onclick="showLanguage('en')">English</button>
                <button onclick="showLanguage('de')">German</button>
                <button onclick="showLanguage('tr')">Turkish</button>
                <button id="theme-switcher">Toggle Theme</button>
            </nav>
        </div>
    </header>

    <main class="container">
        <section id="en" class="language-content">
            <div class="hero">
                <h1>Welcome to My Portfolio</h1>
                <p>Project Engineer and Software Developer</p>
            </div>
            <div class="content-section">
                <h2>About Me</h2>
                <p>I am a Project Engineer and Software Developer with 18 years of experience in special machine construction for the engine, pump, and automotive industries. My expertise ranges from project planning with customers to support after the Start of Production (SOP).</p>
            </div>
            <div class="content-section">
                <h2>Skills</h2>
                <p>C#, WPF, WinForms, Blazor, Siemens S7, Beckhoff TwinCAT, CANoe, CANape, CAnalyzer, Jira, MS Office, .NET Interactive / Polyglot Notebooks, HTML5, Markdown, SQL, Microsoft SQL Server, PostgreSQL, SQLite.</p>
            </div>
             <div class="content-section">
                <h2>Projects</h2>
                <p>Here you can find my projects.</p>
                <!-- Add your projects here -->
            </div>
        </section>

        <section id="de" class="language-content" style="display:none;">
            <div class="hero">
                <h1>Willkommen in meinem Portfolio</h1>
                <p>Projektingenieur und Softwareentwickler</p>
            </div>
            <div class="content-section">
                <h2>Über mich</h2>
                <p>Ich bin ein Projektingenieur und Softwareentwickler mit 18 Jahren Erfahrung im Sondermaschinenbau für die Motoren-, Pumpen- und Automobilindustrie. Meine Expertise reicht von der Projektplanung mit Kunden bis hin zum Support nach dem Produktionsstart (SOP).</p>
            </div>
            <div class="content-section">
                <h2>Kenntnisse</h2>
                <p>C#, WPF, WinForms, Blazor, Siemens S7, Beckhoff TwinCAT, CANoe, CANape, CAnalyzer, Jira, MS Office, .NET Interactive / Polyglot Notebooks, HTML5, Markdown, SQL, Microsoft SQL Server, PostgreSQL, SQLite.</p>
            </div>
            <div class="content-section">
                <h2>Projekte</h2>
                <p>Hier finden Sie meine Projekte.</p>
                <!-- Fügen Sie hier Ihre Projekte ein -->
            </div>
        </section>

        <section id="tr" class="language-content" style="display:none;">
            <div class="hero">
                <h1>Portfolyoma Hoş Geldiniz</h1>
                <p>Proje Mühendisi ve Yazılım Geliştirici</p>
            </div>
            <div class="content-section">
                <h2>Hakkımda</h2>
                <p>Motor, pompa ve otomotiv endüstrileri için özel makine yapımında 18 yıllık deneyime sahip bir Proje Mühendisi ve Yazılım Geliştiricisiyim. Uzmanlığım, müşterilerle proje planlamasından Üretim Başlangıcı (SOP) sonrası desteğe kadar uzanmaktadır.</p>
            </div>
            <div class="content-section">
                <h2>Yetenekler</h2>
                <p>C#, WPF, WinForms, Blazor, Siemens S7, Beckhoff TwinCAT, CANoe, CANape, CAnalyzer, Jira, MS Office, .NET Interactive / Polyglot Notebooks, HTML5, Markdown, SQL, Microsoft SQL Server, PostgreSQL, SQLite.</p>
            </div>
             <div class="content-section">
                <h2>Projeler</h2>
                <p>Burada projelerimi bulabilirsiniz.</p>
                <!-- Projelerinizi buraya ekleyin -->
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
```

---

## `Portfolio/style.css`

This file contains the styles for your portfolio, with a dark theme as default.

```css
:root {
    --background-color-dark: #121212;
    --text-color-dark: #e0e0e0;
    --primary-color-dark: #82aaff;
    --card-background-dark: #1e1e1e;

    --background-color-light: #ffffff;
    --text-color-light: #212121;
    --primary-color-light: #2962ff;
    --card-background-light: #f4f4f4;
}

body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    transition: background-color 0.3s, color 0.3s;
}

.dark-theme {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
}

.light-theme {
    background-color: var(--background-color-light);
    color: var(--text-color-light);
}

.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 20px;
}

header {
    padding: 1rem 0;
    border-bottom: 1px solid #333;
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 500;
}

nav button {
    margin-left: 10px;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    background-color: transparent;
    color: inherit;
    font-size: 1rem;
}

#theme-switcher {
    border: 1px solid;
    border-radius: 5px;
}

.dark-theme #theme-switcher {
    border-color: var(--primary-color-dark);
}

.light-theme #theme-switcher {
     border-color: var(--primary-color-light);
}

.hero {
    padding: 4rem 0;
    text-align: center;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.content-section {
    background-color: var(--card-background-dark);
    padding: 2rem;
    border-radius: 8px;
    margin-bottom: 2rem;
}

.light-theme .content-section {
    background-color: var(--card-background-light);
}


.content-section h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: var(--primary-color-dark);
}

.light-theme .content-section h2 {
    color: var(--primary-color-light);
}
```

---

## `Portfolio/script.js`

This file contains the JavaScript to switch between languages and themes.

```javascript
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

document.addEventListener('DOMContentLoaded', () => {
    // Show English by default
    showLanguage('en');

    // Add event listener for theme switcher
    const themeSwitcher = document.getElementById('theme-switcher');
    if(themeSwitcher) {
        themeSwitcher.addEventListener('click', toggleTheme);
    }
});
```

---

## `.github/workflows/deploy.yml`

This GitHub Actions workflow will automatically build and deploy your portfolio to GitHub Pages whenever you push changes to the `main` branch.

**Important:** Before this works, you need to go to your repository's settings on GitHub, navigate to the "Pages" section, and set the source to "GitHub Actions".

**Repository for Publishing:** The GitHub Pages deployment is inherently tied to the repository where this workflow file (`.github/workflows/deploy.yml`) resides. You do not define the target repository within this workflow; rather, the workflow must be placed in the repository you wish to publish from.

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
    build-and-deploy:
        runs-on: ubuntu-latest
        steps:
            - name: Checkout
            uses: actions/checkout@v3

            - name: Setup Pages
            uses: actions/configure-pages@v3

            - name: Upload artifact
            uses: actions/upload-pages-artifact@v2
            with:
                path: 'Portfolio' # Changed path to 'Portfolio'

            - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v2
```

---

## Knowledge and Skills

**Role:** Project Engineer and Software Developer in special machine construction for the engine, pump, and automotive industries.
**Experience:** 18 years.
**Expertise:** From project planning with customers to support after Start of Production (SOP).

### Software Development
- **Languages & Frameworks:** C#, WPF, WinForms, Blazor, HTML5, Markdown
- **PLC Programming:** Siemens S7, Beckhoff TwinCAT

### Databases
- Microsoft SQL Server
- MySql
- PostgreSQL
- SQLite
- MongoDB

### Tools & Software
- **Vector Informatics:** CANoe, CANape, CAnalyzer
- **Project Management:** Jira
- **Office Suite:** MS Office
- **Interactive Computing:** .NET Interactive / Polyglot Notebooks
