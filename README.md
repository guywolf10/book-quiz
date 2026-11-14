# 📖 Book Quiz - Active Reading & Recall App

A lightweight, modern web application designed for active recall, self-testing, and deep comprehension of non-fiction books. Built with zero dependencies (pure HTML5, CSS3, and JavaScript).

---

## 🚀 How to Run

### Method 1: Instant Launch (Recommended)
In the terminal, run:
```bash
cd "/home/guyw/book-quiz"
./launch.sh
```
This starts a local server on `http://localhost:8080` and opens it in your default browser.

### Method 2: Python HTTP Server
```bash
cd "/home/guyw/book-quiz"
python3 -m http.server 8080
```
Then navigate to [http://localhost:8080](http://localhost:8080).

### Method 3: Direct File Opening (Desktop)
You can open `index.html` directly in any web browser (`file:///home/guyw/book-quiz/index.html`). 

### Method 4: Mobile Access (Android & iOS)
For mobile devices, open `standalone.html` instead of `index.html`:
* **Why `standalone.html`?** On Android, when files are opened from the Files app or Syncthing, Chrome uses sandboxed `content://` URIs which block external `.css` and `.js` files.
* **`standalone.html` is 100% self-contained**: All styles, application logic, chapter summaries, and quiz questions are compiled into a single file with zero external dependencies. It works flawlessly offline in airplane mode.
* Recompile anytime via `python3 build_standalone_html.py` or `./deploy.sh --build`.

### Method 5: 1-Click Free Web Hosting (Netlify / GitHub Pages)
To host online with a public HTTPS URL (e.g. for sharing with friends or opening on any device):
```bash
./deploy.sh
```
See [DEPLOYMENT.md](file:///home/guyw/book-quiz/DEPLOYMENT.md) for full instructions on 1-click Netlify Drop, GitHub Pages, and Netlify/Vercel CLI.

---

## 📚 Currently Included Books

* ***The Seven Principles for Making Marriage Work*** (John Gottman & Nan Silver, 2015)
  * **35 comprehensive questions & 13 chapter study guides**.
  * Covers the Seattle Love Lab, the 5:1 ratio, the Four Horsemen & antidotes, physiological flooding, Love Maps, Fondness & Admiration, turning toward, solvable vs. perpetual problems, repair attempts, the two-circle compromise, the Dream Catcher method, and the Magic Six Hours.

* ***Never Split the Difference*** (Chris Voss & Tahl Raz, 2016)
  * **44 tactical questions & 11 chapter study guides**.
  * Covers System 1 vs. System 2 behavioral psychology, mirror technique (isopraxism), late-night FM DJ voice, tactical empathy, labeling, the power of "No", triggering "That's Right", reality bending & anchors, calibrated "How/What" questions, the 7-38-55 rule, the Ackerman bargaining model, and finding Black Swans.

---

## 🛠️ Adding New Books

You can add any other book using either the UI or the file system:

### Option A: Via the Web UI (No coding required)
1. Click **+ Add Book** in the top navigation bar.
2. Either drag & drop a questions JSON file or paste the questions JSON directly.
3. The book will immediately appear in your library and persist in your browser's local storage.

### Option B: Adding Directly to the Repository
1. Create a questions file in `data/<book-id>.json` (e.g., `data/atomic-habits.json`).
2. Add the book metadata entry to `data/books.json`:
```json
{
  "id": "atomic-habits",
  "title": "Atomic Habits",
  "author": "James Clear",
  "year": 2018,
  "description": "An easy and proven way to build good habits and break bad ones.",
  "icon": "⚡",
  "dataFile": "data/atomic-habits.json",
  "totalQuestions": 25,
  "chapters": [
    { "id": "ch1", "name": "The Fundamentals" },
    { "id": "ch2", "name": "The 1st Law: Make It Obvious" }
  ]
}
```

---

## 📋 Question JSON Schema

Every question object conforms to the following schema:

```json
{
  "id": "q1",
  "chapterId": "ch1",
  "chapterName": "Ch 1: Inside the Seattle Love Lab & Marriage Myths",
  "difficulty": "medium",
  "type": "concept",
  "question": "What percentage of marital conflicts are perpetual according to Gottman?",
  "options": [
    "About 10%",
    "Around 31%",
    "69%",
    "99%"
  ],
  "correctAnswer": 2,
  "explanation": "Gottman discovered that 69 percent of all marital conflicts are perpetual problems...",
  "citation": "Chapter 8: Perpetual Problems"
}
```

* `difficulty`: `"easy"`, `"medium"`, or `"hard"`.
* `correctAnswer`: 0-indexed integer corresponding to the index in the `options` array (`0` for A, `1` for B, `2` for C, `3` for D).
* `citation`: Optional book reference, chapter, or section name.

---

## ⌨️ Keyboard Shortcuts (During Quiz)
* `1` or `A`: Select Option A
* `2` or `B`: Select Option B
* `3` or `C`: Select Option C
* `4` or `D`: Select Option D
* `Enter` or `Space`: Proceed to next question / finish quiz
