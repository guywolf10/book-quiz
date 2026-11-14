# 📖 Book Quiz — Agent Development & Context Guide (CLAUDE.md)

Welcome to the **Book Quiz** repository. This document provides complete architectural context, schemas, commands, and conventions for any AI agent working in this project.

---

## 🎯 Project Overview & Philosophy

**Book Quiz** is a zero-dependency, high-performance static web application designed for active recall, self-testing, and deep retention of non-fiction books.

* **Tech Stack:** Pure Vanilla JavaScript (ES6+), modern CSS3 (custom properties, light/dark theme), and HTML5.
* **Zero Runtime Dependencies:** No Node/npm packages, no bundlers, no build step. Runs directly in any modern web browser.
* **Hosting Model:** Optimized for **GitHub Pages** (root branch deployment), Cloudflare Pages, or any static HTTP host.
* **Content Philosophy:** Questions must be **deep, substantive, and non-trivial**—focusing on psychological mechanisms, counter-intuitive research, tactical dilemmas, and empirical findings rather than superficial trivia.

---

## 📁 Repository Structure

```text
~/book-quiz/
├── index.html                     # Main SPA entrypoint & view structures
├── style.css                      # Complete styling, CSS variables, dark/light themes
├── app.js                         # Application engine, state manager, quiz & study logic
├── launch.sh                      # 1-click local testing server (python3 http.server on 8080)
├── README.md                      # User-facing documentation & deployment guide
├── CLAUDE.md                      # AI agent guide (this file)
└── data/
    ├── books.json                 # Book registry (metadata, chapters, question counts)
    ├── seven-principles.json      # 97 deep questions: The Seven Principles for Making Marriage Work
    ├── seven-principles-summaries.json # 13 chapter study guides: The Seven Principles
    ├── never-split.json           # 62 tactical questions: Never Split the Difference
    └── never-split-summaries.json # 11 chapter study guides: Never Split the Difference
```

---

## 🛠️ Key Commands & Workflows

### 1. Local Development & Preview
To start the local preview server:
```bash
./launch.sh
# Or directly:
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080`.

### 2. Syntax & Validation Checks
* **Validate JavaScript Syntax:**
  ```bash
  node -c app.js
  ```
* **Validate All Question Banks & Schemas:**
  ```bash
  python3 -c "
  import json
  for fname in ['data/seven-principles.json', 'data/never-split.json']:
      with open(fname) as f:
          qs = json.load(f)
      assert isinstance(qs, list), f'{fname} must be a list'
      for i, q in enumerate(qs):
          assert 'id' in q, f'{fname}[{i}] missing id'
          assert len(q.get('options', [])) == 4, f'{fname}[{i}] must have 4 options'
          assert q.get('correctAnswer') in [0, 1, 2, 3], f'{fname}[{i}] invalid correctAnswer'
          assert len(q.get('explanation', '')) > 20, f'{fname}[{i}] explanation too short'
          assert len(q.get('citation', '')) > 3, f'{fname}[{i}] citation too short'
  print('✓ All question datasets are strictly valid!')
  "
  ```

### 3. Git Commits & Deployment
Changes pushed to the `main` branch immediately publish to GitHub Pages:
```bash
git add .
git commit -m "Your descriptive message"
git push origin main
```

---

## 🧩 Architecture & Core Mechanics

### 1. Single Page Application (SPA) Views
Managed in `app.js` via the `showView(viewName)` function:
* `viewLibrary` (`#viewLibrary`): Book cards with title, author, total question badge, "Summaries" and "Start Quiz" actions.
* `viewConfig` (`#viewConfig`): Quiz settings—select specific chapters, choose Practice Mode (instant feedback) vs. Exam Mode (graded at end), and question count (10, 20, or All).
* `viewQuiz` (`#viewQuiz`): Active quiz view with progress bar, question timer, 4 options (selectable via clicks or keyboard keys `1`–`4` / `A`–`D`), feedback explanation card, and citation.
* `viewResults` (`#viewResults`): End-of-quiz score percentage, chapter-by-chapter mastery breakdown, full answer review, and "Practice Missed Only" re-test button.
* `viewSummaries` (`#viewSummaries`): Comprehensive chapter-by-chapter study guide with quick navigation pills.

