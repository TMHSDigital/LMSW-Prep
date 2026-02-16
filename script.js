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

  var TOTAL = 10;
  var currentQuestions = [];
  var currentQuestionIndex = 0;
  var answers = [];

  var quizPanel = document.getElementById("quiz-panel");
  var resultsPanel = document.getElementById("results-panel");
  var progressText = document.getElementById("progress-text");
  var progressBar = document.getElementById("progress-bar");
  var questionNumberEl = document.getElementById("question-number");
  var questionTextEl = document.getElementById("question-text");
  var answerList = document.getElementById("answer-list");
  var hintBtn = document.getElementById("hint-btn");
  var nextBtn = document.getElementById("next-btn");
  var rationaleBlock = document.getElementById("rationale-block");
  var rationaleHeading = document.getElementById("rationale-heading");
  var rationaleText = document.getElementById("rationale-text");
  var scoreDisplay = document.getElementById("score-display");
  var scoreMessage = document.getElementById("score-message");
  var retakeBtn = document.getElementById("retake-btn");

  function initQuiz() {
    var pool = typeof QUESTIONS !== "undefined" ? QUESTIONS : [];
    if (pool.length < TOTAL) {
      progressText.textContent = "Not enough questions in pool.";
      return;
    }
    currentQuestions = pickRandomQuestions(pool, TOTAL).map(function (q) {
      var copy = {
        id: q.id,
        category: q.category,
        question: q.question,
        choices: q.choices,
        correctIndex: q.correctIndex,
        rationale: q.rationale,
        hint: q.hint,
      };
      copy.shuffledChoices = shuffleChoices(q.choices);
      return copy;
    });
    currentQuestionIndex = 0;
    answers = new Array(TOTAL);
    for (var i = 0; i < TOTAL; i++) answers[i] = null;

    resultsPanel.hidden = true;
    quizPanel.hidden = false;
    renderQuestion();
  }

  function renderQuestion() {
    var q = currentQuestions[currentQuestionIndex];
    var progress = ((currentQuestionIndex + 1) / TOTAL) * 100;

    progressText.textContent = "Question " + (currentQuestionIndex + 1) + " of " + TOTAL;
    progressBar.style.width = progress + "%";

    questionNumberEl.textContent = "Q" + (currentQuestionIndex + 1);
    questionTextEl.textContent = q.question;

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
    rationaleBlock.classList.remove("hint-only");
    rationaleBlock.hidden = false;
  }

  function handleAnswer(originalIndex, btn) {
    if (answers[currentQuestionIndex] !== null) return;
    var q = currentQuestions[currentQuestionIndex];
    answers[currentQuestionIndex] = originalIndex;

    var buttons = answerList.querySelectorAll(".answer-btn");
    buttons.forEach(function (b) {
      b.disabled = true;
      var orig = parseInt(b.getAttribute("data-original-index"), 10);
      if (orig === q.correctIndex) b.classList.add("correct");
      else if (orig === originalIndex) b.classList.add("incorrect");
    });

    rationaleHeading.textContent = "Rationale";
    rationaleText.textContent = q.rationale;
    rationaleBlock.classList.remove("hint-only");
    rationaleBlock.hidden = false;
    nextBtn.disabled = false;
  }

  hintBtn.addEventListener("click", function () {
    if (answers[currentQuestionIndex] !== null) return;
    var q = currentQuestions[currentQuestionIndex];
    rationaleHeading.textContent = "Hint";
    rationaleText.textContent = q.hint;
    rationaleBlock.classList.add("hint-only");
    rationaleBlock.hidden = false;
  });

  nextBtn.addEventListener("click", function () {
    if (currentQuestionIndex < TOTAL - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResults();
    }
  });

  function showResults() {
    var correctCount = 0;
    for (var i = 0; i < TOTAL; i++) {
      if (answers[i] === currentQuestions[i].correctIndex) correctCount++;
    }
    quizPanel.hidden = true;
    resultsPanel.hidden = false;
    scoreDisplay.textContent = correctCount + " / " + TOTAL;
    if (correctCount >= 9) scoreMessage.textContent = "Strong work. You're well prepared.";
    else if (correctCount >= 7) scoreMessage.textContent = "Good job. Review any missed areas.";
    else scoreMessage.textContent = "Consider reviewing the ASWB Master's content areas.";
  }

  retakeBtn.addEventListener("click", function () {
    location.reload();
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuiz);
  } else {
    initQuiz();
  }
})();
