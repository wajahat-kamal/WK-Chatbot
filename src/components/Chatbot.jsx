import { useState, useEffect, useRef } from "react";
import PageRefresh from "./PageRefresh";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: input }] }],
        }),
      }
    );

    const data = await res.json();
    const botReply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

    setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="glass font-poppins relative w-[95%] md:w-[60%] h-[70dvh] rounded-lg shadow-lg p-4 space-y-2 mb-4 transition-colors duration-300">
      {/* Header */}
      <div className="relative border-b border-[#3E35BB] pb-4 flex justify-between items-center">
        <h1 className="text-3xl  md:text-5xl font-semibold text-white drop-shadow-lg flex flex-row items-center justify-center">
          <img
            className="md:w-10 md:h-10 w-8 h-8 mr-2 animate-pulse rounded-2xl md:rounded-3xl"
            src="chatbot.avif"
            alt="bot"
          />
          WK Chatbot
        </h1>
        <PageRefresh />
      </div>

      {/* Messages */}
      <div className="pt-5 pb-20 space-y-4 md:space-y-0 h-[55dvh] overflow-y-auto pr-1 custom-scroll">
        {!messages.length && (
          <div className="flex items-center justify-center h-full">
            <h2 className="text-4xl text-white font-semibold text-center">
              How can I help you?
            </h2>
          </div>
        )}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl shadow-md max-w-[80%] text-sm whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-blue-700 bg-opacity-60 text-right"
                  : "bg-gray-700 bg-opacity-60 flex items-start space-x-2"
              }`}
            >
              {msg.role === "bot" && (
                <img
                  src="chatbot.avif"
                  className="w-6 h-6 mr-2 animate-pulse rounded-2xl"
                  alt="Bot"
                />
              )}
              <p className="text-white">{msg.text}</p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="flex p-3 space-x-2 absolute bottom-3 w-[97%] glass rounded-lg">
        <input
          type="text"
          className="flex-1 border-none outline-none bg-transparent placeholder-gray-400 text-white px-3 py-2"
          placeholder="Type a message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transform text-white p-2 rounded-lg transition"
        >
          <img className="w-6 h-6" src="up-arrow.png" alt="Send" />
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
