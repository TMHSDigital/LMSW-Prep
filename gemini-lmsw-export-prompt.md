# Gemini prompt: LMSW practice question bank export

Copy the relevant section below into Gemini.

---

## 1. New question export (full format)

Use this when generating new questions from scratch. Output must be **valid JavaScript**: a single array of question objects.

- **Format:** Three-option multiple choice. Every item must have exactly 3 entries in `choices`.
- **Domains (ASWB 2026):** `"Values and Ethics"` (~35%), `"Assessment and Planning"` (~33%), `"Intervention and Practice"` (~32%).
- **Object shape:** `id`, `category` (same as domain), `domain`, `question`, `choices: [ "A text", "B text", "C text" ]`, `correctIndex` (0/1/2), `rationale`, `hint`, optional `distractorRationales`.
- **Output:** Raw array only: start with `[`, end with `];`. Double-quote strings; no trailing commas. Every object must have a full `choices` array of 3 strings.

---

## 2. Fill choices for existing items (one-off)

Use this when you have question objects that have **stems, rationales, and correct answer (letter or index)** but **missing or placeholder `choices`** (e.g. "Option A", "Option B", "Option C"). Source format may use `options:,` and `answer: "A"` | `"B"` | `"C"` instead of `choices` and `correctIndex`.

**Instructions for Gemini:**

1. For each question object you are given:
   - Keep `id`, `domain`, `question`, `rationale`, `hint` unchanged.
   - Add or replace `choices` with an array of **exactly 3 strings**: the correct answer (in full) plus two plausible distractors. Order them so the correct answer is at index 0, 1, or 2 as specified.
   - If the source has `answer: "A"` | `"B"` | `"C"`, set `correctIndex` to 0, 1, or 2 accordingly. If the source has `correctIndex`, keep it and ensure the choice at that index is the correct one in your new `choices` array.
   - Set `category` to the same value as `domain` if missing.
2. Output **only** valid JavaScript: a single array of objects. Use double quotes for strings; escape internal double quotes as `\"`. No markdown code fence that would break copy-paste, or one code block containing the raw array.
3. Do not omit or truncate any field. Every object must end with a complete `choices` array of 3 strings.

**Example input shape (source):**

```javascript
{
  id: 27,
  domain: "Values and Ethics",
  question: "A 35-year-old client discloses...",
  options:,   // empty
  answer: "B",
  rationale: "...",
  hint: "..."
}
```

**Example output shape (app):**

```javascript
{
  id: 27,
  category: "Values and Ethics",
  domain: "Values and Ethics",
  question: "A 35-year-old client discloses...",
  choices: [
    "Report the historical abuse to child protective services.",
    "Honor confidentiality; no current child at risk.",
    "Obtain written consent before deciding."
  ],
  correctIndex: 1,
  rationale: "...",
  hint: "..."
}
```

Paste the array of question objects (from LMSW Practice Question Bank Generation.txt or from questions.js) and ask: "Fill in the `choices` array for each object and convert `answer` to `correctIndex` where needed. Output valid JavaScript only."
