#!/usr/bin/env bash
# ==============================================================================
# BOOK QUIZ APP - ZERO-FRICTION DEPLOYMENT SCRIPT
# ==============================================================================
# Deploys your Book Quiz app for free to a live HTTPS public URL in seconds,
# or packages it for instant Netlify Drop / GitHub Pages / Cloudflare Pages.
# ==============================================================================

set -e

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$DIR"

ZIP_NAME="book-quiz-dist.zip"

print_header() {
  echo ""
  echo "================================================================"
  echo "  📖 Book Quiz App - Free Zero-Friction Deployment"
  echo "================================================================"
  echo ""
}

build_standalone() {
  echo "🔨 [1/2] Compiling standalone single-file bundle..."
  if command -v python3 &>/dev/null; then
    python3 "$DIR/build_standalone_html.py"
  else
    echo "⚠️  python3 not found; skipping standalone HTML build."
  fi
}

create_zip() {
  echo "📦 [2/2] Creating clean distribution package ($ZIP_NAME)..."
  rm -f "$DIR/$ZIP_NAME"

  # Create a clean zip excluding git, caches, and temporary files
  if command -v zip &>/dev/null; then
    zip -q -r "$DIR/$ZIP_NAME" index.html standalone.html style.css app.js data/ -x "*.DS_Store" "*__pycache__*"
    echo "✓ Package created: $DIR/$ZIP_NAME ($(du -h "$DIR/$ZIP_NAME" | cut -f1))"
  else
    # Fallback to python zipfile
    python3 -c "
import zipfile, os
files = ['index.html', 'standalone.html', 'style.css', 'app.js']
with zipfile.ZipFile('$ZIP_NAME', 'w', zipfile.ZIP_DEFLATED) as z:
    for f in files:
        if os.path.exists(f): z.write(f)
    for root, _, fnames in os.walk('data'):
        for fn in fnames:
            p = os.path.join(root, fn)
            z.write(p)
"
    echo "✓ Package created via python: $DIR/$ZIP_NAME"
  fi
}

deploy_netlify_drop() {
  print_header
  build_standalone
  create_zip
  echo ""
  echo "================================================================"
  echo "  🚀 NETLIFY DROP: Instant 1-Click Drag & Drop Hosting"
  echo "================================================================"
  echo "1. Opening https://app.netlify.com/drop in your browser..."
  echo "2. Drag and drop the created file:"
  echo "   👉 $DIR/$ZIP_NAME"
  echo "3. You will receive an instant, free live HTTPS URL in ~5 seconds!"
  echo "================================================================"
  echo ""
  (xdg-open "https://app.netlify.com/drop" 2>/dev/null || open "https://app.netlify.com/drop" 2>/dev/null || sensible-browser "https://app.netlify.com/drop" 2>/dev/null || true) &
}

deploy_netlify_cli() {
  print_header
  build_standalone
  echo "🚀 Deploying via Netlify CLI..."
  if command -v npx &>/dev/null; then
    npx netlify-cli deploy --prod --dir=.
  else
    echo "❌ Node.js / npx is required for Netlify CLI."
    echo "Please use Netlify Drop or install Node.js."
    exit 1
  fi
}

deploy_vercel() {
  print_header
  build_standalone
  echo "▲ Deploying via Vercel CLI..."
  if command -v npx &>/dev/null; then
    npx vercel --prod
  else
    echo "❌ Node.js / npx is required for Vercel CLI."
    exit 1
  fi
}

# Parse CLI arguments
case "$1" in
  --zip)
    build_standalone
    create_zip
    exit 0
    ;;
  --build)
    build_standalone
    exit 0
    ;;
  --netlify)
    deploy_netlify_cli
    exit 0
    ;;
  --vercel)
    deploy_vercel
    exit 0
    ;;
  --drop)
    deploy_netlify_drop
    exit 0
    ;;
  --help|-h)
    echo "Usage: ./deploy.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --drop     Build, package zip, and open Netlify Drop in browser (Default)"
    echo "  --zip      Build standalone.html and package $ZIP_NAME"
    echo "  --build    Rebuild standalone.html only"
    echo "  --netlify  Deploy directly using Netlify CLI (requires npx)"
    echo "  --vercel   Deploy directly using Vercel CLI (requires npx)"
    echo "  --help     Show this help screen"
    exit 0
    ;;
esac

# Interactive Menu if run without flags
print_header
echo "Select your preferred free hosting method:"
echo ""
echo "  1) Netlify Drop (Recommended: Instant drag-and-drop, zero login required)"
echo "  2) Netlify CLI  (Terminal automated deploy via npx)"
echo "  3) Vercel CLI   (Terminal automated deploy via npx)"
echo "  4) Create Static ZIP ($ZIP_NAME only, for manual hosting / sharing)"
echo "  5) Rebuild standalone.html only"
echo "  6) Exit"
echo ""
read -r -p "Choose an option [1-6] (Default is 1): " choice
choice=${choice:-1}

case "$choice" in
  1)
    deploy_netlify_drop
    ;;
  2)
    deploy_netlify_cli
    ;;
  3)
    deploy_vercel
    ;;
  4)
    build_standalone
    create_zip
    echo "Done! Upload '$ZIP_NAME' to any static web host."
    ;;
  5)
    build_standalone
    ;;
  6)
    echo "Exiting."
    exit 0
    ;;
  *)
    echo "Invalid option. Exiting."
    exit 1
    ;;
esac
