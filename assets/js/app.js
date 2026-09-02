/* ==========================================================================
   English for Hospitality — Application logic
   ========================================================================== */

(function () {
  "use strict";

  const STORAGE_LANG = "efh_lang";
  const STORAGE_PROGRESS = "efh_progress";

  const state = {
    view: "home",
    deptId: null,
    levelId: null,
    lessonStep: "objectives", // objectives -> preTest -> vocabulary -> dialogue -> postTest -> summary
    quiz: null,
    speed: "normal",
    langMenuOpen: false
  };

  // ------------------------------------------------------------ persistence
  function loadLang() {
    const saved = localStorage.getItem(STORAGE_LANG);
    window.currentLang = saved && window.I18N[saved] ? saved : "th";
  }
  function saveLang(code) {
    window.currentLang = code;
    localStorage.setItem(STORAGE_LANG, code);
  }
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_PROGRESS)) || {};
    } catch (e) {
      return {};
    }
  }
  function saveProgress(data) {
    localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(data));
  }
  function progressKey(deptId, levelId) { return deptId + "__" + levelId; }

  // ------------------------------------------------------------------ data
  function findDept(id) { return window.CURRICULUM.departments.find((d) => d.id === id); }
  function findLevel(dept, levelId) { return dept.levels.find((l) => l.id === levelId); }
  function deptTotalLessons() { return window.CURRICULUM.departments.length * 3; }

  // ------------------------------------------------------------------- TTS
  let voices = [];
  function loadVoices() { voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : []; }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
  function pickVoice() {
    if (!voices.length) loadVoices();
    return (
      voices.find((v) => v.lang === "en-GB") ||
      voices.find((v) => v.lang && v.lang.startsWith("en-GB")) ||
      voices.find((v) => v.lang && v.lang.startsWith("en")) ||
      voices[0] ||
      null
    );
  }
  function speak(text, rate) {
    if (!window.speechSynthesis) { toast(t("ttsNotSupported")); return; }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) utter.voice = v;
    utter.lang = (v && v.lang) || "en-GB";
    utter.rate = rate === "slow" ? 0.68 : 0.95;
    utter.pitch = 1;
    window.speechSynthesis.speak(utter);
  }

  // ------------------------------------------------------------------- STT
  const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
  let recognizer = null;
  let recognizingEl = null;

  function normalize(str) {
    return (str || "")
      .toLowerCase()
      .replace(/[.,!?"'’]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function similarity(a, b) {
    const wa = normalize(a).split(" ").filter(Boolean);
    const wb = normalize(b).split(" ").filter(Boolean);
    if (!wa.length || !wb.length) return 0;
    let hits = 0;
    wb.forEach((w) => { if (wa.includes(w)) hits++; });
    return hits / wa.length;
  }

  function practiceSpeak(expectedText, feedbackEl, btnEl) {
    if (!SpeechRecognitionAPI) { toast(t("micNotSupported")); return; }
    if (recognizer) { try { recognizer.stop(); } catch (e) {} recognizer = null; }
    recognizer = new SpeechRecognitionAPI();
    recognizer.lang = "en-US";
    recognizer.maxAlternatives = 3;
    recognizer.interimResults = false;

    if (recognizingEl) recognizingEl.classList.remove("recording");
    btnEl.classList.add("recording");
    recognizingEl = btnEl;
    feedbackEl.style.display = "block";
    feedbackEl.className = "mic-feedback";
    feedbackEl.textContent = t("recording");

    recognizer.onresult = function (event) {
      const heard = event.results[0][0].transcript;
      const score = similarity(expectedText, heard);
      feedbackEl.textContent = t("youSaid") + " “" + heard + "”";
      const verdict = document.createElement("div");
      verdict.style.marginTop = "4px";
      verdict.style.fontWeight = "600";
      if (score >= 0.6) {
        feedbackEl.classList.add("good");
        verdict.textContent = "✓ " + t("greatJob");
      } else {
        feedbackEl.classList.add("bad");
        verdict.textContent = "✗ " + t("tryAgainSpeak");
      }
      feedbackEl.appendChild(verdict);
    };
    recognizer.onerror = function () {
      feedbackEl.className = "mic-feedback bad";
      feedbackEl.textContent = t("tryAgainSpeak");
    };
    recognizer.onend = function () {
      btnEl.classList.remove("recording");
      recognizingEl = null;
    };
    try { recognizer.start(); } catch (e) {}
  }

  // ------------------------------------------------------------------ toast
  let toastTimer = null;
  function toast(msg) {
    let el = document.getElementById("toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "toast";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
  }

  // -------------------------------------------------------------- helpers
  function t(key) { return window.t(key); }
  function esc(s) {
    const d = document.createElement("div");
    d.textContent = s == null ? "" : String(s);
    return d.innerHTML;
  }
  function localized(obj) {
    if (!obj) return "";
    return obj[window.currentLang] || obj.en || Object.values(obj)[0] || "";
  }
  function levelLabel(levelId) { return t("level_" + levelId); }

  // ---------------------------------------------------------------- router
  function go(view, opts) {
    state.view = view;
    Object.assign(state, opts || {});
    window.scrollTo({ top: 0, behavior: "smooth" });
    render();
  }

  // ================================================================ RENDER
  function render() {
    renderTopbar();
    const app = document.getElementById("app");
    if (state.view === "home") app.innerHTML = renderHome();
    else if (state.view === "department") app.innerHTML = renderDepartment();
    else if (state.view === "lesson") app.innerHTML = renderLesson();
    else if (state.view === "progress") app.innerHTML = renderProgressPage();
    bindGlobalActions();
  }

  function renderTopbar() {
    const bar = document.getElementById("topbar");
    const langs = window.LANGUAGES.map((l) => {
      const active = l.code === window.currentLang ? "active" : "";
      return `<div class="lang-option ${active}" data-lang="${l.code}">${l.flag} ${l.label}</div>`;
    }).join("");
    bar.innerHTML = `
      <div class="brand" data-nav="home">
        <div class="brand-mark">EH</div>
        <div class="brand-text">
          <div class="brand-name">${esc(t("appName"))}</div>
          <div class="brand-byline">${esc(t("byline"))}</div>
        </div>
      </div>
      <div class="topbar-right">
        <div class="nav-link ${state.view === "home" ? "active" : ""}" data-nav="home">${esc(t("nav_home"))}</div>
        <div class="nav-link ${state.view === "progress" ? "active" : ""}" data-nav="progress">${esc(t("nav_progress"))}</div>
        <div class="lang-select">
          <button class="lang-btn" id="langBtn">${window.LANGUAGES.find((l) => l.code === window.currentLang).flag} ${window.LANGUAGES.find((l) => l.code === window.currentLang).label} ▾</button>
          <div class="lang-menu" id="langMenu" style="display:none">${langs}</div>
        </div>
      </div>`;

    document.querySelectorAll("[data-nav]").forEach((el) => {
      el.onclick = () => {
        const dest = el.getAttribute("data-nav");
        if (dest === "home") go("home");
        else if (dest === "progress") go("progress");
      };
    });
    const langBtn = document.getElementById("langBtn");
    const langMenu = document.getElementById("langMenu");
    langBtn.onclick = (e) => {
      e.stopPropagation();
      langMenu.style.display = langMenu.style.display === "none" ? "block" : "none";
    };
    document.body.onclick = () => { langMenu.style.display = "none"; };
    langMenu.querySelectorAll("[data-lang]").forEach((el) => {
      el.onclick = (e) => {
        e.stopPropagation();
        saveLang(el.getAttribute("data-lang"));
        langMenu.style.display = "none";
        render();
      };
    });
  }

  // ------------------------------------------------------------- home view
  function renderHome() {
    const progress = loadProgress();
    const cards = window.CURRICULUM.departments
      .map((dept) => {
        const done = dept.levels.filter((lv) => progress[progressKey(dept.id, lv.id)]).length;
        const pct = Math.round((done / dept.levels.length) * 100);
        return `
        <div class="dept-card" data-dept="${dept.id}">
          <span class="dept-icon">${dept.icon}</span>
          <div class="dept-name">${esc(localized(dept.name))}</div>
          <div class="dept-progress-bar"><div class="dept-progress-fill" style="width:${pct}%"></div></div>
          <div class="dept-progress-label">${done}/${dept.levels.length} ${esc(t("lessonsCompleted"))}</div>
        </div>`;
      })
      .join("");

    return `
      <section class="hero">
        <span class="hero-eyebrow">${esc(t("byline"))}</span>
        <h1>${esc(t("heroTitle"))}</h1>
        <p>${esc(t("heroSubtitle"))}</p>
      </section>
      <h2 class="section-title">${esc(t("departments"))}</h2>
      <p class="section-sub">${esc(t("selectDepartment"))}</p>
      <div class="dept-grid">${cards}</div>
      <div class="footer">${esc(t("footerText"))}</div>
    `;
  }

  // --------------------------------------------------------- department view
  function renderDepartment() {
    const dept = findDept(state.deptId);
    const progress = loadProgress();
    const cards = dept.levels
      .map((lv) => {
        const key = progressKey(dept.id, lv.id);
        const done = progress[key];
        return `
        <div class="level-card" data-level="${lv.id}">
          <span class="level-badge">${esc(levelLabel(lv.id))}</span>
          <div class="level-title">${esc(localized(lv.objectives[0]))}</div>
          <div class="level-meta">${lv.vocabulary.length} ${esc(t("step_vocabulary"))} · ${lv.dialogue.length}-line ${esc(t("step_dialogue"))}</div>
          ${done ? `<div class="check-pill">✓ ${done.postScore}/${lv.postTest.length} ${esc(t("points"))}</div>` : ""}
        </div>`;
      })
      .join("");

    return `
      <div class="crumb"><span class="link" data-nav="home">${esc(t("nav_home"))}</span> / <span>${esc(localized(dept.name))}</span></div>
      <h2 class="section-title">${dept.icon} ${esc(localized(dept.name))}</h2>
      <p class="section-sub">${esc(t("selectDepartment"))}</p>
      <div class="level-grid">${cards}</div>
    `;
  }

  // -------------------------------------------------------------- lesson view
  const STEPS = ["objectives", "preTest", "vocabulary", "dialogue", "postTest", "summary"];
  const STEP_LABELS = { objectives: "objectives", preTest: "step_preTest", vocabulary: "step_vocabulary", dialogue: "step_dialogue", postTest: "step_postTest", summary: "step_summary" };

  function renderLesson() {
    const dept = findDept(state.deptId);
    const level = findLevel(dept, state.levelId);

    const stepsHtml = STEPS.map((s) => {
      const idx = STEPS.indexOf(s);
      const curIdx = STEPS.indexOf(state.lessonStep);
      const cls = s === state.lessonStep ? "active" : idx < curIdx ? "done" : "";
      return `<div class="step-pill ${cls}">${idx < curIdx ? "✓ " : ""}${esc(t(STEP_LABELS[s]))}</div>`;
    }).join("");

    let body = "";
    if (state.lessonStep === "objectives") body = renderObjectives(level);
    else if (state.lessonStep === "preTest") body = renderQuizStep(level, "pre");
    else if (state.lessonStep === "vocabulary") body = renderVocabulary(level);
    else if (state.lessonStep === "dialogue") body = renderDialogue(level);
    else if (state.lessonStep === "postTest") body = renderQuizStep(level, "post");
    else if (state.lessonStep === "summary") body = renderSummary(dept, level);

    return `
      <div class="crumb">
        <span class="link" data-nav="home">${esc(t("nav_home"))}</span> /
        <span class="link" data-dept-back="${dept.id}">${esc(localized(dept.name))}</span> /
        <span>${esc(levelLabel(level.id))}</span>
      </div>
      <div class="lesson-header">
        <div class="lesson-title">${dept.icon} ${esc(localized(dept.name))} — ${esc(levelLabel(level.id))}</div>
        <div class="lesson-sub">${esc(localized(level.objectives[0]))}</div>
      </div>
      <div class="progress-steps">${stepsHtml}</div>
      <div class="card">${body}</div>
    `;
  }

  function renderObjectives(level) {
    const items = level.objectives.map((o) => `<li><span class="dot">◆</span>${esc(localized(o))}</li>`).join("");
    return `
      <h3 style="font-size:22px;margin-bottom:4px;">${esc(t("objectives"))}</h3>
      <ul class="objectives-list">${items}</ul>
      <div class="btn-row">
        <button class="btn btn-primary" data-step="preTest">${esc(t("startLesson"))} →</button>
      </div>
    `;
  }

  // ------------------------------------------------------------------ quiz
  function renderQuizStep(level, type) {
    const questions = type === "pre" ? level.preTest : level.postTest;
    if (!state.quiz || state.quiz.type !== type || state.quiz.level !== level) {
      state.quiz = { type, level, index: 0, correctCount: 0, answered: false, selected: null, finished: false };
    }
    const q = state.quiz;

    if (q.finished) {
      const pct = Math.round((q.correctCount / questions.length) * 100);
      return `
        <p class="section-sub">${esc(t(type === "pre" ? "preTestIntro" : "postTestIntro"))}</p>
        <div class="score-box" style="max-width:260px;">
          <div class="num">${q.correctCount}/${questions.length}</div>
          <div class="label">${esc(t("yourScore"))} (${pct}%)</div>
        </div>
        <div class="btn-row">
          <button class="btn btn-ghost" data-quiz-retake="${type}">${esc(t("retakeTest"))}</button>
          <button class="btn btn-primary" data-quiz-continue="${type}">
            ${type === "pre" ? esc(t("continueToVocabulary")) : esc(t("finishLesson"))} →
          </button>
        </div>
      `;
    }

    const question = questions[q.index];
    const optsHtml = question.options
      .map((opt, i) => {
        let cls = "quiz-option";
        if (q.answered) {
          if (i === question.answer) cls += " correct";
          else if (i === q.selected) cls += " incorrect";
        } else if (i === q.selected) cls += " selected";
        return `<button class="${cls}" data-opt="${i}" ${q.answered ? "disabled" : ""}>${esc(opt)}</button>`;
      })
      .join("");

    let feedback = "";
    if (q.answered) {
      const isCorrect = q.selected === question.answer;
      feedback = `<div class="quiz-feedback ${isCorrect ? "correct" : "incorrect"}">
        ${isCorrect ? "✓ " + esc(t("correct")) : "✗ " + esc(t("theCorrectAnswerIs")) + " " + esc(question.options[question.answer])}
      </div>`;
    }

    return `
      <p class="section-sub">${esc(t(type === "pre" ? "preTestIntro" : "postTestIntro"))}</p>
      <div class="quiz-progress">${esc(t("question"))} ${q.index + 1} ${esc(t("of"))} ${questions.length}</div>
      <div class="quiz-track"><div class="quiz-track-fill" style="width:${((q.index) / questions.length) * 100}%"></div></div>
      <div class="quiz-question">${esc(question.q.en)}<div class="quiz-question-sub">${esc(question.q.th)}</div></div>
      <div class="quiz-options">${optsHtml}</div>
      ${feedback}
      <div class="btn-row">
        ${!q.answered
          ? `<button class="btn btn-primary" id="quizSubmit" ${q.selected === null ? "disabled" : ""}>${esc(t("submitAnswer"))}</button>`
          : `<button class="btn btn-primary" id="quizNext">${q.index + 1 < questions.length ? esc(t("nextQuestion")) : esc(t("seeResults"))} →</button>`}
      </div>
    `;
  }

  // -------------------------------------------------------------- vocabulary
  function renderVocabulary(level) {
    const cards = level.vocabulary
      .map((v, i) => `
        <div class="vocab-card">
          <div class="vocab-word">${esc(v.word)}</div>
          <div class="vocab-phonetic">/${esc(v.phonetic)}/</div>
          <div class="vocab-meaning">${esc(localized(v.meaning))}</div>
          <div class="vocab-actions">
            <button class="btn-icon" data-speak="${esc(v.word)}" title="${esc(t("listen"))}">🔊</button>
            <button class="btn-icon" data-speak-slow="${esc(v.word)}" title="${esc(t("listenSlow"))}">🐢</button>
            <button class="btn-icon" data-mic="${i}" title="${esc(t("practiceSpeaking"))}">🎙️</button>
          </div>
          <div class="mic-feedback" id="vocab-feedback-${i}" style="display:none;"></div>
        </div>`)
      .join("");

    return `
      <p class="section-sub">${esc(t("vocabularyIntro"))}</p>
      <div class="vocab-grid">${cards}</div>
      <div class="btn-row">
        <button class="btn btn-ghost" data-step="preTest">← ${esc(t("back"))}</button>
        <button class="btn btn-primary" data-step="dialogue">${esc(t("continueToDialogue"))} →</button>
      </div>
    `;
  }

  // --------------------------------------------------------------- dialogue
  function renderDialogue(level) {
    const lines = level.dialogue
      .map((line, i) => `
        <div class="dialogue-line ${line.speaker}">
          <div class="dialogue-avatar">${line.speaker === "staff" ? "🛎️" : "🧑"}</div>
          <div class="dialogue-body">
            <div class="dialogue-role">${esc(t(line.speaker === "staff" ? "staffRole" : "guestRole"))}</div>
            <div class="dialogue-en">${esc(line.en)}</div>
            <div class="dialogue-th">${esc(line.th)}</div>
            <div class="mic-feedback" id="dlg-feedback-${i}" style="display:none;"></div>
          </div>
          <div class="dialogue-actions">
            <button class="btn-icon" data-speak="${esc(line.en)}" title="${esc(t("playLine"))}">🔊</button>
            <button class="btn-icon" data-mic-line="${i}" title="${esc(t("practiceLine"))}">🎙️</button>
          </div>
        </div>`)
      .join("");

    return `
      <p class="section-sub">${esc(t("dialogueIntro"))}</p>
      <div class="btn-row" style="margin-top:0;margin-bottom:8px;">
        <button class="btn btn-ghost" id="playAll">▶ ${esc(t("playDialogue"))}</button>
      </div>
      <div class="dialogue-list">${lines}</div>
      <div class="btn-row">
        <button class="btn btn-ghost" data-step="vocabulary">← ${esc(t("back"))}</button>
        <button class="btn btn-primary" data-step="postTest">${esc(t("continueToPostTest"))} →</button>
      </div>
    `;
  }

  // --------------------------------------------------------------- summary
  function renderSummary(dept, level) {
    const progress = loadProgress();
    const key = progressKey(dept.id, level.id);
    const rec = progress[key] || { preScore: 0, postScore: 0, preTotal: level.preTest.length, postTotal: level.postTest.length };
    const prePct = Math.round((rec.preScore / rec.preTotal) * 100);
    const postPct = Math.round((rec.postScore / rec.postTotal) * 100);
    const improvement = postPct - prePct;

    let msgKey = "summaryEncourageLow";
    if (postPct >= 85) msgKey = "summaryEncourageHigh";
    else if (postPct >= 60) msgKey = "summaryEncourageMid";

    const dept_levels = dept.levels;
    const curIdx = dept_levels.findIndex((l) => l.id === level.id);
    const nextLevel = dept_levels[curIdx + 1];

    return `
      <div style="text-align:center;">
        <div style="font-size:48px;margin-bottom:12px;">🎉</div>
        <h3 style="font-size:26px;">${esc(t("summaryTitle"))}</h3>
        <p class="summary-message">${esc(t(msgKey))}</p>
      </div>
      <div class="summary-score-row">
        <div class="score-box"><div class="num">${prePct}%</div><div class="label">${esc(t("preScoreLabel"))}</div></div>
        <div class="score-box"><div class="num">${postPct}%</div><div class="label">${esc(t("postScoreLabel"))}</div></div>
        <div class="score-box improvement"><div class="num">${improvement >= 0 ? "+" : ""}${improvement}%</div><div class="label">${esc(t("summaryImprovement"))}</div></div>
      </div>
      <div class="btn-row">
        <button class="btn btn-ghost" data-dept-back="${dept.id}">${esc(t("backToDepartments"))}</button>
        ${nextLevel ? `<button class="btn btn-primary" data-level-go="${nextLevel.id}">${esc(t("nextLevel"))} →</button>` : ""}
      </div>
    `;
  }

  // ----------------------------------------------------------- progress page
  function renderProgressPage() {
    const progress = loadProgress();
    const keys = Object.keys(progress);
    if (!keys.length) {
      return `
        <h2 class="section-title">${esc(t("progressTitle"))}</h2>
        <div class="empty-state">
          <div class="icon">📘</div>
          <p>${esc(t("progressEmpty"))}</p>
        </div>
      `;
    }

    let totalImprovement = 0;
    const rows = keys
      .map((k) => {
        const [deptId, levelId] = k.split("__");
        const dept = findDept(deptId);
        const level = findLevel(dept, levelId);
        const rec = progress[k];
        const prePct = Math.round((rec.preScore / rec.preTotal) * 100);
        const postPct = Math.round((rec.postScore / rec.postTotal) * 100);
        totalImprovement += postPct - prePct;
        return `<tr>
          <td>${dept.icon} ${esc(localized(dept.name))}</td>
          <td>${esc(levelLabel(level.id))}</td>
          <td>${prePct}%</td>
          <td>${postPct}%</td>
          <td>${new Date(rec.completedAt).toLocaleDateString()}</td>
        </tr>`;
      })
      .join("");

    const avgImprovement = Math.round(totalImprovement / keys.length);
    const totalLessons = deptTotalLessons();

    return `
      <h2 class="section-title">${esc(t("progressTitle"))}</h2>
      <div class="progress-overview">
        <div class="stat-card"><div class="num">${keys.length}/${totalLessons}</div><div class="label">${esc(t("lessonsDone"))}</div></div>
        <div class="stat-card"><div class="num">${Math.round((keys.length / totalLessons) * 100)}%</div><div class="label">${esc(t("overallProgress"))}</div></div>
        <div class="stat-card"><div class="num">${avgImprovement >= 0 ? "+" : ""}${avgImprovement}%</div><div class="label">${esc(t("avgImprovement"))}</div></div>
      </div>
      <div style="overflow-x:auto;">
        <table class="progress-table">
          <thead><tr><th>${esc(t("departments"))}</th><th>${esc(t("allLevelsLabel"))}</th><th>${esc(t("preScoreLabel"))}</th><th>${esc(t("postScoreLabel"))}</th><th>Date</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="btn-row">
        <button class="btn btn-ghost" id="resetProgressBtn">${esc(t("resetProgress"))}</button>
      </div>
    `;
  }

  // ============================================================= bindings
  function bindGlobalActions() {
    document.querySelectorAll("[data-dept]").forEach((el) => {
      el.onclick = () => go("department", { deptId: el.getAttribute("data-dept") });
    });
    document.querySelectorAll("[data-dept-back]").forEach((el) => {
      el.onclick = () => go("department", { deptId: el.getAttribute("data-dept-back") });
    });
    document.querySelectorAll("[data-level]").forEach((el) => {
      el.onclick = () => enterLesson(state.deptId, el.getAttribute("data-level"));
    });
    document.querySelectorAll("[data-level-go]").forEach((el) => {
      el.onclick = () => enterLesson(state.deptId, el.getAttribute("data-level-go"));
    });
    document.querySelectorAll("[data-step]").forEach((el) => {
      el.onclick = () => { state.lessonStep = el.getAttribute("data-step"); render(); };
    });

    // vocab / dialogue audio + mic
    document.querySelectorAll("[data-speak]").forEach((el) => {
      el.onclick = () => speak(el.getAttribute("data-speak"), "normal");
    });
    document.querySelectorAll("[data-speak-slow]").forEach((el) => {
      el.onclick = () => speak(el.getAttribute("data-speak-slow"), "slow");
    });
    document.querySelectorAll("[data-mic]").forEach((el) => {
      el.onclick = () => {
        const dept = findDept(state.deptId);
        const level = findLevel(dept, state.levelId);
        const idx = parseInt(el.getAttribute("data-mic"), 10);
        const word = level.vocabulary[idx].word;
        const feedback = document.getElementById("vocab-feedback-" + idx);
        practiceSpeak(word, feedback, el);
      };
    });
    document.querySelectorAll("[data-mic-line]").forEach((el) => {
      el.onclick = () => {
        const dept = findDept(state.deptId);
        const level = findLevel(dept, state.levelId);
        const idx = parseInt(el.getAttribute("data-mic-line"), 10);
        const line = level.dialogue[idx].en;
        const feedback = document.getElementById("dlg-feedback-" + idx);
        practiceSpeak(line, feedback, el);
      };
    });
    const playAllBtn = document.getElementById("playAll");
    if (playAllBtn) {
      playAllBtn.onclick = () => {
        const dept = findDept(state.deptId);
        const level = findLevel(dept, state.levelId);
        let i = 0;
        function playNext() {
          if (i >= level.dialogue.length || !window.speechSynthesis) return;
          const utter = new SpeechSynthesisUtterance(level.dialogue[i].en);
          const v = pickVoice();
          if (v) utter.voice = v;
          utter.rate = 0.95;
          utter.onend = () => { i++; playNext(); };
          window.speechSynthesis.speak(utter);
        }
        window.speechSynthesis.cancel();
        playNext();
      };
    }

    // quiz interactions
    document.querySelectorAll("[data-opt]").forEach((el) => {
      el.onclick = () => {
        if (state.quiz.answered) return;
        state.quiz.selected = parseInt(el.getAttribute("data-opt"), 10);
        render();
      };
    });
    const quizSubmit = document.getElementById("quizSubmit");
    if (quizSubmit) {
      quizSubmit.onclick = () => {
        const q = state.quiz;
        const questions = q.type === "pre" ? q.level.preTest : q.level.postTest;
        if (q.selected === questions[q.index].answer) q.correctCount++;
        q.answered = true;
        render();
      };
    }
    const quizNext = document.getElementById("quizNext");
    if (quizNext) {
      quizNext.onclick = () => {
        const q = state.quiz;
        const questions = q.type === "pre" ? q.level.preTest : q.level.postTest;
        if (q.index + 1 < questions.length) {
          q.index++; q.answered = false; q.selected = null;
        } else {
          q.finished = true;
          if (q.type === "post") saveQuizResult();
        }
        render();
      };
    }
    document.querySelectorAll("[data-quiz-retake]").forEach((el) => {
      el.onclick = () => {
        const type = el.getAttribute("data-quiz-retake");
        state.quiz = { type, level: state.quiz.level, index: 0, correctCount: 0, answered: false, selected: null, finished: false };
        render();
      };
    });
    document.querySelectorAll("[data-quiz-continue]").forEach((el) => {
      el.onclick = () => {
        const type = el.getAttribute("data-quiz-continue");
        if (type === "pre") {
          savePreResult();
          state.lessonStep = "vocabulary";
        } else {
          state.lessonStep = "summary";
        }
        render();
      };
    });

    const resetBtn = document.getElementById("resetProgressBtn");
    if (resetBtn) {
      resetBtn.onclick = () => {
        if (confirm(t("resetConfirm"))) {
          localStorage.removeItem(STORAGE_PROGRESS);
          render();
        }
      };
    }
  }

  let pendingPre = null;
  function savePreResult() {
    pendingPre = { score: state.quiz.correctCount, total: state.quiz.level.preTest.length };
  }
  function saveQuizResult() {
    const dept = findDept(state.deptId);
    const level = findLevel(dept, state.levelId);
    const progress = loadProgress();
    const key = progressKey(dept.id, level.id);
    progress[key] = {
      preScore: pendingPre ? pendingPre.score : (progress[key] ? progress[key].preScore : 0),
      preTotal: pendingPre ? pendingPre.total : level.preTest.length,
      postScore: state.quiz.correctCount,
      postTotal: level.postTest.length,
      completedAt: Date.now()
    };
    saveProgress(progress);
    pendingPre = null;
  }

  function enterLesson(deptId, levelId) {
    state.deptId = deptId;
    state.levelId = levelId;
    state.lessonStep = "objectives";
    state.quiz = null;
    go("lesson", {});
  }

  // ================================================================= init
  document.addEventListener("DOMContentLoaded", () => {
    loadLang();
    render();
  });
})();
