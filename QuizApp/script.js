document.addEventListener("DOMContentLoaded", () => {
  const StartBtn = document.getElementById("start-btn");
  const NextBtn = document.getElementById("next-btn");
  const RestartBtn = document.getElementById("restart-btn");
  const QuestionContainer = document.getElementById("question-container");
  const ChoiceList = document.getElementById("choices-list");
  const ReultContainer = document.getElementById("result-container");
  const ScoreDisplay = document.getElementById("score");
  const QuestionText = document.getElementById("question-text");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dikens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  StartBtn.addEventListener("click", startQuiz);
  NextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
  });

  RestartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    ReultContainer.classList.add('hidden');
    startQuiz();
  });

  function startQuiz() {
    StartBtn.classList.add("hidden"); // removing the startButton
    ReultContainer.classList.add("hidden");
    QuestionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    NextBtn.classList.add("hidden");
    QuestionText.textContent = questions[currentQuestionIndex].question;
    ChoiceList.innerHTML = ""; //clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      ChoiceList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    NextBtn.classList.remove("hidden");
    // currentQuestionIndex++;
    // NextBtn.addEventListener("click", () => {
    //     if (currentQuestionIndex < questions.length) {
    //         showQuestion();
    //     }
    // });
  }

  function showResult() {
    QuestionContainer.classList.add('hidden');
    ReultContainer.classList.remove('hidden');
    ScoreDisplay.textContent = `${score} out of ${questions.length}`
  }
});
