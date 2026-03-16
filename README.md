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

### 1. Prerequisites
Before you start, make sure you have the following installed on your computer:
- **Node.js**: [Download and install here](https://nodejs.org/). This allows your computer to run the website.
- **Git**: [Download and install here](https://git-scm.com/). This allows you to "push" your changes to the internet.
- **A Code Editor**: I recommend [VS Code](https://code.visualstudio.com/).

### 2. Setup the Project
1. Open your terminal (or Command Prompt).
2. "Clone" the project by typing:
   ```bash
   git clone https://github.com/sajeeban/iosinsights.git
   ```
3. Enter the project folder:
   ```bash
   cd iosinsights
   ```
4. Install the necessary "ingredients" (dependencies):
   ```bash
   npm install
   ```

### 3. Run Locally (See changes as you work)
To see the website on your own computer, run:
```bash
npm run dev
```
Once it starts, open your browser to `http://localhost:5173/`. Any changes you make to the code will show up here instantly!

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
