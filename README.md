# English for Hospitality

A modern, multilingual English course for resort and hospitality staff, designed by a native-English-teacher persona from Birmingham, UK. Built as a static web app — no build step, no backend required.

## Highlights

- **11 resort departments**: Front Office, Housekeeping, Food & Beverage, Concierge & Bell Service, Bar & Lounge, Spa & Wellness, Pool & Recreation, Kids Club, Golf & Sports, Security & Safety, Banquet & Events
- **3 levels per department**: Beginner, Intermediate, Advanced (33 lessons total)
- **Listen & repeat**: every vocabulary word and dialogue line can be played aloud (browser text-to-speech, British English voice preferred) and practiced with the microphone (browser speech recognition gives instant pronunciation feedback)
- **Pre-test & post-test**: each lesson opens with a short quiz to gauge prior knowledge, and closes with a matching quiz to measure improvement — scores and progress are saved locally in the browser
- **5 interface languages**: Thai, English, Chinese, Japanese, Korean — switch anytime from the top bar
- **Modern, elegant UI**: dark "quiet luxury" theme with gold accents, glass panels, and serif/sans type pairing

## Running locally

No build tools needed — it's plain HTML/CSS/JS.

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Or simply open `index.html` directly in a browser (speech recognition requires Chrome on desktop or Android; text-to-speech works in all modern browsers).

## Project structure

```
index.html                 Entry point / page shell
assets/css/style.css       Theme & layout
assets/js/i18n.js          Interface translations (5 languages)
assets/js/data.js          Curriculum content (departments, levels, vocabulary, dialogues, quizzes)
assets/js/app.js           App logic: routing, rendering, TTS, speech recognition, progress tracking
```

## Content data

All lesson content lives in `assets/js/data.js` as a single `window.CURRICULUM` object, making it straightforward to add new departments, levels, or lessons without touching the app logic.
