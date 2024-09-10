const faqContent = [
  {
    question: "How can you print a document from your laptop at HZ?",
    answer: "Hello world",
  },
  {
    question: "How can you scan a document and send it to your laptop at HZ?",
    answer: "Hello world",
  },
  {
    question:
      "How can I buy something (like when I sign up for the IT introduction event) on the HZ web shop?",
    answer: "Hello world",
  },
  {
    question: "How can you book a project space?",
    answer: "Hello world",
  },
  {
    question:
      "What are the instructions if you want to park your car at the HZ parking lot?",
    answer: "Hello world",
  },
];

const generateFAQSection = function () {
  for (let i = 0; i < faqContent.length; i++) {
    const accordionContainer = document.createElement("div");
    const containerElement = document.getElementById("mainContent");
    const accordionStyles =
      "max-w-[550px] w-[550px] flex items-center justify-center cursor-pointer flex-col";
    accordionContainer.classList.add(...accordionStyles.split(" "));
    accordionContainer.setAttribute("id", `FAQ-${i}`);
    containerElement.appendChild(accordionContainer);
    // Questions container
    const questionContainer = document.createElement("div");
    // Text element
    const questionTextElement = document.createElement("p");
    const textNode = document.createTextNode(faqContent[i].question);
    questionTextElement.appendChild(textNode);
    // Append to questioncontainer
    questionContainer.appendChild(questionTextElement);
    // Icon
    const iconContainer = document.createElement("div");
    iconContainer.classList.add(
      ..."w-[50px] h-[50px] min-w-[50px] min-h-[50px] flex items-center justify-center".split(
        " "
      )
    );
    const icon = document.createElement("ion-icon");
    icon.setAttribute("name", "chevron-down-outline");
    icon.classList.add(
      ..."transform rotate-[90deg] duration-500 transition text-pink-500 font-black".split(" ")
    );
    questionContainer.appendChild(iconContainer);
    iconContainer.appendChild(icon);
    // Append to accordionContainer
    accordionContainer.appendChild(questionContainer);
    const questionStyles =
      "w-full flex items-center justify-between bg-white p-4 border";
    questionContainer.classList.add(...questionStyles.split(" "));

    // Answer box
    const outsideAnswerContainer = document.createElement("div");
    const outsideAnswerStyles =
      "w-full h-[0px] bg-white transition transition-height opacity-0 duration-500 flex items-center transition-opacity border";
    outsideAnswerContainer.classList.add(...outsideAnswerStyles.split(" "));

    const answerTextElement = document.createElement("p");
    const answerTextNode = document.createTextNode(faqContent[i].answer);
    answerTextElement.appendChild(answerTextNode);
    answerTextElement.classList.add(
      ..."transform translate-x-[16px]".split(" ")
    );
    outsideAnswerContainer.appendChild(answerTextElement);
    accordionContainer.appendChild(outsideAnswerContainer);

    document.getElementById(`FAQ-${i}`).addEventListener("click", (e) => {
      const target = e.currentTarget;
      const children = Array.from(target.childNodes);
      if (children[1].classList.contains("h-[0px]")) {
        children[1].classList.remove("h-[0px]");
        children[1].classList.add("h-[50px]");
        children[1].classList.remove("opacity-0");
        icon.classList.remove("rotate-[90deg]");
      } else {
        children[1].classList.remove("h-[50px]");
        children[1].classList.add("h-[0px]");
        children[1].classList.add("opacity-0");
        icon.classList.add("rotate-[90deg]");
      }
      console.log(target);
    });
  }
};

generateFAQSection();
