#!/usr/bin/env python3
"""
Build Standalone HTML for Book Quiz App
Compiles index.html, style.css, app.js, and all data JSON files into a single,
100% self-contained standalone.html file.

Why this is needed:
On mobile devices (Android / iOS), when opening an HTML file via local file managers
or scoped storage providers (content://, sandboxed file://), browsers block external
relative resources (<link href="style.css">, <script src="app.js">, and fetch("data/..."))
due to strict origin isolation and missing directory mapping.

standalone.html has ZERO external local dependencies. It runs everywhere:
- Android Chrome (via Files app or file manager)
- Mobile Safari
- Desktop browsers via file://
- Any static web server
"""

import os
import sys
import json
import re

def main():
    script_dir = os.path.dirname(os.path.abspath(__file__))
    os.chdir(script_dir)

    index_path = os.path.join(script_dir, "index.html")
    css_path = os.path.join(script_dir, "style.css")
    js_path = os.path.join(script_dir, "app.js")
    data_dir = os.path.join(script_dir, "data")
    output_path = os.path.join(script_dir, "standalone.html")

    print("==================================================")
    print("  Building Standalone Self-Contained Book Quiz HTML")
    print("==================================================")

    # 1. Read index.html
    if not os.path.exists(index_path):
        print(f"Error: {index_path} not found.")
        sys.exit(1)
    with open(index_path, "r", encoding="utf-8") as f:
        html_content = f.read()

    # 2. Read style.css
    if not os.path.exists(css_path):
        print(f"Error: {css_path} not found.")
        sys.exit(1)
    with open(css_path, "r", encoding="utf-8") as f:
        css_content = f.read()

    # 3. Read app.js
    if not os.path.exists(js_path):
        print(f"Error: {js_path} not found.")
        sys.exit(1)
    with open(js_path, "r", encoding="utf-8") as f:
        js_content = f.read()

    # 4. Load all data files from data/
    embedded_books = []
    embedded_questions = {}
    embedded_summaries = {}

    books_file = os.path.join(data_dir, "books.json")
    if os.path.exists(books_file):
        try:
            with open(books_file, "r", encoding="utf-8") as f:
                embedded_books = json.load(f)
            print(f"✓ Loaded books metadata ({len(embedded_books)} book(s))")
        except Exception as e:
            print(f"Warning: Failed reading books.json: {e}")

    if os.path.exists(data_dir):
        for fname in sorted(os.listdir(data_dir)):
            if not fname.endswith(".json"):
                continue
            if fname == "books.json":
                continue

            full_fpath = os.path.join(data_dir, fname)
            try:
                with open(full_fpath, "r", encoding="utf-8") as f:
                    data = json.load(f)

                if fname.endswith("-summaries.json"):
                    book_id = fname[:-len("-summaries.json")]
                    embedded_summaries[book_id] = data
                    print(f"✓ Loaded summaries for '{book_id}' ({len(data)} chapters)")
                else:
                    book_id = fname[:-len(".json")]
                    embedded_questions[book_id] = data
                    print(f"✓ Loaded questions for '{book_id}' ({len(data)} questions)")
            except Exception as e:
                print(f"Warning: Could not load {fname}: {e}")

    # 5. Inline CSS into HTML
    style_tag = f"<style>\n/* INLINED STYLESHEET (style.css) */\n{css_content}\n</style>"
    css_link_pattern = r'<link\s+rel=["\']stylesheet["\']\s+href=["\']style\.css["\']\s*/?>'
    if re.search(css_link_pattern, html_content):
        html_content = re.sub(css_link_pattern, lambda m: style_tag, html_content, count=1)
    else:
        # Fallback: place in <head>
        html_content = html_content.replace("</head>", f"{style_tag}\n</head>")

    # 6. Inline embedded data and JavaScript into HTML
    data_injection = f"""
  <script>
    /* ==========================================================================
       EMBEDDED OFFLINE DATA FOR STANDALONE RUNTIME
       Allows 100% offline & local file manager / content:// URI execution
       ========================================================================== */
    window.STANDALONE_BUILD = true;
    window.EMBEDDED_BOOKS = {json.dumps(embedded_books, ensure_ascii=False)};
    window.EMBEDDED_QUESTIONS = {json.dumps(embedded_questions, ensure_ascii=False)};
    window.EMBEDDED_SUMMARIES = {json.dumps(embedded_summaries, ensure_ascii=False)};
  </script>
  <script>
    /* INLINED APP ENGINE (app.js) */
{js_content}
  </script>
"""

    js_script_pattern = r'<script\s+src=["\']app\.js["\']\s*></script>'
    if re.search(js_script_pattern, html_content):
        html_content = re.sub(js_script_pattern, lambda m: data_injection, html_content, count=1)
    else:
        # Fallback: place before </body>
        html_content = html_content.replace("</body>", f"{data_injection}\n</body>")

    # 7. Write out standalone.html
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(html_content)

    file_size_kb = os.path.getsize(output_path) / 1024
    print("--------------------------------------------------")
    print(f"Successfully compiled standalone HTML file:")
    print(f"Path: {output_path}")
    print(f"Size: {file_size_kb:.1f} KB")
    print("==================================================")
    print("Ready for mobile sync, Android Files app, or direct sharing!")

if __name__ == "__main__":
    main()
