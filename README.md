# iOS Insights — Psychological Services Website

A professional, high-end, and interactive web application built for **iOS Insights Psychological Services**. This website features a premium "Earthy Sage" design language, smooth animations, and a responsive layout tailored for a therapist's portfolio and clinical services.

## ✨ Project Overview

- **Modern Aesthetic**: A curated palette of Sage, Evergreen, Ivory, Blush, and Terracotta.
- **Interactive Elements**: Custom animated "Spinning Logo", interactive therapy modality sections, and smooth page transitions using Framer Motion.
- **Service-Oriented**: Dedicated pages for Depression, Anxiety, Trauma, Play Therapy, and Psychodiagnostic Assessments.
- **Mobile Optimized**: Fully responsive navigation and layout for all screen sizes.

---

## 🚀 Getting Started (Beginner Friendly)

Even if you aren't a developer, you can easily run this project and make updates by following these simple steps.

### 1. Prerequisites & Opening Your Terminal
Before you start, you'll need a few free tools. Don't worry, you only have to do this once!

- **Install Node.js**: [Download here](https://nodejs.org/). (Choose the "LTS" version).
- **Install Git**: [Download here](https://git-scm.com/).
- **Install VS Code**: [Download here](https://code.visualstudio.com/). This is the "Editor" where you will see the text.

#### How to open your Terminal:
The **Terminal** is a window where you type special commands.
- **On a Mac**: Press `Command + Space`, type **"Terminal"**, and hit `Enter`.
- **On Windows**: Press the `Start` key, type **"cmd"** or **"PowerShell"**, and hit `Enter`.

---

### 2. Setup the Project
Once your terminal is open, copy and paste these lines one by one (hit `Enter` after each):

1. **Clone (Download) the project**:
   ```bash
   git clone https://github.com/sajeeban/iosinsights.git
   ```
2. **Move into the folder**:
   ```bash
   cd iosinsights
   ```
3. **Install the "Engine"**:
   ```bash
   npm install
   ```

---

### 3. Making Changes (The Fun Part)
1. **Open the project in VS Code**:
   - Open the **VS Code** app you downloaded.
   - Go to `File > Open Folder...` and find the `iosinsights` folder you just created.
2. **Run the local preview**:
   - In your Terminal, type:
     ```bash
     npm run dev
     ```
   - Click the link it gives you (usually `http://localhost:5173`).
   - Keep this terminal open! As you edit text in VS Code and save (`Command + S`), the website will update instantly in your browser.

---

## ✍️ How to Update Content

You don't need to be a coding expert to update the text or images.

### Editing Text
- **Home Page**: Go to `src/components/` and edit files like `Hero.jsx` or `Approach.jsx`.
- **My Approach Page**: Edit `src/pages/MyApproach.jsx`.
- **Services Pages**: Content for services is stored in `src/pages/ServicePage.jsx` inside the `servicesData` object.

Look for text wrapped in quotes (e.g., `"I have over 9 years of experience"`) and simply change the words inside the quotes.

### Changing Images
Place new images in the `public/` folder, then update the filename in the corresponding code file (e.g., change `office-1.jpg` to `your-new-photo.jpg`).

---

## 🌐 How to Publish to the Internet

When you are happy with your changes and want the world to see them:

1. **Save your changes in Git**:
   ```bash
   git add .
   git commit -m "Update website content"
   ```

2. **Publish to GitHub Pages**:
   Run this single command:
   ```bash
   npm run deploy
   ```
   *This will automatically build the project and upload it to your live website URL.*

---

## 🛠 Technical Stack

Managed with **Vite** for lightning-fast development:
- **React**: The core framework.
- **Framer Motion**: For the premium animations.
- **Lucide React**: For the clean iconography.
- **Tailwind CSS**: For layout utilities.

---

## ⚖️ License
Personal project for iOS Insights Psychological Services. All rights reserved.
