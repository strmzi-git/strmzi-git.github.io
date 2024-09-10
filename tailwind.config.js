/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "profile.html",
    "dashboard.html",
    "faq.html",
    "blog.html",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height',
        'opacity': 'opacity'
      },
    },
  },
  safelist: [
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-lg",
    "font-semibold",
    "font-black",
    "font-bold",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "w-[250px]",
    "h-[2px]",
    "h-[50px]",
    "bg-gradient-to-r",
    "from-pink-500",
    "via-red-500",
    "to-yellow-500",
    "p-4",
    "mb-2",
    "opacity-70",
    "via-30%",
    "to-80%",
    "text-lg",
    "sm:text-xl",
    "md:text-2xl",
    // "lg:text-xl",
    "w-auto",
    "cursor-pointer",
    "relative",
    "px-4",
    "py-3",
    "font-bold",
    "rounded-2xl",
    "group",
    "overflow-hidden",
    "bg-gradient-to-r",
    "from-pink-500",
    "via-red-500",
    "to-yellow-500",
    "text-white",
    // "group-hover:text-white",
    "w-full",
    "z-10",
    "absolute",
    "top-0",
    "left-[-100%]",
    "h-full",
    "group-hover:left-[0]",
    "duration-300",
    "z-50",
    "group-hover",
    "flex",
    "items-center",
    "gap-4",
    "justify-center",
    "h-[75px]",
    "w-[75px]",
    "bg-black",
    "border",
    "hover:bg-gray-100",
    "duration-400",
    "bg-blue-400",
    "bg-green-400",
    "transition-colors",
    "duration-500",
    "ease-in-out",
    "opacity-30",
    "bg-gray-400",
    "justify-between",
    "transition",
    "h-[0px]",
    "h-auto",
    "transition-height",
    "opacity-0",
    "opacity-1",
    "pl-4",
    "translate-x-[16px]",
    "max-w-[550px]",
    "w-[550px]",
    "rotate-[90deg]",
    "text-green-400",
    "text-pink-500",
    "font-black",
    "border-[2px]",
    "border-collapse",
    "table-fixed",
    "col-span-4",
    "border",
    "p-1"
  ],
  plugins: [],
};
