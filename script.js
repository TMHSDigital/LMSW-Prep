(function () {
  "use strict";

  function shuffleArray(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  var DOMAIN_WEIGHTS = typeof DOMAIN_WEIGHTS !== "undefined" ? DOMAIN_WEIGHTS : { "Values and Ethics": 0.35, "Assessment and Planning": 0.33, "Intervention and Practice": 0.32 };

  function getDomain(q) {
    return q.domain || q.category || "";
  }

  function pickWeightedQuestions(pool, count, domainFilter) {
    var byDomain = {};
    var domainNames = Object.keys(DOMAIN_WEIGHTS);
    domainNames.forEach(function (d) {
      byDomain[d] = [];
    });
    pool.forEach(function (q) {
      var d = getDomain(q);
      if (byDomain[d] && (!domainFilter || domainFilter.length === 0 || domainFilter.indexOf(d) !== -1)) {
        byDomain[d].push(q);
      }
    });
    if (domainFilter && domainFilter.length > 0) {
      domainNames = domainFilter.slice();
    }
    var weights = domainNames.map(function (d) {
      return { name: d, weight: DOMAIN_WEIGHTS[d] || 1 / domainNames.length };
    });
    var totalWeight = weights.reduce(function (sum, w) {
      return sum + w.weight;
    }, 0);
    var targets = weights.map(function (w) {
      return Math.floor((w.weight / totalWeight) * count);
    });
    var remainder = count - targets.reduce(function (a, b) {
      return a + b;
    }, 0);
    if (remainder > 0) {
      var i = 0;
      while (remainder--) {
        targets[i % targets.length]++;
        i++;
      }
    }
    var out = [];
    domainNames.forEach(function (d, idx) {
      var arr = shuffleArray(byDomain[d] || []);
      var n = Math.min(targets[idx] || 0, arr.length);
      for (var j = 0; j < n; j++) out.push(arr[j]);
    });
    return shuffleArray(out);
  }

  function pickRandomQuestions(pool, count) {
    if (pool.length <= count) return shuffleArray(pool);
    return shuffleArray(pool).slice(0, count);
  }

  function shuffleChoices(choices) {
    var indexed = choices.map(function (text, i) {
      return { text: text, originalIndex: i };
    });
    return shuffleArray(indexed);
  }

  var questionsPerRound = 10;
  var currentQuestions = [];
  var currentQuestionIndex = 0;
  var answers = [];
  var selectedDomains = null;

  var quizPanel = document.getElementById("quiz-panel");
  var resultsPanel = document.getElementById("results-panel");
  var progressText = document.getElementById("progress-text");
  var progressBar = document.getElementById("progress-bar");
  var questionSectionEl = document.querySelector(".question-section");
  var questionNumberEl = document.getElementById("question-number");
  var questionCategoryEl = document.getElementById("question-category");
  var questionTextEl = document.getElementById("question-text");
  var answerList = document.getElementById("answer-list");
  var hintBtn = document.getElementById("hint-btn");
  var nextBtn = document.getElementById("next-btn");
  var rationaleBlock = document.getElementById("rationale-block");
  var rationaleHeading = document.getElementById("rationale-heading");
  var rationaleText = document.getElementById("rationale-text");
  var distractorRationalesEl = document.getElementById("distractor-rationales");
  var scoreDisplay = document.getElementById("score-display");
  var scoreMessage = document.getElementById("score-message");
  var anotherBtn = document.getElementById("another-btn");
  var retakeBtn = document.getElementById("retake-btn");
  var startPanel = document.getElementById("start-panel");
  var startBtn = document.getElementById("start-btn");
  var setSizeEl = document.getElementById("set-size");
  var poolProgressEl = document.getElementById("pool-progress");
  var statsDisplay = document.getElementById("stats-display");
  var sessionCountEl = document.getElementById("session-count");

  var POOL_SIZE_TARGET = 500;
  var SET_SIZE_OPTIONS = [5, 10, 15, 20, 25, 30, 40, 50];

  var STATS_KEY = "lmsw_prep_stats";

  function loadStats() {
    try {
      var raw = localStorage.getItem(STATS_KEY);
      return raw ? JSON.parse(raw) : { lastSessionDate: null, domainStats: {}, questionLog: {} };
    } catch (e) {
      return { lastSessionDate: null, domainStats: {}, questionLog: {} };
    }
  }

  function saveStats(stats) {
    try {
      localStorage.setItem(STATS_KEY, JSON.stringify(stats));
    } catch (e) {}
  }

  function recordAnswer(questionId, domain, correct) {
    var stats = loadStats();
    var qKey = "q_" + questionId;
    if (!stats.questionLog[qKey]) stats.questionLog[qKey] = { results: [], lastSeen: 0 };
    stats.questionLog[qKey].results.push(correct ? 1 : 0);
    stats.questionLog[qKey].lastSeen = Date.now();
    if (!stats.domainStats[domain]) stats.domainStats[domain] = { attempted: 0, correct: 0 };
    stats.domainStats[domain].attempted += 1;
    if (correct) stats.domainStats[domain].correct += 1;
    stats.lastSessionDate = new Date().toISOString().slice(0, 10);
    saveStats(stats);
  }

  function getSelectedDomains() {
    var out = [];
    ["domain-ethics", "domain-assessment", "domain-intervention"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.checked) out.push(el.value);
    });
    return out.length === 3 ? null : out;
  }

  function getAvailablePoolCount() {
    var pool = typeof QUESTIONS !== "undefined" ? QUESTIONS : [];
    var domains = getSelectedDomains();
    if (!domains || domains.length === 0) return pool.length;
    return pool.filter(function (q) {
      return domains.indexOf(getDomain(q)) !== -1;
    }).length;
  }

  function updateSetSizeOptions(availableCount) {
    if (!setSizeEl) return;
    setSizeEl.innerHTML = "";
    if (availableCount === 0) {
      var opt = document.createElement("option");
      opt.value = "0";
      opt.textContent = "0 (select at least one domain)";
      setSizeEl.appendChild(opt);
      return;
    }
    var added = {};
    SET_SIZE_OPTIONS.forEach(function (n) {
      if (n <= availableCount && !added[n]) {
        added[n] = true;
        var opt = document.createElement("option");
        opt.value = String(n);
        opt.textContent = String(n);
        setSizeEl.appendChild(opt);
      }
    });
    if (availableCount > 0 && SET_SIZE_OPTIONS.indexOf(availableCount) === -1 && !added[availableCount]) {
      var allOpt = document.createElement("option");
      allOpt.value = String(availableCount);
      allOpt.textContent = "All (" + availableCount + ")";
      setSizeEl.appendChild(allOpt);
    }
    var sel = Math.min(10, availableCount);
    if (availableCount >= 10) setSizeEl.value = "10";
    else if (availableCount >= 5) setSizeEl.value = "5";
    else setSizeEl.value = String(availableCount);
  }

  function updatePoolProgress(availableCount) {
    if (!poolProgressEl) return;
    var totalPool = typeof QUESTIONS !== "undefined" ? QUESTIONS.length : 0;
    if (totalPool === 0) {
      poolProgressEl.textContent = "";
      return;
    }
    if (totalPool < POOL_SIZE_TARGET) {
      poolProgressEl.textContent = totalPool + " / " + POOL_SIZE_TARGET + " questions in pool. Contribute on GitHub.";
    } else {
      poolProgressEl.textContent = totalPool + " questions in pool.";
    }
    if (availableCount !== totalPool && availableCount > 0) {
      poolProgressEl.textContent = poolProgressEl.textContent + " (" + availableCount + " for selected domains)";
    }
  }

  function refreshStartPanel() {
    var n = getAvailablePoolCount();
    updateSetSizeOptions(n);
    updatePoolProgress(n);
  }

  function initQuiz() {
    if (setSizeEl) questionsPerRound = Math.max(1, parseInt(setSizeEl.value, 10) || 10);
    selectedDomains = getSelectedDomains();

    var pool = typeof QUESTIONS !== "undefined" ? QUESTIONS : [];
    var filtered = selectedDomains && selectedDomains.length > 0
      ? pool.filter(function (q) {
          return selectedDomains.indexOf(getDomain(q)) !== -1;
        })
      : pool;
    if (filtered.length === 0) {
      if (poolProgressEl) poolProgressEl.textContent = "No questions match the selected domains. Select at least one domain.";
      return;
    }
    var total = Math.min(questionsPerRound, filtered.length);
    var chosen = selectedDomains && selectedDomains.length > 0
      ? pickRandomQuestions(filtered, total)
      : pickWeightedQuestions(pool, total, null);
    currentQuestions = chosen.map(function (q) {
      var copy = {
        id: q.id,
        category: q.domain || q.category,
        domain: q.domain || q.category,
        question: q.question,
        choices: q.choices,
        correctIndex: q.correctIndex,
        rationale: q.rationale,
        hint: q.hint,
        distractorRationales: q.distractorRationales,
      };
      copy.shuffledChoices = shuffleChoices(q.choices);
      return copy;
    });
    currentQuestionIndex = 0;
    answers = new Array(currentQuestions.length);
    for (var i = 0; i < currentQuestions.length; i++) answers[i] = null;

    resultsPanel.hidden = true;
    if (startPanel) startPanel.hidden = true;
    quizPanel.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    var total = currentQuestions.length;
    var q = currentQuestions[currentQuestionIndex];
    var progress = total ? ((currentQuestionIndex + 1) / total) * 100 : 0;

    progressText.textContent = "Question " + (currentQuestionIndex + 1) + " of " + total;
    progressBar.style.width = progress + "%";

    questionNumberEl.textContent = "Q" + (currentQuestionIndex + 1);
    questionCategoryEl.textContent = q.category;
    questionTextEl.textContent = q.question;

    nextBtn.textContent = currentQuestionIndex === total - 1 ? "See results" : "Next question";

    answerList.innerHTML = "";
    q.shuffledChoices.forEach(function (choice) {
      var li = document.createElement("li");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "answer-btn";
      btn.textContent = choice.text;
      btn.setAttribute("data-original-index", choice.originalIndex);
      btn.addEventListener("click", function () {
        handleAnswer(choice.originalIndex, btn);
      });
      li.appendChild(btn);
      answerList.appendChild(li);
    });

    hintBtn.disabled = false;
    rationaleBlock.hidden = true;
    rationaleBlock.classList.remove("hint-only");
    rationaleHeading.textContent = "Rationale";
    if (distractorRationalesEl) distractorRationalesEl.innerHTML = "";

    var answered = answers[currentQuestionIndex] !== null;
    nextBtn.disabled = !answered;

    if (answered) {
      showFeedbackForCurrent();
    }
  }

  function showFeedbackForCurrent() {
    var q = currentQuestions[currentQuestionIndex];
    var chosen = answers[currentQuestionIndex];
    var buttons = answerList.querySelectorAll(".answer-btn");
    buttons.forEach(function (btn) {
      btn.disabled = true;
      var orig = parseInt(btn.getAttribute("data-original-index"), 10);
      if (orig === q.correctIndex) btn.classList.add("correct");
      else if (orig === chosen) btn.classList.add("incorrect");
    });
    rationaleHeading.textContent = "Rationale";
    rationaleText.textContent = q.rationale;
    renderDistractorRationales(q);
    rationaleBlock.classList.remove("hint-only");
    rationaleBlock.hidden = false;
  }

  function renderDistractorRationales(q) {
    if (!distractorRationalesEl || !q.distractorRationales || !q.distractorRationales.length) return;
    var choices = q.choices || [];
    var html = [];
    for (var i = 0; i < choices.length; i++) {
      if (i === q.correctIndex) continue;
      var label = choices[i] ? choices[i].substring(0, 50) + (choices[i].length > 50 ? "…" : "") : "Option " + (i + 1);
      html.push("<p><strong>" + escapeHtml(label) + ":</strong> " + escapeHtml(q.distractorRationales[i] || "") + "</p>");
    }
    distractorRationalesEl.innerHTML = html.length ? "<p><strong>Why the others are wrong</strong></p>" + html.join("") : "";
  }

  function escapeHtml(s) {
    if (!s) return "";
    var div = document.createElement("div");
    div.textContent = s;
    return div.innerHTML;
  }

  function handleAnswer(originalIndex, btn) {
    if (answers[currentQuestionIndex] !== null) return;
    var q = currentQuestions[currentQuestionIndex];
    answers[currentQuestionIndex] = originalIndex;
    recordAnswer(q.id, q.domain || q.category, originalIndex === q.correctIndex);

    var buttons = answerList.querySelectorAll(".answer-btn");
    buttons.forEach(function (b) {
      b.disabled = true;
      var orig = parseInt(b.getAttribute("data-original-index"), 10);
      if (orig === q.correctIndex) b.classList.add("correct");
      else if (orig === originalIndex) b.classList.add("incorrect");
    });

    rationaleHeading.textContent = "Rationale";
    rationaleText.textContent = q.rationale;
    renderDistractorRationales(q);
    rationaleBlock.classList.remove("hint-only");
    rationaleBlock.hidden = false;
    nextBtn.disabled = false;
    rationaleBlock.focus();
  }

  hintBtn.addEventListener("click", function () {
    if (answers[currentQuestionIndex] !== null) return;
    var q = currentQuestions[currentQuestionIndex];
    rationaleHeading.textContent = "Hint";
    rationaleText.textContent = q.hint;
    if (distractorRationalesEl) distractorRationalesEl.innerHTML = "";
    rationaleBlock.classList.add("hint-only");
    rationaleBlock.hidden = false;
  });

  nextBtn.addEventListener("click", function () {
    var total = currentQuestions.length;
    if (currentQuestionIndex < total - 1) {
      if (questionSectionEl) questionSectionEl.classList.add("transitioning");
      setTimeout(function () {
        currentQuestionIndex++;
        renderQuestion();
        if (questionSectionEl) questionSectionEl.classList.remove("transitioning");
      }, 180);
    } else {
      showResults();
    }
  });

  function showResults() {
    var total = currentQuestions.length;
    var correctCount = 0;
    for (var i = 0; i < total; i++) {
      if (answers[i] === currentQuestions[i].correctIndex) correctCount++;
    }
    var sessionAnswered = parseInt(sessionStorage.getItem("lmsw_prep_session_answered") || "0", 10) + total;
    sessionStorage.setItem("lmsw_prep_session_answered", String(sessionAnswered));

    quizPanel.hidden = true;
    resultsPanel.hidden = false;
    scoreDisplay.textContent = correctCount + " / " + total;
    if (correctCount >= 9) scoreMessage.textContent = "Strong work. You're well prepared.";
    else if (correctCount >= 7) scoreMessage.textContent = "Good job. Review any missed areas.";
    else scoreMessage.textContent = "Consider reviewing the ASWB Master's content areas.";

    if (sessionCountEl) sessionCountEl.textContent = "Questions answered this session: " + sessionAnswered;
    if (statsDisplay) {
      var stats = loadStats();
      var totalAttempted = 0;
      var byDomain = [];
      Object.keys(stats.domainStats || {}).forEach(function (d) {
        var s = stats.domainStats[d];
        totalAttempted += s.attempted;
        byDomain.push(d + ": " + s.correct + "/" + s.attempted);
      });
      statsDisplay.textContent = totalAttempted > 0
        ? "Total questions answered (all time): " + totalAttempted + (byDomain.length ? ". By area: " + byDomain.join("; ") : "")
        : "";
    }
  }

  anotherBtn.addEventListener("click", function () {
    initQuiz();
  });

  retakeBtn.addEventListener("click", function () {
    location.reload();
  });

  if (startBtn) {
    startBtn.addEventListener("click", function () {
      initQuiz();
    });
  }

  function onDomReady() {
    if (quizPanel) quizPanel.hidden = true;
    if (resultsPanel) resultsPanel.hidden = true;
    if (startPanel) startPanel.hidden = false;
    refreshStartPanel();
    ["domain-ethics", "domain-assessment", "domain-intervention"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.addEventListener("change", refreshStartPanel);
    });
    registerServiceWorker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onDomReady);
  } else {
    onDomReady();
  }

  function registerServiceWorker() {
    if (typeof navigator !== "undefined" && "serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
      navigator.serviceWorker.register("sw.js", { scope: "./" }).catch(function () {});
    }
  }
})();
