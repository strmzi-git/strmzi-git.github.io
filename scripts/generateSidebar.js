const sidebarLinks = [
  {
    goTo: "HZLearn Announcements",
    url: "https://learn.hz.nl/mod/forum/view.php?id=450819",
  },
  {
    goTo: "My Github",
    url: "https://github.com/strmzi-git",
  },
  {
    goTo: "Implementation Regulations",
    url: "https://hz.nl/uploads/documents/1.4-Over-de-HZ/1.4.3.-Regelingen-en-documenten/OERS/2023-2024/Juli/TWE/IR-B-HBO-ICT-full-time-2023-2024-DEF.pdf",
  },
  {
    goTo: "My HZ Portal",
    url: "https://portal.hz.nl/en/",
  },
];

const generateSidebar = function () {
  const sidebar = document.createElement("div");
  sidebar.setAttribute("id", "sidebar");

  const initClasses =
    "bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100 h-screen z-[60] absolute top-0 left-0 transition-all duration-300 ease-in-out flex flex-col shadow-lg items-start";

  const hzLogo = document.createElement("img");
  hzLogo.src = "../public/images/HZLogo.png";
  hzLogo.classList.add(..."h-[75px] w-[75px] mb-6".split(" "));

  const ulList = document.createElement("ul");
  ulList.style.opacity = "0"; 
  ulList.style.transition = "opacity 0.3s ease-in-out"; 

  sidebarLinks.forEach(({ goTo, url }) => {
    const li = document.createElement("li");
    li.classList.add(
      ..."w-full p-2 rounded-md font-light duration-300 cursor-pointer".split(
        " "
      )
    );
    const a = document.createElement("a");
    a.textContent = goTo;
    a.href = url;
    a.target = "_blank"
    li.appendChild(a);
    ulList.appendChild(li);
  });
  sidebar.appendChild(hzLogo);
  sidebar.appendChild(ulList);

  const iconContainer = document.createElement("div");
  iconContainer.setAttribute("id", "iconContainer");
  iconContainer.classList.add(
    ..."cursor-pointer z-[60] absolute top-6 left-6 transition-all duration-300 ease-in-out".split(
      " "
    )
  ); 

  const hamburger = document.createElement("ion-icon");
  hamburger.setAttribute("name", "menu-outline"); 
  hamburger.classList.add(..."h-[35px] w-[35px]".split(" "));
  sidebar.classList.add(...initClasses.split(" "));
  iconContainer.appendChild(hamburger);

  const mainContainer = document.getElementById("mainContent");
  mainContainer.appendChild(sidebar);
  mainContainer.appendChild(iconContainer);

  sidebar.style.width = "0"; 
  sidebar.style.overflow = "hidden"; 
  iconContainer.style.left = "7px"; 
};

document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const ulList = sidebar.querySelector("ul");
  const iconContainer = document.getElementById("iconContainer");
  const hamburger = iconContainer.querySelector("ion-icon");

  let isOpen = false;
  iconContainer.addEventListener("click", () => {
    console.log("Clicked");

    if (isOpen) {
      sidebar.style.width = "0";
      sidebar.style.padding = "0";
      ulList.style.opacity = "0";
      iconContainer.style.left = "7px";
      hamburger.setAttribute("name", "menu-outline");
    } else {
      sidebar.style.width = "210px";
      sidebar.style.padding = "25px";
      iconContainer.style.left = "217px";
      setTimeout(() => {
        ulList.style.opacity = "1";
      }, 300);
      hamburger.setAttribute("name", "close-outline");
    }
    isOpen = !isOpen;
  });
});

generateSidebar();
