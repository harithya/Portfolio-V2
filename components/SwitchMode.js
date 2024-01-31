import React from "react";
import { useTheme } from "next-themes";
import NoSSR from "react-no-ssr";

export default function SwitchMode() {
  const { theme, setTheme } = useTheme();
  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <NoSSR>
      <div className="fixed xl:bottom-8 xl:right-8 bottom-5 right-5 z-50">
        <button
          onClick={handleDarkMode}
          className="xl:p4 hover:bg-gray-300 bg-gray-200  dark:hover:bg-zinc-900 dark:bg-zinc-800 hover:scale-105 transition-transform p-4 rounded-full shadow-sm"
        >
          {theme == "light" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </NoSSR>
  );
}
