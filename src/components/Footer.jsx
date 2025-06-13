

function Footer() {

  const currentYear = new Date().getFullYear();

  return(
    <footer className="text-center text-[15px] font-semibold text-gray-900">

      <div className="flex flex-col md:flex-row md:gap-5 gap-0 md:mb-0 mb-3">
        <a href="https://wajahat-kamal-portfolio.vercel.app/" target="_blank" className="hover:text-blue-900">Explore the <span className="text-blue-900">Portfolio</span> of the Chatbot's <span className="text-blue-900">Creator</span>.</a>
        <a href="https://github.com/wajahat-kamal/WK-Chatbot.git" target="_blank" className="hover:text-blue-900">View the source code of this <span className="text-blue-900">Chatbot</span> website.</a>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 gap-0">
        <p>© {currentYear} <span className="text-blue-900">Wajahat Kamal</span>. All rights reserved.</p>
        <p> Built with React JS and Tailwind CSS.</p>
        <p className="text-[13px] md:text-[16px] font-semibold">Created in June 2025</p>
        </div>
       
      </footer>
  )
}
export default Footer