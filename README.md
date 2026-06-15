# 🐺 LYKON – Portfolio von M. Ali Bayrak

Willkommen zu meinem persönlichen Portfolio! Hier präsentiere ich meine Fähigkeiten, Projekte und interaktive Software-Demos für potenzielle Auftraggeber und Kooperationspartner.

---

## 📋 Über mich

**Muhammed Ali Bayrak** — Dipl.-Ing. (FH)  
Software-Ingenieur | Sondermaschinenbau | Automatisierung

Mit über **15 Jahren Erfahrung** in der Softwareentwicklung spezialisiere ich mich auf:
- **.NET & C#** — Desktop-, Web- und Automatisierungslösungen
- **Blazor WebAssembly** — Moderne, responsive Single-Page-Applications
- **Automatisierungssoftware** — S7, TwinCAT, PLC-nahe Anwendungen
- **Sondermaschinenbau** — Elektromotoren, Pumpen, Automotive, Sonderanlagen

**Verfügbarkeit:** 40% (nebenberuflich mit Freigabe vom Arbeitgeber)

---

## 🌐 Portfolio Online

👉 **[https://malibay81.github.io/Portfolio/](https://malibay81.github.io/Portfolio/)**

Vollständig responsive, Dark Mode, mehrsprachig (Deutsch, Englisch, Türkisch).

---

## 🛠️ Tech Stack

| Bereich | Technologie |
|---------|-------------|
| **Framework** | .NET 10 — Blazor WebAssembly (WASM) |
| **UI** | MudBlazor (Material Design 3) |
| **Sprachen** | C#, HTML5, CSS3 |
| **Hosting** | GitHub Pages (statisch) |
| **IDE** | JetBrains Rider / Visual Studio |
| **Automatisierung** | S7-Siemens, TwinCAT Beckhoff |

---

## 📂 Projektstruktur

```
Portfolio_H1/
├── Pages/                 # Blazor-Seiten (Home, About, Projects, Contact, Demo)
├── Layout/                # MudLayout, Navigation, Footer
├── Services/              # TranslationService, ThemeService, TelemetrySimulator
├── Models/                # Datenmodelle (Records)
├── wwwroot/               # Statische Assets (CSS, Favicon, Icons)
├── Program.cs             # .NET DI-Konfiguration, MudBlazor Setup
├── deploy.sh              # Deployment-Skript (build + GitHub Pages push)
├── CLAUDE.md              # Entwicklungsdokumentation
└── README.md              # Diese Datei
```

---

## ✨ Features

✅ **Moderne UI mit MudBlazor**
- Material Design 3 Theme
- Dark Mode (Standard) + Light Mode Toggle
- Responsive Design (Mobile-first)
- Glassmorphism-Effekte

✅ **Mehrsprachigkeit**
- Deutsch (DE) — Standard
- Englisch (EN)
- Türkisch (TR)
- Einfaches Language-Switcher-System

✅ **Interaktive Demos**
- **Telemetrie-Dashboard** — Live-Datensimulation mit MudChart
- **Kontaktformular** — Mit mailto-Integration
- API-Simulator (zukünftig)

✅ **Kontaktmöglichkeiten**
- Direktkontakt (E-Mail, LinkedIn, GitHub)
- Verfügbarkeitsstatus
- Freelancer-Profile (freelancermap, freelance.de)

---

## 📞 Kontakt & Freelance-Profile

- **E-Mail:** [mali.bayrak@web.de](mailto:mali.bayrak@web.de)
- **LinkedIn:** [m-ali-bayrak](https://www.linkedin.com/in/m-ali-bayrak-0a8036331/)
- **GitHub:** [malibay81](https://github.com/malibay81)
- **freelancermap.de:** [software-ingenieur-273904](https://www.freelancermap.de/profil/software-ingenieur-273904) — 80€/Std, 40% verfügbar
- **freelance.de:** [315461-und-Software-Ingenieur](https://www.freelance.de/freelancer/315461-und-Software-Ingenieur) — Kundennummer F386537

---

## 🚀 Lokale Entwicklung

### Voraussetzungen
- .NET 10 SDK
- JetBrains Rider oder Visual Studio
- Git

### Setup

```bash
# Repository klonen
git clone https://github.com/malibay81/Portfolio.git
cd Portfolio_H1

# Projekt öffnen
rider Portfolio_H1.csproj
# oder
devenv Portfolio_H1.csproj
```

### Lokales Testen (Debug)
```bash
dotnet run --configuration Debug
# Öffne dann: https://localhost:5001
```

### Release-Build
```bash
dotnet publish -c Release
# Output: bin/Release/net10.0/publish/wwwroot/
```

### Deployment (nur mit Erlaubnis!)
```bash
bash deploy.sh
# Baut, patcht base href, pusht zu GitHub Pages
```

⚠️ **WICHTIG:** Der Quellcode bleibt lokal. Nur das kompilierte Binär wird gepusht.

---

## 📋 Seiten-Übersicht

| Seite | Beschreibung |
|-------|-------------|
| **Home** | Hero-Bereich, Kurzprofil, Call-to-Action |
| **Über mich** | Lebenslauf, Fähigkeiten, Ausbildung, Zertifikate |
| **Projekte** | Projektkarten mit Technologien und Links |
| **Demos** | Interaktive Demos (Telemetrie-Dashboard, API-Simulator) |
| **Kontakt** | Kontaktformular, Direktkontakte, Verfügbarkeitsstatus |

---

## 🎨 Design-Prinzipien

- **Dark Mode First** — Modernes "Deep Space"-Theme
- **Glassmorphism** — Subtile Blur-Effekte und halbtransparente Karten
- **Responsive** — Perfekt auf Smartphone, Tablet, Desktop
- **Performance** — Optimierte Bundle-Größe für schnelle Ladezeiten
- **Barrierefreiheit** — MudBlazor ARIA-Attribute, semantisches HTML

---

## 📊 Performance & Bundle-Größe

Mit Blazor WASM ist die initiale Ladelast größer als traditional gehostete Seiten.
Optimierungen:

- Trimmed .NET Runtime für kleinere Binäre
- Gzip/Brotli-Kompression auf GitHub Pages
- Lazy Loading von Seiten
- Effiziente Asset-Verwaltung

---

## 🔐 Sicherheit & IP-Schutz

⚠️ **Wichtig:** Der Quellcode (`*.cs`, `*.razor`, `*.csproj`) verbleibt **ausschließlich lokal** auf dem Entwicklungsrechner. Nur das fertige Kompilat wird nach GitHub gepusht. Dies schützt proprietäre Algorithmen und Geschäftslogik.

---

## 📝 Lizenz

Dieses Portfolio ist persönlich und dient zu Präsentationszwecken. Kontaktiere mich für Nutzungsanfragen.

---

## 🤝 Zusammenarbeit

Interessiert an einer Zusammenarbeit? Kontaktiere mich über:
- **Portfolio-Kontaktformular:** https://malibay81.github.io/Portfolio/contact
- **E-Mail:** mali.bayrak@web.de
- **LinkedIn:** https://www.linkedin.com/in/m-ali-bayrak-0a8036331/

---

**Zuletzt aktualisiert:** 2026  
**Maintainer:** M. Ali Bayrak
