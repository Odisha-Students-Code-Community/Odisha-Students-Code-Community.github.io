# Contributing to Odisha Students Code Community (OSCC) ❤️

Thank you for your interest in contributing to OSCC! Whether you are writing your very first line of code, reporting a typo, improving documentation, or adding a full feature, **your contributions are welcome here**.

---

## 🎯 Code of Conduct
By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please be kind, respectful, and constructive in all discussions, issues, and code reviews.

---

## 🧭 Ways to Contribute

Open-source is not just coding. You can contribute through:

- **Documentation**: Fix typos, add setup guides, clarify instructions.
- **Design & UI**: Improve accessibility, suggest Industrial Brutalist styles, verify mobile layouts.
- **Frontend Code**: Add components, enhance JavaScript interactions, refine styles.
- **Bug Reporting**: Spot a visual glitch or broken link? Open an issue with reproduction details.
- **Issue Triage**: Help fellow students solve questions on existing issues.

---

## 🚀 The 8-Step Contribution Workflow

### Step 1: Find or Open an Issue
- Browse open [Issues](https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io/issues).
- Look for labels like `good first issue` or `help wanted`.
- Leave a comment: *"Hi! I'd like to work on this issue."* Once a maintainer assigns it to you, you're ready to proceed!

### Step 2: Fork the Repository
Click the **Fork** button at the top-right of the repository page to create a copy under your GitHub account.

### Step 3: Clone Your Fork Locally
Open your terminal and run:
```bash
git clone https://github.com/YOUR_USERNAME/Odisha-Students-Code-Community.github.io.git
cd Odisha-Students-Code-Community.github.io
```

### Step 4: Create a Dedicated Branch
Never work directly on the `main` branch. Create a descriptive feature or fix branch:
```bash
git checkout -b feat/add-project-filter
# or
git checkout -b fix/mobile-nav-contrast
```

### Step 5: Make Your Changes & Test Locally
Start a lightweight HTTP server to preview your changes live:
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser. Verify that:
- The page renders cleanly without console errors.
- There is no horizontal overflow on mobile screens.
- Keyboard navigation works as expected.

### Step 6: Commit Your Changes
Keep your commits clear and focused:
```bash
git add .
git commit -m "feat(filter): add difficulty filter chips to projects page"
```

#### Commit Message Format
Use the Conventional Commits format:
- `feat: ...` for a new feature or component
- `fix: ...` for a bug or styling fix
- `docs: ...` for documentation changes
- `style: ...` for CSS / formatting updates
- `refactor: ...` for code reorganization without behavior change

### Step 7: Push to Your Fork
```bash
git push origin feat/add-project-filter
```

### Step 8: Open a Pull Request (PR)
1. Go to the original repository on GitHub: [Odisha-Students-Code-Community.github.io](https://github.com/Odisha-Students-Code-Community/Odisha-Students-Code-Community.github.io).
2. Click **Compare & pull request**.
3. Fill out the PR template describing:
   - What changed
   - Relevant issue number (e.g. `Closes #15`)
   - Any screenshots for visual changes
4. Submit the PR!

---

## 🔍 Code Review Process
- A community maintainer will review your pull request promptly.
- Reviews are opportunities to learn. Don't worry if changes or tweaks are suggested!
- Make any requested adjustments on your local branch, commit, and push again—the PR will update automatically.
- Once approved, your PR will be merged into `main`! 🎉

---

## 💡 Need Help?
If you're stuck, please don't hesitate to ask in the issue discussion thread or reach out in our [WhatsApp Community](https://chat.whatsapp.com/invite/OSCC). We are here to help you succeed!
