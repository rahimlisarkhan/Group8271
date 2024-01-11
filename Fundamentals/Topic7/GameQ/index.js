const questions = [
  {
    title: "Question 1",
    trueAnswer: "answer1",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 2",
    trueAnswer: "answer2",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 3",
    trueAnswer: "answer1",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 4",
    trueAnswer: "answer3",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 5",
    trueAnswer: "answer2",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 6",
    trueAnswer: "answer3",
    variants: ["answer1", "answer2", "answer3"],
  },
  {
    title: "Question 7",
    trueAnswer: "answer2",
    variants: ["answer1", "answer2", "answer3"],
  },
];

class QuestionGame {
  point = 0;
  nextQIndex = -1;
  qData = [];
  currentQuestion = null;

  constructor(data) {
    this.qData = data;
  }

  nextQuestion() {
    if (this.nextQIndex == this.qData.length - 1) {
      console.log("oyun bitdi...");
      return false;
    } else {
      this.nextQIndex += 1;

      const questionItem = this.qData[this.nextQIndex];

      this.currentQuestion = questionItem;

      return questionItem;
    }
  }
}

//?---------------------------

const qTitle = document.querySelector("#qTitle");
const btnGroup = document.querySelector("#btnGroup");

const gameQ = new QuestionGame(questions);

function startGame() {
  gameQ.nextQuestion();

  const qObj = gameQ.currentQuestion;
  qTitle.innerHTML = qObj.title;

  btnGroup.innerHTML = qObj.variants
    .map(
      (item) =>
        `<button class="btn btn-outline-light"  onclick="selectItem('${item}')">A. ${item}</button>`
    )
    .join("");

  console.log(qObj);
}

startGame();

function selectItem(userChoose) {
  console.log(gameQ.currentQuestion);
  console.log(userChoose);

  if (userChoose == gameQ.currentQuestion.trueAnswer) {
    console.log("duz tapdi");
    //? gameQ.incrementPoint()
    //? hemin dom bg-success edir
  } else {
    console.log("sehf tapdi");
    //? hemin dom bg-danger edir
  }

  // startGame();

  setTimeout(startGame, 2000);
}
