#!/bin/bash
set -e

echo "Ensuring clean state..."
git add .
git commit -m "chore: save state before fix" || true

echo "Fixing build process..."
# Update vite.config.ts to ensure base path is correct for gh-pages
cat << 'VITE' > vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/name-studio/'
})
VITE

echo "Building..."
npm run build

echo "Deploying to GitHub pages branch..."
npx gh-pages -d dist -r "https://${GITHUB_STORE_TOKEN}@github.com/ednedin/name-studio.git" -u "github-actions-bot <support+actions@github.com>"

echo "Done!"
