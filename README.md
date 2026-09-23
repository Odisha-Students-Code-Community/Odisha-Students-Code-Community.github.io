# Odisha Students Code Community (OSCC) Official Website ❤️

> **Students in Odisha building software together — in public.**

[![OSCC Branding](assets/icons/Full-Logo.png)](https://odisha-students-code-community.github.io/)

Welcome to the official repository for the **Odisha Students Code Community (OSCC)** website, hosted at [odisha-students-code-community.github.io](https://odisha-students-code-community.github.io/).

OSCC is a student-driven, 100% free open-source technology movement connecting student developers, designers, and enthusiasts across colleges and polytechnics in Odisha, India.

---

## 🛠️ Tech Stack & Architecture

This website is engineered with an **Industrial Brutalism / Neo-Brutalist** aesthetic without heavyweight frontend frameworks or node build steps:

- **Markup**: Semantic HTML5 (WAI-ARIA accessible, WCAG AA compliant).
- **Styling**: Modular CSS3 with CSS Custom Properties (`css/tokens.css`, `base.css`, `components.css`, `layout.css`, `responsive.css`).
- **Scripts**: Clean ES6+ JavaScript modules (`js/app.js`, `js/projects-filter.js`, `js/github-api.js`).
- **Typography**: Space Grotesk (Display), JetBrains Mono (Technical/Code), Inter (Body).
- **Hosting**: GitHub Pages (100% static, fast, zero runtime maintenance).

---

## 📁 Repository Structure

```text
Odisha-Students-Code-Community.github.io/
├── index.html              # Main OSCC homepage
├── projects.html           # Open source project directory & filter
├── contribute.html         # Beginner-friendly 9-step Git guide
├── community.html          # Community values, college leads, safety charter
├── events.html             # Events & workshops board
├── 404.html                # Custom industrial 404 handler
├── assets/
│   └── icons/
│       ├── Logo.png        # Official OSCC square logo (767x767)
│       └── Full-Logo.png   # Official OSCC full banner logo (1022x767)
├── css/
│   ├── tokens.css          # Color palette, spacing, and brutalist tokens
│   ├── base.css            # Reset, typography, accessibility skip-links
│   ├── components.css      # Tactile buttons, cards, badges, terminals
│   ├── layout.css          # Ticker, navbar, hero, workflow, footer
│   └── responsive.css      # Mobile drawer, breakpoint reflows
├── js/
│   ├── app.js              # Clock, mobile drawer, clipboard copy logic
│   ├── github-api.js       # Resilient API client with sessionStorage caching
│   ├── projects-filter.js  # Live search & difficulty filter
│   └── data/
│       ├── config.js       # Organization metadata & verified social links
│       ├── projects.js     # Verified OSCC repositories schema
│       ├── community.js    # Values, contribution pathways, safety charter
│       └── events.js       # Workshop/event feed & proposal guide
├── CONTRIBUTING.md         # Student contribution guidelines
├── CODE_OF_CONDUCT.md     # Community code of conduct
└── README.md               # Repository documentation
```

---

## 🚀 Local Development Setup

No `npm install` or compilation step is required! You only need a web browser and a lightweight local HTTP server.

### Option 1: Python HTTP Server (Recommended)
```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/Odisha-Students-Code-Community.github.io.git
cd Odisha-Students-Code-Community.github.io

# Start local server
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your web browser.

### Option 2: VS Code Live Server
1. Open the repository folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🎯 How to Contribute

We actively encourage students to make their **first open-source contribution** here!

1. Check our [Issues](https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/issues) for `good first issue` tags.
2. Read our comprehensive [CONTRIBUTING.md](CONTRIBUTING.md) guide.
3. Fork the repository, create a branch (`git checkout -b feat/your-feature`), and test your changes locally.
4. Open a Pull Request! A friendly maintainer will review your work and help you merge it.

---

## 📜 Code of Conduct & Safety

OSCC is a safe, inclusive, and harassment-free community for all student developers regardless of background, gender, or experience level. Read our full [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

- **100% Free**: OSCC has no admission fees, paid memberships, or hidden charges.
- **No Scams**: We do not promote spam internships or paid certificates.

---

## 📄 License

This repository and all website source code are released under the [MIT License](LICENSE).
Odisha Students Code Community ❤️
