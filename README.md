# Speaking Assessment Report Page

This project is a simple Student Speaking Assessment Report Page built as part of an internship assignment. It displays a student’s speaking assessment scores in a clean and user-friendly UI.

---

## ▶️ How to Run the Project

1. Clone the repository
   ```bash
   git clone https://github.com/harshiill/GEMA-Education-Assignment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the application
   ```bash
   npm run start
   ```

The project will run on:
```
http://localhost:3000
```

---

## 📊 Where the Scores Are Stored

All scores and assessment data are stored in a single data file:

```
src/data/reportData.js
```

This file contains:
- Student name and test date
- Language-wise assessments (English, Hindi, French, Spanish, German, Japanese)
- Overall score for each language
- Skill-wise scores (Pronunciation, Fluency, Vocabulary, Grammar)
- Descriptive feedback for each skill

Updating values in this file automatically updates the UI.

---

## 🧠 How Feedback Logic Works

- Each language has its own independent assessment data
- Descriptive feedback is defined per language and per skill
- The UI dynamically displays:
  - Overall feedback
  - Individual feedback for each skill
- Score colors visually represent performance levels:
  - Green → Strong performance
  - Orange → Average performance
  - Red → Needs improvement

No backend or database is used; all logic is handled on the frontend using static data.
