const faqContent = [
  {
    question: "How can you print a document from your laptop at HZ?",
    answer: `
    1. Login with your username and password at https://hz.mynetpay.nl/Login.\n
    2. Upload the necessary files ('Choose file').\n
    3. Select either 'HZ printer' or 'HZ plotter'. Then register using your HZ pass and click 'print'.\n 
    4. Ensure you have enough credit allocated to your account.\n
    5. When done, make sure to log out.\n
    `,
  },
  {
    question: "How can you scan a document and send it to your laptop at HZ?",
    answer: `
    1. Use your HZ pass to register at the printer\n
    2. When you see the menu, select the 'Scan' option\n
    3. Place the page you wish to scan on the glass\n
    4. Click 'Scan' -> 'Scan to me' -> 'Yes' ->'Start'\n    
    5. When ready, click 'Start sending'\n
    `,
  },
  {
    question:
      "How can I buy something (like when I sign up for the IT introduction event) on the HZ web shop?",
    answer: `
      Go to the HZ webshop, click on 'HZ-SPORT', find the desired event and order it.\n
      `,
  },
  {
    question: "How can you book a project space?",
    answer: `
      Go to my learn, then personal menu, click on 'Selfservice portal', click on 'Reservations', click on 'Reserve a room'.\n
      `,
  },
  {
    question:
      "What are the instructions if you want to park your car at the HZ parking lot?",
    answer: `
      You need to provide your HZ pass at the barriers and you will be allowed to enter.\n 
      `,
  },
];

const generateFAQSection = function () {
  for (let i = 0; i < faqContent.length; i++) {
    const accordionContainer = document.createElement("div");
    const containerElement = document.getElementById("mainContent");
    const accordionStyles =
      "max-w-[550px] w-[550px] flex items-center justify-center cursor-pointer flex-col relative z-50";
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
      ..."transform rotate-[90deg] duration-500 transition text-pink-500 font-black".split(
        " "
      )
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
      "w-full bg-white transition max-h-[0px] transition-max-height duration-500 flex items-center border z-0 relative overflow-hidden";
    outsideAnswerContainer.classList.add(...outsideAnswerStyles.split(" "));

    const answerTextElement = document.createElement("p");
    answerTextElement.innerHTML = faqContent[i].answer.replace(/\n/g, "<br>");

    answerTextElement.classList.add(
      ..."transform translate-x-[16px] duration-300 opacity-0 transition transition-opacity".split(
        " "
      )
    );
    outsideAnswerContainer.appendChild(answerTextElement);
    accordionContainer.appendChild(outsideAnswerContainer);

    document.getElementById(`FAQ-${i}`).addEventListener("click", (e) => {
      const target = e.currentTarget;
      const children = Array.from(target.childNodes);
      const pElement = Array.from(children[1].childNodes);
      console.log(pElement);
      if (children[1].classList.contains("max-h-[0px]")) {
        children[1].classList.remove("max-h-[0px]");
        children[1].classList.add("max-h-[500px]");
        pElement[0].classList.remove("opacity-0");
        pElement[0].classList.add("opacity-1");
        icon.classList.remove("rotate-[90deg]");
      } else {
        children[1].classList.remove("max-h-[500px]");
        children[1].classList.add("max-h-[0px]");
        pElement[0].classList.add("opacity-0");
        pElement[0].classList.remove("opacity-1");
        icon.classList.add("rotate-[90deg]");
      }
      console.log(target);
    });
  }
};

generateFAQSection();
