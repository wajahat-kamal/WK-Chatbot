import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-sm font-medium text-gray-900 mt-auto">
      <div className="max-w-6xl  px-4 py-4 bg-[#345c746b] backdrop-blur-md rounded-t-xl shadow-md text-center md:text-left">
        
        {/* Links */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-2 mb-2">
          <a
            href="https://wajahatkamal-dev.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900"
          >
            Explore the <span className="text-blue-900 font-semibold">Portfolio</span> of the Chatbot's <span className="text-blue-900 font-semibold">Creator</span>.
          </a>
          <a
            href="https://github.com/wajahat-kamal/WK-Chatbot.git"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-900"
          >
            View the source code of this <span className="text-blue-900 font-semibold">Chatbot</span> website.
          </a>
        </div>

        {/* Info */}
        <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 gap-1 text-gray-800">
          <p>
            © {currentYear} <span className="text-blue-900 font-semibold">Wajahat Kamal</span>. All rights reserved.
          </p>
          <p>Built with React JS and Tailwind CSS.</p>
          <p className="text-[13px] md:text-sm">Created in June 2025</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
