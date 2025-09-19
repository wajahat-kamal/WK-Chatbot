import React from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import botImage from "/public/chatbot.avif"; // <-- apni bot image ka path yahan lagayein

export default function ChatifyCard() {
  return (
    <div
      className="min-h-screen w-full 
                 bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 
                 flex items-center justify-center p-4"
    >
      {/* Card */}
      <div
        className="w-full sm:w-[420px] bg-white dark:bg-gray-900 
                   rounded-2xl shadow-2xl flex flex-col
                   overflow-hidden"
      >
        {/* Header */}
        <header className="flex items-center justify-center gap-3 py-4 bg-white/90 dark:bg-gray-800/90 shadow-md">
          <img
            src={botImage}
            alt="Chatify Logo"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 tracking-wide">
            CHATIFY
          </h1>
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
            How can I help you
          </h2>
        </div>

        {/* Input Area */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center gap-2 px-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
        >
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600
                       px-4 py-2 text-sm bg-white dark:bg-gray-900
                       text-gray-800 dark:text-gray-100
                       focus:outline-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-purple-600"
          />

          <button
            type="submit"
            className="p-3 rounded-xl bg-purple-600 text-white hover:opacity-90 flex items-center justify-center"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
