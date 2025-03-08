import { Menu, X, ArrowUp, MessageCircle, Send, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../../assets/fiticon.png";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const UserNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Ahoj Tomáši! 🔥 Tvůj jídelníček byl aktualizován pro lepší regeneraci. Doporučuji více bílkovin po tréninku!", sender: "trainer" }
  ]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    document.body.style.overflow = isChatOpen ? "auto" : "hidden"; // Blokování scrollování při chatu
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");

      // Simulovaná odpověď trenéra
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Díky za zprávu! Ozvu se ti brzy. 💪", sender: "trainer" },
        ]);
      }, 1000);
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <RouterLink to="/" className="flex items-center flex-shrink-0 cursor-pointer">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Gym2gether</span>
            </RouterLink>

            {/* Dlaždice "Trenérské rozhraní" */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500/20 text-teal-400 px-6 py-2 rounded-lg shadow-md">
              <span className="text-lg font-semibold">Klienstské rozhraní</span>
            </div>

            {/* Tlačítka */}
            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <button 
                onClick={toggleChat} 
                className="bg-gradient-to-r from-green-400 to-blue-600 py-2 px-4 rounded-md flex items-center shadow-md hover:scale-105 transition"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chat s trenérem
              </button>

              <button 
                onClick={handleLogout} 
                className="bg-red-500 py-2 px-4 rounded-md flex items-center shadow-md hover:scale-105 transition"
              >
                <LogOut className="w-5 h-5 mr-2" /> Odhlásit se
              </button>
            </div>

            {/* Mobilní menu */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Chatovací okno */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg w-96 h-[500px] p-4 shadow-xl rounded-xl border border-gray-300 flex flex-col z-50">
          <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-t-xl">
            <h3 className="text-lg font-bold">Chat s trenérem</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 max-w-[75%] rounded-lg text-sm transition ${
                  msg.sender === "user" 
                    ? "bg-gradient-to-r from-green-500 to-teal-400 text-white self-end ml-auto shadow-md" 
                    : "bg-gray-600 text-white self-start mr-auto shadow-md"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="flex items-center mt-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Napište zprávu..."
              className="flex-1 p-2 bg-white/10 text-white placeholder-gray-300 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button 
              onClick={sendMessage} 
              className="ml-2 bg-blue-600 text-white p-2 rounded-md shadow-md hover:bg-blue-700"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

{/* Šipka zpět nahoru */}
{showScroll && (
  <ScrollLink 
    to="user-dashboard-section" // Odkazujeme na správné ID
    smooth={true}
    duration={500}
    offset={-50} // Upravíme offset kvůli navbaru
    className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800 p-3 rounded-full shadow-lg text-white cursor-pointer transition hover:scale-110"
  >
    <ArrowUp size={24} />
  </ScrollLink>
)}
    </>
  );
};

export default UserNavbar;
