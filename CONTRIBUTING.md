# Contributing to LMSW-Prep

## ASWB 2026 alignment

This app uses the three-domain Master's blueprint:

- **Values and Ethics** (35%): Legal/ethical standards, social justice, anti-oppressive practice, self-determination.
- **Assessment and Planning** (33%): Biopsychosocial data gathering, risk assessment, collaborative goal setting.
- **Intervention and Practice** (32%): Evidence-based interventions, case management, practice evaluation.

Each question in `questions.js` must have a `domain` set to one of these three strings. The app uses weighted random selection so session mix approximates these percentages when all domains are selected.

## Item-writing rubric

Use this when adding or revising questions.

| Component | Do | Avoid |
|-----------|----|--------|
| **Stem** | Brief scenario, present tense, ends with a clear question; include social worker and setting | "Window dressing," minilectures, vague language (e.g. "verbalize"), names/initials that don't affect the answer |
| **Key** | One clearly defensible best answer from verifiable social work knowledge | Opinion-based keys, ambiguous wording, wording that overlaps with a distractor |
| **Distractors** | Plausible, similar in length and structure; reflect common mistakes | "All of the above," "None of the above," negative phrasing (NOT/EXCEPT) |
| **Language** | Person-first (e.g. "a client with..." not "a borderline client"); include demographics only when relevant | Binary "his or her" where "they" works; microaggressions or biased language |

Prefer **scenario-based** items: a short vignette ending with "What should the social worker do FIRST?" or "Which intervention is MOST appropriate?" rather than definitional recall.

## Question format in `questions.js`

```javascript
{
  id: 26,
  category: "Short label",        // optional; can match domain
  domain: "Values and Ethics",     // required: one of the three 2026 domains
  question: "Stem text ending with a question?",
  choices: ["A", "B", "C"],        // 3 or 4 options; 3 preferred for 2026
  correctIndex: 0,                 // 0-based index of the key
  rationale: "Why the key is correct.",
  hint: "Process hint that doesn't give away the answer.",
  distractorRationales: [          // optional: one string per choice (same order as choices)
    "Why A is wrong",
    null,                          // use null for the correct option
    "Why C is wrong"
  ]
}
```

## Analytic rationales

For stronger learning, add `distractorRationales`: an array with one string per choice (same order as `choices`). Use `null` for the correct option. The UI will show "Why the others are wrong" after the main rationale when this field is present.

## Code and PRs

- Keep the stack vanilla (no build step). Changes should work when served as static files.
- Test locally (e.g. `npx serve` or open `index.html`) and, if possible, on GitHub Pages.
- For new features, keep accessibility in mind (keyboard, screen readers, ARIA where needed).
