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
  const mainContent = document.getElementById("mainContent");

  // Total credit section
  let totalCreditsEarned = 0;
  let totalCreditsAvailable = 0;
  for (const course of dashboardContent) {
    const { totalCredits, earnedCredits } = course;
      totalCreditsAvailable += totalCredits;
      totalCreditsEarned += earnedCredits;

  }
  // Create credit section
  const progressbar = document.getElementById("progressbar");
  // Calculate progressbar positioning
  const progress =
    (totalCreditsEarned / totalCreditsAvailable) * 100+ "%";
  progressbar.style.width = progress;
  // Put credits on page
  const earnedSelector = document.getElementById("creditsEarned");
  const availableSelector = document.getElementById("creditsAvailable");
  earnedSelector.textContent = totalCreditsEarned;
  availableSelector.textContent = totalCreditsAvailable;
};

generateDashboardUi();
