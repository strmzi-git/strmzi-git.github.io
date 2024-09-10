const generateBackgroundTiles = function () {
  const mainContainer = document.getElementById("mainContainer");
  if (!mainContainer) {
    console.error("Main container not found!");
    return;
  }

  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  500, 100;

  // Figure out how many boxes we can fit on the page
  const area = screenHeight * screenWidth;
  const squareArea = 75 * 75;
  const possibleSquares = Math.floor(area / squareArea)
  const totalPossibleSquares = possibleSquares * 1.5

  //   console.log(screenWidth, screenHeight);
  const tileClasses = `h-[75px] min-h-[75px] w-[75px] min-w-[75px] border hover:bg-gray-100 duration-400 z-0 relative transition-colors duration-500 ease-in-out opacity-30`;

  const tilesArray = [];
  for (let i = 0; i <= totalPossibleSquares; i++) {
    const tile = document.createElement("div");
    tile.classList.add(...tileClasses.split(" "));
    tile.setAttribute("value", i);
    mainContainer.appendChild(tile);
    tilesArray.push(tile);
  }

  // Tiles animation
  let shadedSquares = [];

  // Start with 10 random values for shading square
  for (let i = 0; i < 30; i++) {
    const preShadedSquareValue = Math.floor(Math.random() * tilesArray.length);
    shadedSquares.push(preShadedSquareValue);
    tilesArray[preShadedSquareValue].classList.add("bg-gray-400");
  }

  // find a value that isn't green yet
  const findUnshadedTile = function () {
    let randomValue;
    do {
      randomValue = Math.floor(Math.random() * tilesArray.length);
    } while (shadedSquares.includes(randomValue));
    return randomValue;
  };

  setInterval(() => {
    const randomValue = findUnshadedTile();
    tilesArray[randomValue].classList.add("bg-gray-400");
    shadedSquares.push(randomValue);
    if (shadedSquares.length > 30) {
      const squareToReset = shadedSquares.shift();
      tilesArray[squareToReset].classList.remove("bg-gray-400");
    }
  }, 1000);
};

generateBackgroundTiles();
