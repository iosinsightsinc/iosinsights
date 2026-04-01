# iOS Insights — Psychological Services Website

A professional, high-end, and interactive website built for **iOS Insights Psychological Services**. This site features a premium "Earthy Sage" design aesthetic, smooth animations, and a responsive layout optimized for therapist branding and clinical services.

---

## ✨ What This Website Includes

- **Modern Aesthetic**: A curated color palette of Sage, Evergreen, Ivory, Blush, and Terracotta.
- **Interactive Elements**: Custom animated logo, interactive therapy sections, and smooth page transitions.
- **Service Pages**: Dedicated pages for Depression, Anxiety, Trauma, Attachment, Sandtray, Play Therapy, Somatic Therapy, Assessments, Vocational Support, and Workshops.
- **Mobile Optimized**: Fully responsive layout and navigation for phones, tablets, and desktops.

---

## 🚀 Complete Setup Guide

This guide will walk you through everything step by step. You only need to do Steps 1–4 **once**. After that, you can skip straight to [Making Changes](#-making-simple-text-changes).

---

### Step 1: Install the Required Tools

You need three free programs. Download and install each one:

| Tool | What It Does | Download Link |
|------|-------------|---------------|
| **Node.js** | Runs the website engine on your computer | [Download here](https://nodejs.org/) — choose the **"LTS"** (recommended) version |
| **Git** | Lets you download and save the website code | [Download here](https://git-scm.com/) — click "Download" and follow the installer |
| **VS Code** | A text editor where you'll make changes | [Download here](https://code.visualstudio.com/) |

> **Tip**: During installation, just click "Next" / "Continue" through all the default options. You don't need to change any settings.

#### How to Verify the Tools Are Installed

After installing, open your **Terminal** (see below) and type these commands one at a time, pressing `Enter` after each:

```bash
node --version
```
```bash
git --version
```

If each one shows a version number (e.g., `v20.11.0`), you're good to go!

---

### Step 2: Open Your Terminal

The **Terminal** is a window where you type commands to control the website. Think of it like a text-based remote control.

- **On a Mac**: Press `Command + Space`, type **Terminal**, and press `Enter`.
- **On Windows**: Press the `Start` key, type **PowerShell**, and press `Enter`.

You'll see a window with a blinking cursor — that's where you'll type the commands below.

---

### Step 3: Download the Website Code

In your Terminal, type these commands **one at a time** (press `Enter` after each):

**1. Download the project from GitHub:**
```bash
git clone https://github.com/sajeeban/iosinsights.git
```
_This creates a folder called `iosinsights` on your computer with all the website files._

**2. Move into that folder:**
```bash
cd iosinsights
```

---

### Step 4: Install the Website Dependencies

Dependencies are small software packages that the website needs to run. Install them by typing:

```bash
npm install
```

_This may take a minute or two. Wait until you see the blinking cursor again before continuing._

> **Note**: You only need to run `npm install` once. After that, the dependencies are saved on your computer.

---

### Step 5: Start the Local Preview Server

This lets you see the website on your own computer before publishing it to the internet.

```bash
npm run dev
```

After a moment, you'll see a message like:

```
➜  Local:   http://localhost:5173/iosinsights/
```

**Click that link** (or copy-paste it into your web browser). You'll see the website running live on your computer!

> **Important**: Keep this Terminal window open while you work. The website preview will automatically update whenever you save a change in VS Code.

To **stop** the preview server, click on the Terminal window and press `Ctrl + C`.

---

## ✍️ Making Simple Text Changes

### Opening the Project in VS Code

1. Open the **VS Code** application.
2. Go to **File → Open Folder...** (Mac) or **File → Open Folder** (Windows).
3. Navigate to the `iosinsights` folder and click **Open**.
4. You'll see all the website files listed on the left side.

### Where to Find the Text

| What You Want to Edit | File to Open |
|----------------------|-------------|
| **Home page hero section** | `src/components/Hero.jsx` |
| **"My Approach" section on home page** | `src/components/Approach.jsx` |
| **My Approach full page** | `src/pages/MyApproach.jsx` |
| **All service page content** | `src/pages/ServicePage.jsx` |
| **Services overview on home page** | `src/components/ServicesOverview.jsx` |
| **Services listing page** | `src/pages/ServicesPage.jsx` |
| **Contact section** | `src/pages/Contact.jsx` |
| **Navigation links** | `src/components/Navbar.jsx` |
| **Footer links and info** | `src/components/Footer.jsx` |
| **Resources / Blog page** | `src/pages/Resources.jsx` |

### How to Edit Text

1. Open the file from the table above.
2. Look for the text you want to change — it will be wrapped in **quotes** like this:
   ```
   "Helping you choose the life you want to live."
   ```
3. Change the words **inside** the quotes. Don't delete the quotes themselves.
4. Press `Command + S` (Mac) or `Ctrl + S` (Windows) to save.
5. Check your browser — the change should appear instantly!

### Changing Images

1. Place your new image file in the `public/` folder.
2. In the relevant code file, find the old image name (e.g., `office-1.jpg`) and replace it with your new filename.
3. Save the file and check the browser.

> **Tip**: For service page images, the files are named `service-depression.png`, `service-anxiety.png`, etc. in the `public/` folder.

---

## 🌐 Publishing to the Internet (GitHub Pages)

When you've made changes and want to make them live on the internet:

### Step 1: Save Your Changes to Git

In your Terminal (make sure you're in the `iosinsights` folder), run these commands **one at a time**:

```bash
git add .
```
_This tells Git to track all the changes you've made._

```bash
git commit -m "Update website content"
```
_This saves a snapshot of your changes. You can replace the message in quotes with a short description of what you changed (e.g., `"Updated somatic therapy page"`)._

```bash
git push
```
_This uploads your saved changes to GitHub (the online backup of your code)._

### Step 2: Deploy to GitHub Pages

Run this single command:

```bash
npm run deploy
```

_This will automatically build the website and publish it to your live URL. It usually takes 1–2 minutes to go live._

> **That's it!** After a minute or two, your changes will be visible on your live website.

---

## 🌍 Connecting a GoDaddy Domain to GitHub Pages

If you own a custom domain through GoDaddy (e.g., `iosinsights.ca`) and want it to point to your GitHub Pages site, follow these steps.

### Step 1: Find Your GitHub Pages URL

1. Go to [github.com](https://github.com) and sign in.
2. Navigate to your repository (e.g., `github.com/sajeeban/iosinsights`).
3. Click **Settings** (the gear icon near the top).
4. In the left sidebar, click **Pages**.
5. You should see your site is being published from the `gh-pages` branch. Note the URL (e.g., `https://sajeeban.github.io/iosinsights/`).

### Step 2: Set a Custom Domain in GitHub

1. On the same **Settings → Pages** screen, scroll down to **Custom domain**.
2. Type your domain name (e.g., `www.iosinsights.ca`) and click **Save**.
3. Check the box for **Enforce HTTPS** (this makes your site secure with the 🔒 lock icon).

### Step 3: Update GoDaddy DNS Settings

1. Log in to your [GoDaddy account](https://www.godaddy.com/).
2. Go to **My Products** → find your domain → click **DNS** (or **Manage DNS**).
3. You need to add/edit the following DNS records:

#### For `www.iosinsights.ca` (CNAME Record)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `sajeeban.github.io` | 1 Hour |

_If a CNAME record for `www` already exists, edit it. Otherwise, click **Add** to create a new one._

#### For `iosinsights.ca` (A Records — the "naked" domain)

Add **four** A records pointing to GitHub's servers:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `185.199.108.153` | 1 Hour |
| A | @ | `185.199.109.153` | 1 Hour |
| A | @ | `185.199.110.153` | 1 Hour |
| A | @ | `185.199.111.153` | 1 Hour |

_Delete any existing A records for `@` before adding these._

### Step 4: Wait for DNS to Propagate

DNS changes can take anywhere from a few minutes to 48 hours to fully propagate, but it usually happens within **15–30 minutes**.

### Step 5: Verify It's Working

1. Open your browser and go to your domain (e.g., `https://www.iosinsights.ca`).
2. You should see your website!
3. Back in GitHub **Settings → Pages**, the custom domain section should show a green checkmark and "DNS check successful".

> **Troubleshooting**: If your site doesn't appear right away, wait 30 minutes and try again. You can also try clearing your browser cache (`Command + Shift + R` on Mac, `Ctrl + Shift + R` on Windows) to force a fresh load.

---

## 📁 Project Structure (For Reference)

```
iosinsights/
├── public/              ← Images and static files
│   ├── office-1.jpg
│   ├── service-depression.png
│   ├── service-somatic.png
│   └── ...
├── src/
│   ├── components/      ← Reusable pieces (Navbar, Footer, Hero, etc.)
│   ├── pages/           ← Full pages (ServicePage, Contact, MyApproach, etc.)
│   ├── App.jsx          ← Main app structure and routing
│   └── index.css        ← Global styles and colors
├── package.json         ← Project configuration and dependencies
├── vite.config.js       ← Build tool configuration
└── README.md            ← This file!
```

---

## 🛠 Technical Stack

- **React** — The core framework for building the interface.
- **Vite** — Lightning-fast development server and build tool.
- **Framer Motion** — Premium animations and page transitions.
- **Lucide React** — Clean, modern iconography.
- **Tailwind CSS** — Layout utilities and responsive design.
- **gh-pages** — One-command deployment to GitHub Pages.

---

## ⚖️ License

Personal project for iOS Insights Psychological Services. All rights reserved.
