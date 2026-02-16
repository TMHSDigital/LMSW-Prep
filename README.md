# LMSW-Prep

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://tmhsdigital.github.io/LMSW-Prep/)
[![Vanilla JS](https://img.shields.io/badge/vanilla-HTML%20%7C%20CSS%20%7C%20JS-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A single-page practice exam for the **New York Licensed Master Social Worker (LMSW)** exam. Questions align with ASWB Master's level content areas: Human Development, Assessment, Interventions, and Professional Ethics. No account or build step required; run locally or use the hosted version.

---

## Live demo

**[Open the practice exam](https://tmhsdigital.github.io/LMSW-Prep/)**

---

## Features

- **Randomized quizzes** – Each session draws 10 questions at random from a pool of 24+; answer order is shuffled so the correct option is not in a fixed position.
- **Immediate feedback** – After selecting an answer, the correct option is highlighted in green and incorrect in red, with a short rationale.
- **Hints** – A hint is available per question to steer thinking without giving away the answer.
- **Progress** – Progress bar and "Question X of 10" so you know how far you are.
- **Keep practicing** – After finishing 10 questions, use "Another 10 questions" to get a new set without leaving the page; repeat as needed.
- **Mobile-friendly** – Layout and tap targets are sized for phones and tablets.
- **Accessible** – Semantic HTML, ARIA where useful, keyboard and screen-reader friendly.

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
  index.html    # Single page: quiz UI and results panel
  style.css     # Layout, theme, responsive and state styles
  script.js     # Quiz logic: randomization, state, rendering, scoring
  questions.js  # Question pool (24 questions across 4 ASWB categories)
  LICENSE       # MIT
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
- Score is computed by comparing your selected choice (by original index) to the question’s correct index. The results screen shows your score and short feedback; "Another 10 questions" starts a new random set in the same session.

---

## Question categories

Content follows ASWB Master’s level areas:

| Category             | Description |
|----------------------|-------------|
| Human Development    | Theories (e.g. Erikson, Piaget, attachment, moral development), culture and development |
| Assessment           | Risk, biopsychosocial and cultural formulation, instruments, strengths, somatic presentations |
| Interventions        | Motivational interviewing, behavioral/skills work, crisis, trauma-informed care, contracts, family systems |
| Professional Ethics | NASW Code, informed consent, documentation, dual relationships, termination, confidentiality |

---

## License

MIT. See [LICENSE](LICENSE). Copyright (c) 2026 TM Hospitality Strategies.

---

## Disclaimer

This tool is for practice only. It is not affiliated with ASWB or any licensing board. Content is illustrative; exam content and formats may change. Use official study materials and board resources for exam preparation and eligibility.
