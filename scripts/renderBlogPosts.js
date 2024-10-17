const blogPostContent = [
  {
    title: "My programming experience",
    url: "programming-experience.html",
    description:
      "Learn about my programming experience prior to joining the ICT program at HZ...",
  },
  {
    title: "Profession after graduation",
    url: "field-of-work.html",
    description: "Learn about my unconventional 'plan' for the future.",
  },
  {
    title: "SWOT Analysis ",
    url: "swot-analysis.html",
    description: "My SWOT analysis from learn.hy",
  },
  {
    title: "ICT Field of work",
    url: "line-of-work.html",
    description: "Potential career paths in the ICT line of work.",
  },
  {
    title: "Round 1 feedback",
    url: "feedback.html",
    description:
      "View the feedback I received from the first round of feedback.",
  },
];

const renderAllBlogPosts = function () {
  const container = document.getElementById("innerContainer");

  blogPostContent.forEach((post) => {
    const blogDiv = document.createElement("a");
    blogDiv.href = `/blog/${post.url}`;
    blogDiv.classList.add(
      "rounded-md",
      "bg-white",
      "shadow-md",
      "p-4",
      "flex",
      "flex-col",
      "items-start",
      "hover:translate-y-[-5px]",
      "transition",
      "duration-200",
      "hover:scale-[0.99]",
      "cursor-pointer"
    );

    const titleDiv = document.createElement("div");
    titleDiv.classList.add(
      "w-full",
      "flex",
      "justify-between",
      "mb-4",
      "items-end"
    );

    const title = document.createElement("h1");
    title.classList.add(
      "text-2xl",
      "font-semibold",
      "bg-gradient-to-r",
      "mt-4",
      "from-yellow-500",
      "to-pink-500",
      "via-red-500",
      "text-transparent",
      "bg-clip-text"
    );
    title.textContent = post.title;

    const readingTime = document.createElement("p");
    readingTime.classList.add("text-sm", "font-light");
    readingTime.textContent = post.readingTime;

    titleDiv.appendChild(title);
    titleDiv.appendChild(readingTime);

    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("mb-2");
    descriptionDiv.textContent = post.description;
    blogDiv.appendChild(titleDiv);
    blogDiv.appendChild(descriptionDiv);
    container.appendChild(blogDiv);
  });
};

renderAllBlogPosts();