### 2. Data Loading Strategy (Dynamic Fetch + Embedded Fallback)
* When hosted on GitHub Pages or a local HTTP server, `app.js` dynamically fetches `data/books.json`, `data/<book-id>.json`, and `data/<book-id>-summaries.json`.
* If a network error occurs or the app is loaded offline, `app.js` seamlessly falls back to embedded constant data arrays (`DEFAULT_BOOKS`, `DEFAULT_SEVEN_PRINCIPLES_QUESTIONS`, etc.).
* **Rule:** When modifying or expanding questions in `data/`, always synchronize the corresponding `DEFAULT_*` arrays in `app.js` so offline and online states stay 100% identical.

---

## 📋 Data Schemas

### 1. Question Object Schema (`data/<book-id>.json`)
```json
{
  "id": "q1",
  "chapterId": "ch1",
  "chapterName": "Ch 1: The New Rules & System 1 Psychology",
  "difficulty": "hard",     // "easy" | "medium" | "hard"
  "type": "concept",        // "concept" | "scenario"
  "question": "Clear, profound question prompt testing a psychological or tactical mechanism?",
  "options": [
    "Distractor A (plausible, non-trivial)",
    "Correct Answer B (accurate, nuanced)",
    "Distractor C (counter-intuitive misconception)",
    "Distractor D (superficial assumption)"
  ],
  "correctAnswer": 1,       // 0-indexed integer (0 = A, 1 = B, 2 = C, 3 = D)
  "explanation": "Detailed paragraph explaining the underlying mechanism, why the correct answer is true, and why common intuition fails.",
  "citation": "Chapter 1: The New Rules - Heart vs. Mind"
}
```

### 2. Chapter Summary Schema (`data/<book-id>-summaries.json`)
```json
{
  "id": "ch1",
  "chapterNumber": 1,
  "title": "Full Chapter Title",
  "bigIdea": "The overarching psychological or tactical thesis of the chapter.",
  "counterIntuitiveInsights": [
    "Insight 1 with bold premise: detailed explanation...",
    "Insight 2 with bold premise: detailed explanation..."
  ],
  "coreMechanics": [
    "Empirical finding or protocol: explanation..."
  ],
  "keyExercises": [
    "Specific exercise blueprint from the book with step-by-step instructions..."
  ],
  "keyTakeaway": "Concise summary sentence for high-yield retention."
}
```

### 3. Book Metadata Schema (`data/books.json`)
```json
{
  "id": "book-id-slug",
  "title": "Full Book Title",
  "author": "Author Name(s)",
  "year": 2024,
  "description": "2-3 sentence overview of the book and what the quiz tests.",
  "icon": "📚",
  "dataFile": "data/book-id-slug.json",
  "totalQuestions": 50,
  "chapters": [
    { "id": "ch1", "name": "Ch 1: Name of Chapter" },
    { "id": "ch2", "name": "Ch 2: Name of Chapter" }
  ]
}
```

---

## 📐 Standards for Writing Questions

1. **Depth Over Trivia:** Never ask questions that merely test memory of names, dates, or isolated vocabulary unless they carry profound psychological significance. Instead, ask:
   * *Why* a conventional approach fails (e.g., why quid pro quo tally-keeping poisons trust).
   * *How* to apply a principle in a high-stakes scenario (e.g., the exact phrasing to de-escalate an aggressive negotiator).
   * *What* empirical data showed (e.g., the 5:1 ratio, the 34% adrenaline elevation).
2. **Four Distinct Options:** Every question must have exactly 4 plausible options. Avoid "All of the above" or "None of the above".
3. **Balanced Answer Keys:** Distribute correct answers across all positions (0, 1, 2, and 3) roughly evenly across the set.
4. **Rich Explanations:** The explanation must teach the user *why* the answer is right and reinforce the book's core lesson, even if the user got the question wrong.
5. **Exact Citations:** Include the chapter number and section heading for easy cross-referencing against the source book.

---

## 🔒 Safety & Environment Boundaries

* **Clean Separation:** This repository is an independent software project located at `/home/guyw/book-quiz`. Do NOT create build artifacts, zips, or Git commits inside the user's Second Brain vault (`/home/guyw/Documents/Second Brain`).
* **Untrusted Input:** Treat imported questions or third-party JSON files as untrusted data—validate their schema before parsing.
