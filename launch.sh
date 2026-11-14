#!/usr/bin/env bash
# Launch Book Quiz Web App locally

PORT=8080
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "==============================================="
echo "  Starting Book Quiz Web App"
echo "  Serving from: $DIR"
echo "  URL: http://localhost:$PORT"
echo "==============================================="

# Try opening in default browser after 1 second in background
(sleep 1 && (xdg-open "http://localhost:$PORT" 2>/dev/null || open "http://localhost:$PORT" 2>/dev/null || sensible-browser "http://localhost:$PORT" 2>/dev/null)) &

# Run local HTTP server
cd "$DIR" && python3 -m http.server $PORT
