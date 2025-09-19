import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sun, Moon, RotateCcw } from "lucide-react";
import botImage from "/public/chatbot.avif";

export default function ChatifyCard() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleRefresh = () => {
    console.log("🔄 Refresh clicked");
    // apni refresh logic yahan add karein
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      } min-h-screen w-full flex items-center justify-center
         transition-colors duration-700`}
    >
      {/* Card */}
      <div
        className={`${
          theme === "light"
            ? "bg-white/60 text-gray-900"
            : "bg-gray-900/80 text-gray-100"
        } w-full sm:w-[420px] h-screen sm:h-[540px]
          sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden
          backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/40
          transition-all duration-700`}
      >
        {/* Header */}
        <header
          className="flex items-center justify-between px-5 py-4
                     bg-white/10 dark:bg-gray-800/50 backdrop-blur-md
                     border-b border-gray-200/40 dark:border-gray-700/40
                     shadow-sm transition-colors duration-700"
        >
          {/* Left: Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src={botImage}
              alt="Chatify Logo"
              className="w-10 h-10 rounded-full object-cover shadow-md ring-2 ring-purple-500/40"
            />
            <h1 className="text-2xl font-bold tracking-wide text-white">
              CHATIFY
            </h1>
          </div>

          {/* Right: Refresh + Theme buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleRefresh}
              className="p-2 rounded-xl hover:bg-purple-500/20
                         text-gray-600 dark:text-gray-200
                         bg-gray-700
                         hover:text-purple-600 dark:hover:text-purple-400
                         transition-colors duration-300"
              title="Refresh chat"
            >
              <RotateCcw size={20} />
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-purple-500/20 bg-gray-700
                         text-gray-600 dark:text-gray-200
                         hover:text-purple-600 dark:hover:text-purple-400
                         transition-colors duration-300"
              title="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-8">
          <motion.img
            src={botImage}
            alt="Bot"
            className="w-28 h-28 mb-6 drop-shadow-xl"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <h2 className="text-2xl sm:text-3xl font-semibold">
            How can I help you?
          </h2>
        </div>

        {/* Input Area */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 px-4 py-4
                     border-t border-gray-200/40 dark:border-gray-700/40
                     bg-gray-50/10 dark:bg-gray-800/50
                     backdrop-blur-md transition-colors duration-700"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600
                       px-4 py-2 text-sm
                       bg-white/70 dark:bg-gray-900/70
                       text-gray-800 dark:text-gray-100
                       focus:outline-none focus:ring-2
                       focus:ring-purple-400 dark:focus:ring-purple-600
                       placeholder-gray-500 dark:placeholder-gray-400
                       transition-colors duration-300"
          />

          <button
            type="submit"
            className="p-3 rounded-xl bg-purple-600 text-white
                       hover:bg-purple-700 transition
                       flex items-center justify-center
                       shadow-md shadow-purple-500/30"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
