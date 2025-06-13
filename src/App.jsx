import ChatBot from "./components/Chatbot";
import Footer from "./components/Footer";

export default function() {
  return(
    <div className="min-h-screen w-full flex flex-col items-center justify-end pb-5">
       <ChatBot/>
      <Footer />
       
    </div>
  )
}