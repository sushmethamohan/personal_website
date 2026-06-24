# Sushmetha A Mohan — Portfolio Website

A clean, minimal academic portfolio website. All page content lives in simple text files (Markdown) so you can update anything without touching code.

---

## Folder Structure

```
sush_wesbite/
├── index.html                        ← main website shell (don't edit)
├── styles.css                        ← visual design (don't edit)
├── script.js                         ← page logic (don't edit)
├── Sush-profile-pic.png              ← profile photo
├── Sushmetha A Mohan CV_AIRNA 2.pdf  ← CV PDF (downloadable from the site)
└── content/
    ├── about.md        ← About / landing page
    ├── research.md     ← Research interests & skills
    ├── publications.md ← Papers, presentations, posters
    ├── cv.md           ← Full CV page
    └── contact.md      ← Contact details & references
```

---

## How to Edit Content

All content is in the `content/` folder. Open any `.md` file in a text editor (TextEdit, Notepad, VS Code, etc.) and save your changes. The website will reflect them instantly on next refresh.

### Common edits

**Update your location or bio**
Open `content/about.md` and edit the text.

**Add a new publication**
Open `content/publications.md` and add a new entry. Follow the same format as the existing ones — bold your name, add the journal in italics, and use `[Link text](URL)` to add a hyperlink.

**Update your CV**
- To change the text on the CV page: edit `content/cv.md`
- To update the downloadable PDF: replace the file `Sushmetha A Mohan CV_AIRNA 2.pdf` with your new version (keep the same filename, or update the link in `cv.md`)

**Change contact details**
Open `content/contact.md` and update the relevant lines.

### Markdown basics (quick reference)

| What you want | How to write it |
|---|---|
| **Bold text** | `**Bold text**` |
| *Italic text* | `*Italic text*` |
| A link | `[Link text](https://example.com)` |
| A heading | `## Heading` (more `#` = smaller) |
| A bullet list | `- Item one` |
| A horizontal line | `---` |

---

## Run Locally (Preview on Your Computer)

You need Python installed (it comes pre-installed on Mac).

**Step 1 — Open Terminal**

On Mac: press `Cmd + Space`, type `Terminal`, press Enter.

**Step 2 — Navigate to the website folder**

```bash
cd ~/Desktop/sush_wesbite
```

**Step 3 — Start the local server**

```bash
python3 -m http.server 8000
```

**Step 4 — Open your browser**

Go to: [http://localhost:8000](http://localhost:8000)

**Step 5 — Stop the server when done**

Press `Ctrl + C` in Terminal.

> **Important:** Always preview using the local server (`http://localhost:8000`), not by double-clicking `index.html`. Double-clicking won't load the content files correctly.

---

## Host on GitHub Pages (Free)

GitHub Pages lets you publish this website for free on a public URL like `https://yourusername.github.io/portfolio`.

### Prerequisites

- A free account at [github.com](https://github.com)
- Git installed on your computer ([download here](https://git-scm.com/downloads))

### Step-by-step

**1. Create a new repository on GitHub**

- Log in to GitHub
- Click the **+** icon (top right) → **New repository**
- Name it something like `portfolio` or `sushmetha-website`
- Leave it set to **Public**
- Do **not** check "Add a README file"
- Click **Create repository**

**2. Open Terminal and go to the website folder**

```bash
cd ~/Desktop/sush_wesbite
```

**3. Initialise Git and push your files**

```bash
git init
git add .
git commit -m "Initial website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and the repository name you chose.

**4. Enable GitHub Pages**

- Go to your repository on GitHub
- Click **Settings** (top menu)
- In the left sidebar, click **Pages**
- Under **Source**, select **Deploy from a branch**
- Set branch to `main` and folder to `/ (root)`
- Click **Save**

**5. Your site is live!**

After about 1–2 minutes, your site will be available at:

```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

GitHub will show the URL on the Pages settings page.

### Publishing updates later

Whenever you edit a content file and want to push the changes live:

```bash
cd ~/Desktop/sush_wesbite
git add .
git commit -m "Update publications"
git push
```

The site will update within a minute or two.

---

## Updating the Profile Photo

Replace `Sush-profile-pic.png` with a new image file. Keep the filename exactly as `Sush-profile-pic.png` (same capitalisation), or update the filename in `script.js` on the line that says `src="Sush-profile-pic.png"`.
