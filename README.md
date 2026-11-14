# 📖 Book Quiz — Active Reading & Recall Web App

A lightweight, zero-dependency web application designed for active recall, self-testing, and deep retention of non-fiction books. Built with pure HTML5, modern CSS3, and Vanilla JavaScript—hosted exclusively on **GitHub Pages**.

---

## 🌟 Key Features

* **🧠 Deep, Substantive Questions:** Scenario-based dilemmas, empirical counter-intuitive findings, and real-world tactical applications—no superficial trivia.
* **📖 Built-in Chapter Study Guides:** In-depth summaries for every chapter featuring *The Big Idea*, *Counter-Intuitive Truths*, *Psychological Mechanics*, *Key Exercises & Blueprints*, and *Core Takeaways*.
* **🎯 Practice Mode vs. Exam Mode:**
  * **Practice Mode:** Immediate explanations and book citations after each answer to solidify retention.
  * **Exam Mode:** Simulates a formal test; grades your score, generates a chapter-by-chapter mastery breakdown, and offers full post-quiz review.
* **🔁 Targeted Retesting:** One-click *"Practice Missed Only"* button to drill into questions you got wrong.
* **🔍 Granular Topic Filtering:** Focus on specific chapters (e.g., just *Love Maps* or *The Ackerman Model*) or test the entire book.
* **⌨️ Keyboard Navigation:** Answer instantly using keys `1`–`4` or `A`–`D`, and advance with `Enter` or `Space`.
* **📱 100% Mobile Optimized:** Responsive layout, minimum 44px–48px touch targets, smooth scroll-snapping navigation, zero tap latency, and WCAG AAA contrast in light and dark mode.
* **🌐 Native Static Architecture:** Loads asynchronously via standard `fetch()` with zero build steps or package managers.

---

## 📚 Included Books

