import { useState, useEffect, useRef } from "react";
import PageRefresh from "./PageRefresh";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);
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
      <div
        className="relative w-[95%] md:w-[60%] h-[80dvh] rounded-lg shadow p-4 space-y-2 mb-4 transition-colors duration-300 bg-gray-800"
      >
        {/* Header */}
        <div
          className="w-full h-18 bg-blue-800 absolute top-0 right-0 flex justify-between items-center p-4 rounded-t-lg"
        >
          <h1 className="text-4xl font-semibold text-white">WK AI Chatbot</h1>
          <div className="flex flex-row gap-2">
            <PageRefresh />
          </div>
        </div>

        {/* Messages */}
        <div className="pt-20 pb-20 h-[68dvh] space-y-3 overflow-y-auto pr-1">

          <div className={`w-full h-[30dvh] flex items-center justify-center ${messages.length > 0 ? "hidden" : "block"}`}>
          <h1 className=" text-4xl text-white font-semibold text-center">WK AI Chatbot <br /> How can i help you?</h1>
          </div>
            
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-2 rounded text-white text-sm whitespace-pre-line ${
                msg.role === "user" ? "bg-blue-800 text-right" : "bg-gray-700 text-left"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))}
          <div ref={bottomRef}></div>
        </div>

        {/* Input */}
        <div className="flex space-x-2 absolute bottom-3 w-[93%] md:w-[96%]">
          <input
            type="text"
            className="flex-1 border outline-none rounded px-3 py-2 bg-gray-700 border-gray-400 text-white"
            autoFocus
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="bg-blue-800 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            <img className="w-6 h-6" src="up-arrow.png" alt="Arrow" />
          </button>
        </div>
      </div>
  );
};

export default ChatBot;
