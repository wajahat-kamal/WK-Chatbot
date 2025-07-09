import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-[95%] md:w-[62%] text-sm font-medium text-gray-300 px-4">
      <div className="max-w-6xl mx-auto px-4 py-5 bg-[#1f1f2b]/60 backdrop-blur-md rounded-t-2xl shadow-inner border-t border-gray-700 text-center md:text-left transition-all duration-300">

        {/* Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-3 mb-1">
          <a
            href="https://wajahatkamal-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            Explore the <span className="text-blue-400 font-semibold">Portfolio</span> of the Chatbot's <span className="text-blue-400 font-semibold">Creator</span>.
          </a>
          <a
            href="https://github.com/wajahat-kamal/WK-Chatbot.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            View the source code of this <span className="text-blue-400 font-semibold">Chatbot</span> website.
          </a>
        </div>

        {/* Info */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-2 text-gray-400 text-xs md:text-sm">
          <p>
            © {currentYear} <span className="text-blue-400 font-semibold">Wajahat Kamal</span>. All rights reserved.
          </p>
          <p>Built with React JS + Tailwind CSS.</p>
          <p className="italic">Created in June 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
