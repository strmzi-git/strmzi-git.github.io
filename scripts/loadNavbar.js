const navbarEls = [
  { name: "Home", path: "/" },
  { name: "Profile", path: "/profile.html" },
  { name: "Dashboard", path: "/dashboard.html" },
  { name: "FAQ", path: "/faq.html" },
  { name: "Blog", path: "/blog.html" },
];

const renderNavbar = function () {
  const navbarContainer = document.getElementById("navbar");
  document.addEventListener("DOMContentLoaded", (e) => {
    const {
      target: {
        location: { pathname },
      },
    } = e;
    // Create unordered list elements
    const ul = document.createElement("ul");
    const ulClasslist = "flex items-center gap-4 justify-center";
    ul.classList.add(...ulClasslist.split(" "));

    // Aside menu opener
    // const asideIconContainer = document.createElement("div")
    // asideIconContainer.classList.add(..."absolute top-[50%] transform translate-y-[-50%] left-0".split(" "))
    // const icon = document.createElement("ion-icon")
    // icon.setAttribute("name", "menu-outline")
    // asideIconContainer.classList.add(..."transform scale-[1.5] cursor-pointer".split(" "))
    // asideIconContainer.appendChild(icon)

    // navbarContainer.appendChild(asideIconContainer)

    // Create list elements
    const liElementArray = navbarEls.map(({ name, path }, key) => {
      const inactiveLiClasslist =
        "w-auto cursor-pointer relative px-4 py-3 font-bold rounded-2xl group overflow-hidden";
      const activeLiClasslist =
        "w-auto cursor-pointer px-4 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-2xl";
      const liEl = document.createElement("li");

      if (pathname !== path) {
        // Add inactive classes to the LI element only if the path is not the current pathname (not active page)
        liEl.classList.add(...inactiveLiClasslist.split(" "));

        // Create background element that animates
        const backgroundEl = document.createElement("div");
        const backgroundElClasslist =
          "w-full z-10 absolute top-0 left-[-100%] h-full group-hover:left-[0] duration-300 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500";
        backgroundEl.classList.add(...backgroundElClasslist.split(" "));
        liEl.appendChild(backgroundEl);
      } else {
        // If current pathname is the same as path (active page), add the active classes instead
        liEl.classList.add(...activeLiClasslist.split(" "))
      }
      const linkTag = document.createElement("a");
      const linkTagClasses =
        "z-50 relative group-hover:text-white duration-300";
      linkTag.classList.add(...linkTagClasses.split(" "));
      linkTag.href = path;
      liEl.appendChild(linkTag);

      const textEl = document.createTextNode(name);
      linkTag.appendChild(textEl);
      return liEl;
    });

    // Add elements to navbar container
    navbarContainer.appendChild(ul);
    for (const el of liElementArray) {
      ul.appendChild(el);
    }
  });
};

renderNavbar();
