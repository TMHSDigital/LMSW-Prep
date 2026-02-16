# LMSW-Prep

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://tmhsdigital.github.io/LMSW-Prep/)
[![Vanilla JS](https://img.shields.io/badge/vanilla-HTML%20%7C%20CSS%20%7C%20JS-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A single-page practice exam for the **New York Licensed Master Social Worker (LMSW)** exam. Content is aligned with the **ASWB 2026 Master's blueprint** (Values and Ethics, Assessment and Planning, Intervention and Practice). No account or build step; run locally or use the hosted version.

---

## Live demo

**[Open the practice exam](https://tmhsdigital.github.io/LMSW-Prep/)**

---

## Features

- **ASWB 2026 alignment** – Weighted draw by domain (35% / 33% / 32%). Optional filter by domain. Supports 3- and 4-option questions.
- **Quiz options** – Choose 10, 20, or 50 questions per round from the start panel.
- **Randomized quizzes** – Questions and answer order shuffled each round.
- **Immediate feedback** – Correct/incorrect plus rationale; optional analytic rationales per question.
- **Hints** – One hint per question without giving away the answer.
- **Progress** – Determinate progress bar and "Question X of N."
- **Mastery tracking** – Session and all-time stats (by domain) in results; stored in localStorage.
- **Keep practicing** – "Another quiz" for a new round; "Reload page" for a fresh start.
- **Mobile-friendly** – Responsive layout, touch-friendly targets.
- **Accessible** – Semantic HTML, ARIA live regions, focus management, fieldset/legend.
- **PWA** – Installable and works offline (manifest + service worker).

---

## Tech stack

- **HTML5** – Structure and semantics.
- **CSS3** – Flexbox, custom properties, mobile-first responsive layout. Medical/educational palette (blues, grays, white) with clear correct/incorrect states.
- **JavaScript (ES5-style)** – No frameworks or build step. Logic includes Fisher–Yates shuffle for questions and choices, simple state for the current quiz and answers.

Suitable for static hosting (e.g. GitHub Pages); open `index.html` in a browser or serve the folder with any static server.

---

## Project structure

```
LMSW-Prep/
  index.html      # Start options, quiz UI, results panel
  style.css       # Layout, theme, responsive, transitions
  script.js       # Weighted draw, state, mastery (localStorage), PWA registration
  questions.js    # Question pool (25 items, 3 domains, 3- and 4-option)
  manifest.json   # PWA manifest
  sw.js           # Service worker for offline cache
  CONTRIBUTING.md # Item-writing rubric and 2026 alignment
  LICENSE
  README.md
```

---

## Running locally

1. Clone the repo:
   ```bash
   git clone https://github.com/TMHSDigital/LMSW-Prep.git
   cd LMSW-Prep
   ```
2. Open `index.html` in a browser, or serve the directory, for example:
   - **Python 3:** `python -m http.server 8000` then visit `http://localhost:8000`
   - **Node (npx):** `npx serve` then use the URL shown

No install or build step is required.

---

## How it works

- On load (or when you click "Another 10 questions"), the app shuffles the full question pool and selects 10 without replacement. For each of those 10, the four answer choices are shuffled so the correct answer’s position is random.
- You answer one question at a time. After you select an option, the correct and your chosen answer are styled and the rationale is shown. "Next question" (or "See results" on the last one) advances the quiz.
- Score is computed by comparing your selected choice (by original index) to the question’s correct index. The results screen shows your score and short feedback; "Another quiz" starts a new random set (same options) in the same session.

---

## Question domains (ASWB 2026)

Content follows ASWB Master’s level areas:

| Domain                     | Weight | Description |
|----------------------------|--------|-------------|
| Values and Ethics         | 35%    | Legal/ethical standards, social justice, anti-oppressive practice, self-determination |
| Assessment and Planning   | 33%    | Biopsychosocial and cultural formulation, risk assessment, collaborative goal setting |
| Intervention and Practice | 32%    | Evidence-based interventions, case management, practice evaluation |

---

## License

MIT. See [LICENSE](LICENSE). Copyright (c) 2026 TM Hospitality Strategies.

---

## Disclaimer

This tool is for practice only. It is not affiliated with ASWB or any licensing board. Content is illustrative; exam content and formats may change. Use official study materials and board resources for exam preparation and eligibility.
