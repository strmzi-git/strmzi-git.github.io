const info = [
  {
    question: "What prior education have you completed?",
    answer: "International Baccalaureate (IB)",
  },
  {
    question: "What do you see yourself doing after completing this program?",
    answer: "Either Cybersecurity, Software Engineering (subject to change)",
  },
  {
    question: "What are you strengths?",
    answer:
      "Self-learning. Can find an answer to most questions I come up with. Good at working alone without external intervention. Communication (if I feel like it)",
  },
  {
    question: "What are your weaknesses",
    answer: "Procrastination, public speaking, design work (clearly)",
  },
  {
    question: "Do you play any sports?",
    answer: "Not currently. I used to play football for 10 years",
  },

];

const renderHtmlElementsToPage = function () {
  // Select container element
  const containerElement = document.getElementById("content-container");
  // Classes
  const questionClasses = "text-lg sm:text-xl md:text-2xl";
  const answerClasses = "text-lg sm:text-xl md:text-2xl opacity-70";
  const dividerClasses =
    "w-[250px] h-[2px] bg-gradient-to-r from-pink-500 via-red-500 via-30% to-yellow-500 to-80%";
  const parentClasses = "mb-2";

  // Loop over array with questions and answers above
  for (const { question, answer } of info) {
    const parentEl = document.createElement("div");
    parentEl.classList.add(...parentClasses.split(" "));

    // Question element
    const questionEl = document.createElement("h3");
    const questionText = document.createTextNode(`Q: ${question}`);
    questionEl.appendChild(questionText);
    questionEl.classList.add(...questionClasses.split(" "));

    // Answer element
    const answerEl = document.createElement("h4");
    const answerText = document.createTextNode(`A: ${answer}`);
    answerEl.appendChild(answerText);
    answerEl.classList.add(...answerClasses.split(" "));

    // Divider element
    const dividerElement = document.createElement("div");
    dividerElement.classList.add(...dividerClasses.split(" "));
    parentEl.appendChild(questionEl);
    parentEl.appendChild(answerEl);
    containerElement.appendChild(parentEl);
    if (question !== info[info.length - 1]["question"]) {
      containerElement.appendChild(dividerElement);
    }
  }
};

renderHtmlElementsToPage();

