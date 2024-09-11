const createElement = document.createElement.bind(document);
const createTextNode = document.createTextNode.bind(document);
const getElementById = document.getElementById.bind(document);

const dashboardContent = [
  {
    courseTitle: "Program- & Career Orientation",
    totalCredits: 2.5,
    earnedCredits: 18,
    gradedMaterial: [
      {
        type: "Individual Presentation",
        weighting: "100%",
        completed: true,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Computer Science Basics",
    totalCredits: 5,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Written knowledge test",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Programming Basics",
    totalCredits: 5,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Written knowledge test",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Object-Oriented Programming",
    totalCredits: 10,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Individual Presentation",
        weighting: "50%",
        completed: false,
        grade: "-",
      },
      {
        type: "Written knowledge test",
        weighting: "50%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Framework Project 2",
    totalCredits: 10,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Group Presentation",
        weighting: "25%",
        completed: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "25%",
        completed: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "50%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "IT Personality Projectweek 1",
    totalCredits: 1.25,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Portfolio",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "IT Personality International week",
    totalCredits: 1.25,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Portfolio",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "IT Personality 1",
    totalCredits: 1.25,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Portfolio",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "IT Personality 2",
    totalCredits: 1.25,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Portfolio",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Personal Professional Development Exploration",
    totalCredits: 12.5,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Criterion-referenced assessment",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Framework Project 1",
    totalCredits: 10,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Written knowledge test",
        weighting: "40%",
        completed: false,
        grade: "-",
      },
      {
        type: "Written knowledge test",
        weighting: "10%",
        completed: false,
        grade: "-",
      },
      {
        type: "Group presentation",
        weighting: "25%",
        completed: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "25%",
        completed: false,
        grade: "-",
      },
    ],
  },
  {
    courseTitle: "Business IT Consultancy Basics",
    totalCredits: 2.5,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Individual Assignment",
        weighting: "100%",
        completed: false,
        grade: "-",
      },
    ],
  },
];

const generateDashboardUi = function () {
  // Container
  const mainContent = getElementById("mainContent");

  // Total credit section
  let totalCreditsEarned = 0;
  let totalCreditsAvailable = 0;
  for (const course of dashboardContent) {
    const { totalCredits, earnedCredits } = course;
    totalCreditsAvailable += totalCredits;
    totalCreditsEarned += earnedCredits;
  }
  // Create credit section
  const progressbar = getElementById("progressbar");
  // Calculate progressbar positioning
  const progress = (totalCreditsEarned / totalCreditsAvailable) * 100 + "%";
  progressbar.style.width = progress;
  // Put credits on page
  const earnedSelector = getElementById("creditsEarned");
  const availableSelector = getElementById("creditsAvailable");
  earnedSelector.textContent = totalCreditsEarned;
  availableSelector.textContent = totalCreditsAvailable;

  for (const course of dashboardContent) {
    // Create table
    const table = createElement("table");
    const tableStyles =
      "border-collapse mx-auto border-[2px] my-4 w-[600px] table-fixed";
    table.classList.add(...tableStyles.split(" "));
    const head = createElement("thead");
    const headRow = createElement("tr");
    const headCell = createElement("th");
    headCell.classList.add("p-2");
    headCell.setAttribute("colspan", "4");

    // Header
    const textNode = createTextNode(course.courseTitle);
    const textElement = createElement("p");
    const textStyles = "font-light text-xl";
    textElement.classList.add(...textStyles.split(" "));
    textElement.appendChild(textNode);

    // Append to head
    mainContent.appendChild(table);
    table.appendChild(head);
    head.appendChild(headRow);
    headRow.appendChild(headCell);
    headCell.appendChild(textElement);

    // Create credits row
    const secondRow = createElement("tr");
    const col1Credits = createTableCell("Available Credits");
    const col2Credits = createTableCell(course.totalCredits);
    const col3Credits = createTableCell("Credits Earned");
    const col4Credits = createTableCell(course.earnedCredits);

    [col1Credits, col2Credits, col3Credits, col4Credits].forEach((column) =>
      secondRow.appendChild(column)
    );

    const thirdRow = createElement("tr");
    const colType = createTableCell("Type");
    const colWeighting = createTableCell("Weighting");
    const colCompleted = createTableCell("Completed");
    const colGrade = createTableCell("Grade");

    [colType, colWeighting, colCompleted, colGrade].forEach((col) =>
      thirdRow.appendChild(col)
    );

    table.appendChild(secondRow);
    table.appendChild(thirdRow);

    // Loop over exams and make row for each
    for (const gradedMaterial of course.gradedMaterial) {
      const examRow = createElement("tr");

      examRow.classList.add(
        ...`align-top ${
          gradedMaterial.completed ? "bg-green-200" : "bg-rose-200"
        }`.split(" ")
      );
      const type = createTableCell(
        gradedMaterial.type,
        gradedMaterial.completed,
        true
      );
      const weighting = createTableCell(
        gradedMaterial.weighting,
        gradedMaterial.completed,
        true
      );
      const completed = createTableCell(
        gradedMaterial.completed,
        gradedMaterial.completed,
        true
      );
      const grade = createTableCell(
        gradedMaterial.grade,
        gradedMaterial.completed,
        true
      );

      [type, weighting, completed, grade].forEach((col) =>
        examRow.appendChild(col)
      );
      table.appendChild(examRow);
    }
  }
};

function createTableCell(content, isCompleted, changeColor = false) {
  const col = createElement("td");
  col.classList.add("min-h-[50px]", "flex-1", "border");
  const colP = createElement("p");
  colP.classList.add(
    ...`text-center p-2 flex items-center justify-center ${
      changeColor && (isCompleted ? "text-green-600" : "text-rose-600")
    }`.split(" ")
  );

  const colText = createTextNode(content);
  col.appendChild(colP);
  colP.appendChild(colText);
  return col;
}

generateDashboardUi();
