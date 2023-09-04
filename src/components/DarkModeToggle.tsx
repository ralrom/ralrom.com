import { useState } from "preact/hooks";

const Moon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className={`w-7 h-7 cursor-pointer ${props.className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
    />
  </svg>
);

const Sun = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
    className={`w-7 h-7 cursor-pointer ${props.className}`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
    />
  </svg>
);

export default function DarkModeToggle() {
  const [isDark, set_isDark] = useState(() => document.body.classList.contains("dark"));

  function setDarkMode(isDark: boolean) {
    localStorage.setItem("darkMode", isDark.toString());
    if (isDark) {
      document.body.classList.add("dark");
      set_isDark(true);
    } else {
      document.body.classList.remove("dark");
      set_isDark(false);
    }
  }

  return (
    <div class="flex gap-2 items-center py-2 px-4 rounded-full bg-primary-500 border border-primary-700 text-primary-50">
      <Moon onClick={() => setDarkMode(true)} className={isDark ? "text-secondary-600" : ""} />
      <Sun onClick={() => setDarkMode(false)} className={isDark === false ? "text-secondary-600" : ""} />
    </div>
  );
}
