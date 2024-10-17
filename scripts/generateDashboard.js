const createElement = document.createElement.bind(document);
const createTextNode = document.createTextNode.bind(document);
const getElementById = document.getElementById.bind(document);

const dashboardContent = [
  {
    courseTitle: "Program- & Career Orientation",
    totalCredits: 2.5,
    earnedCredits: 0,
    gradedMaterial: [
      {
        type: "Individual Presentation",
        weighting: "100%",
        completed: false,
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Written knowledge test",
        weighting: "50%",
        completed: false,
        retakeNecessary: false,
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
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "25%",
        completed: false,
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "50%",
        completed: false,
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
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
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Written knowledge test",
        weighting: "10%",
        completed: false,
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Group presentation",
        weighting: "25%",
        completed: false,
        retakeNecessary: false,
        grade: "-",
      },
      {
        type: "Portfolio",
        weighting: "25%",
        completed: false,
        retakeNecessary: false,
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
        retakeNecessary: false,
        grade: "-",
      },
    ],
  },
];

const determineColor = function (retake, completed, type, shade) {
  const color = !retake
    ? completed
      ? `${type}-green-${shade}`
      : `${type}-orange-${shade}`
    : `${type}-rose-${shade}`;
  return color;
};

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
    headCell.setAttribute("colspan", "5");
    // headCell.setAttribute("rowspan", "1");

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
    const creditsRow1 = createElement("tr");
    const creditsRow2 = createElement("tr");
    const col1Credits = createTableCell("Available Credits");
    col1Credits.setAttribute("colspan", 3)
    const col3Credits = createTableCell("Credits Earned");
    col3Credits.setAttribute("colspan", 2)
    const col2Credits = createTableCell(course.totalCredits);
    col2Credits.classList.add("font-black")
    col2Credits.setAttribute("colspan", 3)
    const col4Credits = createTableCell(course.earnedCredits);
    col4Credits.classList.add("font-black")
    col4Credits.setAttribute("colspan", 2);

    [col1Credits, col3Credits].forEach((col) => creditsRow1.appendChild(col));
    [col2Credits, col4Credits].forEach((col) => creditsRow2.appendChild(col));

    const thirdRow = createElement("tr");
    const colType = createTableCell("Type");
    const colWeighting = createTableCell("Weighting");
    const colCompleted = createTableCell("Completed");
    const colRetake = createTableCell("Retake Required?");
    const colGrade = createTableCell("Grade");

    [colType, colWeighting, colCompleted, colRetake, colGrade].forEach((col) =>
      thirdRow.appendChild(col)
    );

    table.appendChild(creditsRow1);
    table.appendChild(creditsRow2);
    table.appendChild(thirdRow);

    // Loop over exams and make row for each
    for (const gradedMaterial of course.gradedMaterial) {
      const { retakeNecessary, type, completed, weighting, grade } =
        gradedMaterial;
      const examRow = createElement("tr");

      examRow.classList.add(
        ...`align-top ${determineColor(
          retakeNecessary,
          completed,
          "bg",
          "200"
        )}`.split(" ")
      );
      const typeCell = createTableCell(type, retakeNecessary, completed, true);
      const weightingCell = createTableCell(
        weighting,
        retakeNecessary,
        completed,
        true
      );
      const completedCell = createTableCell(
        completed,
        retakeNecessary,
        completed,
        true
      );
      const retakeCell = createTableCell(
        retakeNecessary,
        retakeNecessary,
        completed,
        true
      );
      const gradeCell = createTableCell(
        grade,
        retakeNecessary,
        completed,
        true
      );

      [typeCell, weightingCell, completedCell, retakeCell, gradeCell].forEach(
        (col) => examRow.appendChild(col)
      );
      table.appendChild(examRow);
    }
  }
};

function createTableCell(content, retake, isCompleted, handleColor = false) {
  const col = createElement("td");
  col.classList.add("min-h-[50px]", "flex-1", "border");
  const colP = createElement("p");
  colP.classList.add(
    ...`text-center p-2 flex items-center justify-center ${
      handleColor && determineColor(retake, isCompleted, "text", "600")
    }`.split(" ")
  );

  const colText = createTextNode(content);
  col.appendChild(colP);
  colP.appendChild(colText);
  return col;
}

generateDashboardUi();