### 1. *The Seven Principles for Making Marriage Work* (John Gottman, Ph.D. & Nan Silver, 2015)
* **97 Deep Questions & 13 Chapter Study Guides**
* **Core Topics:**
  * The Seattle Love Lab methodology, continuous rating dials, and the 91% divorce prediction rate.
  * Debunking marriage myths: why *quid pro quo* tally-keeping is toxic, why conflict avoiders thrive, and why affairs are a symptom rather than the root cause.
  * The Sound Relationship House, Trust & Commitment walls, and Negative Sentiment Override (*"The Roach Motel for Lovers"*).
  * The Four Horsemen (*Criticism, Contempt, Defensiveness, Stonewalling*) and their specific psychological antidotes.
  * Physiological Flooding (>100 bpm, fight-or-flight prefrontal shutdown) and gender cardiovascular reactivity (85% male stonewallers).
  * Principle 1 (Love Maps & the *"Who Am I?"* exercise); Principle 2 (Fondness & Admiration, scanning for positives); Principle 3 (Turning Toward, bids, and the anatomy of Sadness as loss, Anger as a blocked goal, and Fear as unsafety).
  * Principle 4 (Accepting influence; 81% divorce reduction in men; Gottman Island Survival Game); Solvable vs. Perpetual conflicts (the 69% philosophy; Dan Wile's unsolvable problems thesis); Principle 5 (5-step problem solving, 20-min soothing break without ruminating, Two Concentric Circles, processing regrettable incidents).
  * Solvable issues (in-law solidarity, housework as emotional respect, game theory sexual dynamics where rewarding "no" raises frequency); Principle 6 (Uncovering hidden life dreams, 3 levels of honoring dreams); Principle 7 (Four Pillars of Shared Meaning & intentional Rituals of Connection); Afterword (The 6-second kiss, State of the Union blueprint, Marital Poop Detector).

### 2. *Never Split the Difference: Negotiating As If Your Life Depended On It* (Chris Voss & Tahl Raz, 2016)
* **62 Tactical Questions & 11 Chapter Study Guides**
* **Core Topics:**
  * Behavioral economics in crisis negotiation: System 1 vs. System 2, Kahneman & Tversky, why traditional rational bargaining fails.
  * The 3 Voice Tones: Late-Night FM DJ Voice (downward calm inflection) vs. Positive/Playful vs. Direct/Assertive.
  * Isopraxism linguistic mirroring (repeating 1–3 critical words; the Chris Watts Chase Manhattan standoff).
  * Tactical Empathy & Labeling (*"It seems like...", "It sounds like..."* to deactivate amygdala arousal); the Accusation Audit and avoiding the negation trap.
  * The 3 Types of "Yes" (Counterfeit, Confirmation, Commitment) and the psychological power of "No" for autonomy; *"Is now a bad time to talk?"*.
  * Triggering *"That's Right"* vs. the polite brush-off *"You're Right"*.
  * Reality Bending: Prospect Theory, loss aversion, arbitrary deadlines (e.g. Haitian kidnapping weekend party schedules), why "Fair" is an emotional weapon, extreme anchoring, and range offers.
  * Calibrated Questions: Starting with "What" and "How" (never accusatory "Why"); the calibrated no: *"How am I supposed to do that?"*; proof of life filters.
  * Guaranteeing execution: The 7-38-55 Rule, the Rule of Three, spotting liars (Pinocchio effect, pronoun distancing), and uncovering hidden deal-killers.
  * The 3 Negotiator Types (Accommodator, Assertive, Analyst) and their reactions to dynamic silence; the 6-step Ackerman Bargaining Model (65% → 85% → 95% → 100% with precise non-round numbers and non-cash items).
  * Finding Black Swans: Unknown unknowns, the 3 types of leverage (Positive, Negative, Normative), and uncovering the counterpart's "religion" (Dwight Watson tractor standoff).
  * The Negotiation One Sheet 5-part preparation framework.

---

## 🚀 GitHub Pages Deployment

This repository is designed to run directly on **GitHub Pages**:

1. Link your remote repository:
   ```bash
   cd ~/book-quiz
   git remote add origin git@github.com:<your-username>/book-quiz.git
   git push -u origin main
   ```
2. Enable Pages in your GitHub repository:
   * Go to **Settings → Pages**
   * **Source**: `Deploy from a branch`
   * **Branch**: `main` / `/(root)`
   * Click **Save**
3. In under a minute, the site is live at:
   `https://<your-username>.github.io/book-quiz/`

To update questions, summaries, or styling at any time, simply commit and push to `main`.

---

## 🛠️ Adding New Books

You can add any other book (e.g., *Atomic Habits*, *Thinking, Fast and Slow*, *Scattered Minds*) using either method:

### Method A: Through the Web UI (Zero Code)
1. Click **+ Add Book** in the top navigation bar.
2. Drag and drop your questions JSON file or paste the questions JSON directly.
3. The book will immediately appear in your library and persist in your browser's local storage.

### Method B: Directly in the Repository
1. Create your questions file in `data/<book-id>.json` (and optionally `data/<book-id>-summaries.json`).
2. Register the book in `data/books.json`:
```json
{
  "id": "atomic-habits",
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018,
  "description": "An easy and proven way to build good habits and break bad ones.",
  "icon": "⚡",
  "dataFile": "data/atomic-habits.json",
  "totalQuestions": 30,
  "chapters": [
    { "id": "ch1", "name": "The Fundamentals" },
    { "id": "ch2", "name": "The 1st Law: Make It Obvious" }
  ]
}
```
3. Commit and push:
```bash
git add .
git commit -m "Add Atomic Habits"
git push origin main
```

---

## 📋 Question JSON Schema

Every question object conforms to this structure:

```json
{
  "id": "q1",
  "chapterId": "ch1",
  "chapterName": "Ch 1: The New Rules",
  "difficulty": "medium",   // "easy" | "medium" | "hard"
  "type": "concept",        // "concept" | "scenario"
  "question": "Why does Chris Voss state that 'splitting the difference' is the worst possible outcome?",
  "options": [
    "Because it takes twice as long to negotiate.",
    "Because it is an arbitrary compromise driven by fear rather than truth, analogous to wearing one black shoe and one brown shoe.",
    "Because FBI guidelines legally forbid financial compromises.",
    "Because it guarantees the counterpart will retaliate."
  ],
  "correctAnswer": 1,       // 0-indexed integer (0 = A, 1 = B, 2 = C, 3 = D)
  "explanation": "Voss argues that compromise ('splitting the difference') is often a lazy, fear-driven concession...",
  "citation": "Chapter 6: Bend Their Reality"
}
```

---

## 📄 License & Philosophy
Built for personal active recall, deep reading comprehension, and lifelong learning. Zero telemetry, zero external trackers, and completely open source.
