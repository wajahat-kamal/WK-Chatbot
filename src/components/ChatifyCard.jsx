import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Sun, Moon, RotateCcw } from "lucide-react";
import botImage from "/public/chatbot.avif";

export default function ChatifyCard() {
  // --- Theme Handling ---
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleRefresh = () => {
    console.log("🔄 Refresh clicked");
    // yahan apni refresh logic add karein
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-br from-amber-50 to-orange-100"
          : "bg-gradient-to-br from-gray-900 to-black"
      } min-h-screen w-full flex items-center justify-center p-4 transition-colors duration-500`}
    >
      {/* Card */}
      <div
        className="w-full sm:w-[420px] bg-white dark:bg-gray-900
                   rounded-2xl shadow-2xl flex flex-col overflow-hidden
                   border border-gray-200 dark:border-gray-700
                   transition-all duration-500"
      >
        {/* Header */}
        <header
          className="flex items-center justify-between px-5 py-4
                     bg-white/80 dark:bg-gray-800/80 shadow-md
                     backdrop-blur-md transition-colors duration-500"
        >
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src={botImage}
              alt="Chatify Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md"
            />
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
              CHATIFY
            </h1>
          </div>

          {/* Right: Refresh + Theme buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-lg hover:bg-purple-600 dark:bg-gray-700
                         text-gray-600 dark:text-gray-200 transition-colors duration-300"
              title="Refresh chat"
            >
              <RotateCcw size={18} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-purple-600 dark:bg-gray-700
                         text-gray-600 dark:text-gray-200 transition-colors duration-300"
              title="Toggle theme"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <motion.img
            src={botImage}
            alt="Bot"
            className="w-28 h-28 mb-6"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            How can I help you?
          </h2>
        </div>

        {/* Input Area */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 px-4 py-4
                     border-t border-gray-200 dark:border-gray-700
                     bg-gray-50 dark:bg-gray-800 transition-colors duration-500"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600
                       px-4 py-2 text-sm bg-white dark:bg-gray-900
                       text-gray-800 dark:text-gray-100
                       focus:outline-none focus:ring-2
                       focus:ring-purple-400 dark:focus:ring-purple-600
                       transition-colors duration-300"
          />

          <button
            type="submit"
            className="p-3 rounded-xl bg-purple-600 text-white
                       hover:bg-purple-700 transition flex items-center justify-center
                       shadow-md"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
