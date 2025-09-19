import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sun, Moon, RotateCcw } from "lucide-react";
import botImage from "/public/chatbot.avif";
import Chatbot from "/public/chatbot.png";

export default function ChatifyCard() {
  const [theme, setTheme] = useState("dark");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const handleRefresh = () => {
    setMessages([]);
    setInput("");
  };

  const handleSend = (e) => {
    e.preventDefault();
    const userMsg = input.trim();
    if (!userMsg) return;

    setMessages((prev) => [...prev, { from: "user", text: userMsg }]);
    setInput("");
  };

  return (
    <div
      className={`${
        theme === "light"
          ? "bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      } min-h-screen w-full flex items-center justify-center transition-colors duration-700`}
    >
      {/* Card */}
      <div
        className={`${
          theme === "light"
            ? "bg-white/80 text-gray-900"
            : "bg-gray-900/80 text-gray-100"
        } w-full sm:w-[420px] h-screen sm:h-[550px]
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
        <div className="flex-1 flex flex-col items-center justify-start px-4 py-6 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <motion.img
                src={Chatbot}
                alt="Bot"
                className="w-28 h-28 drop-shadow-xl"
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <h2 className="text-2xl sm:text-3xl font-semibold">
                How can I help you?
              </h2>
            </div>
          ) : (
            <div className="w-full flex flex-col gap-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-[85%] px-4 py-2 my-1 rounded-lg shadow text-start
            ${
              msg.from === "user"
                ? "self-end bg-purple-600 text-white"
                : "self-start bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            }`}
                >
                  <span className="text-sm">{msg.text}</span>
                </div>
              ))}
            </div>
          )}
          {loading && (
            <div className="w-full flex justify-start px-4 py-2 my-1">
              <span className="text-sm italic text-gray-500 dark:text-gray-400">
                Typing...
              </span>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form
          onSubmit={handleSend}
          className="flex items-center gap-2 px-4 py-4
                     border-t border-gray-200/40 dark:border-gray-700/40
                     bg-gray-50/10 dark:bg-gray-800/50
                     backdrop-blur-md transition-colors duration-700"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            disabled={loading}
            className="p-3 rounded-xl flex items-center justify-center shadow-md
                       bg-purple-600 hover:bg-purple-700
                       text-white transition-colors duration-300"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
