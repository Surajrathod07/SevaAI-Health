# SevaAI Health Website

Responsive single-page marketing website using semantic HTML, CSS, and vanilla JavaScript. No build step or framework is required.

## Structure
```text
index.html
css/style.css
js/main.js
assets/images/README.md
assets/images/favicon.svg
.github/workflows/deploy.yml
.gitignore
README.md
```

## Run locally
Open `index.html` directly, or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Customize
Replace `[PHONE]`, `[EMAIL]`, `[ADDRESS]`, `YOUTUBE_VIDEO_ID`, `USERNAME`, and `REPO-NAME`. Replace testimonial placeholders only with genuine, approved feedback. Update the contact email in both `index.html` and `js/main.js`. The project description reflects prototype functions: SpO₂/temperature readings, dashboard display, threshold detection, and simulated caregiver alerts. Do not imply diagnosis or emergency response.

The contact form uses a `mailto:` fallback. For Formspree, set the form's `action` to `https://formspree.io/f/YOUR_FORM_ID` and `method="POST"` in `index.html`, then remove/disable the mailto submit handler in `js/main.js` and follow Formspree's instructions. GitHub Pages alone cannot securely process form submissions.

## Deploy with GitHub Pages
1. Create a GitHub repository named, for example, `sevaai-health-website`, with `main` as the default branch.
2. From this project directory, run:
```bash
git init
git add .
git commit -m "Create SevaAI Health marketing website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```
If a remote already exists, use `git remote set-url origin https://github.com/USERNAME/REPO-NAME.git` then push.
3. On GitHub, open **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source.
4. The included workflow deploys on every push to `main`. Check **Actions** for completion.
5. The site URL will be `https://USERNAME.github.io/REPO-NAME/`. For a repository named `USERNAME.github.io`, it is `https://USERNAME.github.io/`.

Replace Open Graph URLs with your final site URL before sharing. No workflow secrets are required.
