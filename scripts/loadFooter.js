const footerContent = [
  { icon: "logo-instagram", link: "https://www.instagram.com/timos_ig/" },
  { icon: "logo-github", link: "https://github.com/strmzi-git" },
];

const loadFooter = function () {
  // Calculate minimum y position for footer
  const navbarAndFooterHeight = 150 // 80 navbar, 70 footer
  const mainContent = document.getElementById("mainContent")
  console.log(window.innerHeight - navbarAndFooterHeight );
  const minBodySize = window.innerHeight - navbarAndFooterHeight
  mainContent.classList.add(`min-h-[${minBodySize}px]`)


  const footerClassnames =
    "flex items-center flex-col justify-center gap-3 mt-2 relative z-20";
  const footerContainer = document.getElementById("footerContainer");
  footerContainer.classList.add(...footerClassnames.split(" "));

  const iconContainer = document.createElement("div");
  iconContainer.classList.add(
    ..."mx-auto mb-2 flex items-center gap-1".split(" ")
  );
  footerContent.forEach((item) => {
    const linkBox = document.createElement("a");
    linkBox.href = item.link;
    linkBox.target = "_blank";
    linkBox.classList.add(..."h-[50px] w-[50px]".split(" "));

    const iconElement = document.createElement("ion-icon");
    iconElement.setAttribute("name", item.icon);
    iconElement.setAttribute("size", "large");

    linkBox.appendChild(iconElement);

    iconContainer.appendChild(linkBox);
  });
  footerContainer.appendChild(iconContainer);

  // Create text
  const paragraphEl = document.createElement("p");
  paragraphEl.classList.add(
    ..."bg-gradient-to-r from-yellow-500 to-pink-500 via-red-500 bg-clip-text text-transparent font-black".split(
      " "
    )
  );
  const textEl = document.createTextNode("Copyright © 2024. Designed by Timo");
  //   textEl.classList.add(...'text-transparent'.split(' '))
  paragraphEl.appendChild(textEl);
  footerContainer.appendChild(paragraphEl);
};

loadFooter();
