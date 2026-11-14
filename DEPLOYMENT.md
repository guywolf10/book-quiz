# 🚀 Book Quiz App - Zero-Friction Hosting & Mobile Deployment Guide

This guide details all methods for hosting the Book Quiz app for free with a live HTTPS URL, as well as using it 100% offline on any mobile device (Android & iOS) with zero permission or storage issues.

---

## ⚡ Quick Summary: Which Option Should You Choose?

| Method | Speed | Cost | Account Needed? | Ideal For |
| :--- | :---: | :---: | :---: | :--- |
| **1. Netlify Drop** | 10 seconds | Free | No (or 1-click GitHub) | **Instant public HTTPS URL with zero setup** |
| **2. GitHub Pages** | 2 minutes | Free | Yes (GitHub) | Permanent free hosting linked to your git repository |
| **3. Terminal Deploy (`deploy.sh`)** | 10 seconds | Free | Yes (Netlify/Vercel) | Automated terminal workflows (`npx netlify deploy`) |
| **4. Offline `standalone.html`** | Instant | Free | No | **Opening locally on Android/iOS via Files app & Syncthing** |

---

## 🌐 Option 1: Netlify Drop (Recommended: 1-Click Drag & Drop)

Netlify Drop allows you to publish a static web app to a live, production-grade HTTPS URL without touching a terminal or entering payment information.

### Step-by-Step:
1. Generate the distribution bundle by running:
   ```bash
   cd "/home/guyw/book-quiz"
   ./deploy.sh --zip
   ```
   This compiles `book-quiz-dist.zip` (containing `index.html`, `standalone.html`, `style.css`, `app.js`, and the `data/` folder).

2. Open **[https://app.netlify.com/drop](https://app.netlify.com/drop)** in your web browser.

3. Drag and drop the `book-quiz-dist.zip` file onto the dropzone.

4. Netlify will deploy your site in ~5 seconds and output a live HTTPS URL (e.g., `https://brave-curie-817294.netlify.app`).

5. *(Optional)* In the Netlify site settings:
   - Change site name to something custom like `https://my-book-quiz.netlify.app`.
   - Connect any custom domain for free with automatic SSL.

---

## 🐙 Option 2: GitHub Pages (Permanent Free Hosting)

If you maintain a GitHub repository for your quiz or personal projects:

### Step-by-Step:
1. Initialize git and commit your files (if not already done):
   ```bash
   cd "/home/guyw/book-quiz"
   git init
   git add .
   git commit -m "Deploy Book Quiz app"
   ```

2. Create a new repository on GitHub (e.g., `book-quiz`).

3. Push your repository:
   ```bash
   git remote add origin https://github.com/<your-username>/book-quiz.git
   git branch -M main
   git push -u origin main
   ```

4. Enable GitHub Pages:
   - Go to your repository on GitHub.
   - Click **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
   - Click **Save**.

5. Within 1-2 minutes, your app will be live at:
   `https://<your-username>.github.io/book-quiz/`

---

## 💻 Option 3: Terminal Deploy via `deploy.sh` (Netlify / Vercel CLI)

You can run automated deployments directly from your terminal using the interactive helper script:

```bash
cd "/home/guyw/book-quiz"
./deploy.sh
```

### Available CLI Flags:
- `./deploy.sh --drop` — Builds the project, packages the zip, and opens Netlify Drop in your default browser.
- `./deploy.sh --netlify` — Deploys directly using `npx netlify-cli deploy --prod`.
- `./deploy.sh --vercel` — Deploys directly using `npx vercel --prod`.
- `./deploy.sh --zip` — Compiles `standalone.html` and packages `book-quiz-dist.zip`.
- `./deploy.sh --build` — Compiles `standalone.html` only.

---

## 📱 Option 4: Local Mobile Access via `standalone.html` (Zero Hosting Required)

### The Android Scoped Storage Problem & How We Solved It
On modern Android devices (Android 10+ with Scoped Storage), when you open an HTML file via the Files app or a file manager, Android Chrome opens the file using a sandboxed `content://` URI (e.g., `content://com.google.android.apps.nbu.files.provider/...`).

Because `content://` URIs lack a standard filesystem directory structure, Android Chrome **strictly blocks** relative imports:
- `<link rel="stylesheet" href="style.css">` fails to load.
- `<script src="app.js"></script>` fails to execute.
- `fetch("data/books.json")` fails with CORS/Network security errors.

### The Solution: `standalone.html`
We created `build_standalone_html.py`, which compiles all stylesheets, JavaScript engine logic, and embedded books/questions/summaries data into a single, self-contained file:
👉 `/home/guyw/book-quiz/standalone.html`

### How to Use on Your Phone:
1. **Via Syncthing (Automatic):**
   - Because this folder resides in your `Second Brain` directory, Syncthing automatically synchronizes `standalone.html` to your phone.
   - Open your mobile file manager (or Syncthing folder), tap `standalone.html`, and select your browser (Chrome, Firefox, Kiwi, Brave, Safari).
   - The app runs natively with full functionality, zero permission errors, and 100% offline capability.

2. **Add to Home Screen (Progressive Web App experience):**
   - **Android Chrome:** Tap the 3-dot menu (⋮) → **Add to Home screen** (or "Install app").
   - **iOS Safari:** Tap the Share button (⎋) → **Add to Home Screen**.
   - The Book Quiz icon will appear on your phone's home screen and launch fullscreen like a native app.

3. **Rebuilding Standalone HTML after adding books:**
   Whenever you add new questions or books to `data/`, simply run:
   ```bash
   python3 build_standalone_html.py
   ```
   Or:
   ```bash
   ./deploy.sh --build
   ```
