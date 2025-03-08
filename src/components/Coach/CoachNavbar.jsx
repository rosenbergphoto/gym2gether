import { useState } from "react";
import { Menu, X, MessageCircle, Send, LogOut, Users } from "lucide-react";
import clientsData from "../../constants/clientData";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom"; 
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/fiticon.png";

const CoachNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const openChatSelection = () => {
    setIsChatOpen(true);
    setSelectedClient(null);
    setMobileDrawerOpen(false);
  };

  const openChat = (client) => {
    setSelectedClient(client);
    setMessages(client === "Tomáš" ? [
      { text: "Ahoj Tomáši! 🔥 Tvůj jídelníček byl aktualizován pro lepší regeneraci. Doporučuji více bílkovin po tréninku!", sender: "coach" }
    ] : []);
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setSelectedClient(null);
  };

  const sendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "coach" }]);
      setMessage("");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center py-3">
            
            {/* Logo & Gym2gether (nyní bílé) */}
            <RouterLink to="/" className="flex items-center flex-shrink-0 cursor-pointer">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Gym2gether</span>
            </RouterLink>

            {/* Dlaždice "Trenérské rozhraní" */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-500/20 text-orange-400 px-6 py-2 rounded-lg shadow-md">
              <span className="text-lg font-semibold">Trenérské rozhraní</span>
            </div>

            {/* Tlačítka pro PC */}
            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <button 
                onClick={openChatSelection} 
                className="bg-gradient-to-r from-green-400 to-blue-600 py-2 px-4 rounded-md flex items-center shadow-md hover:scale-105 transition"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Chat s klienty
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

      {/* Animované mobilní menu */}
      <AnimatePresence>
        {mobileDrawerOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-64 bg-neutral-900 shadow-lg p-6 z-50 transform"
          >
            {/* Zavírací tlačítko */}
            <button
              onClick={toggleNavbar}
              className="py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:scale-105 hover:bg-blue-700 transition cursor-pointer w-full text-center"
            >
              Zavřít
            </button>

            {/* Navigační tlačítka */}
            <ul className="mt-6 space-y-4">
              <li>
                <button
                  onClick={openChatSelection}
                  className="block w-full text-lg text-white hover:text-indigo-500 transition  items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" /> Chat s klienty
                </button>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-lg text-red-500 hover:text-red-400 transition  items-center"
                >
                  <LogOut className="w-5 h-5 mr-2" /> Odhlásit se
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Výběr klienta pro chat */}
      {isChatOpen && !selectedClient && (
        <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg w-80 p-4 shadow-xl rounded-xl border border-gray-300 flex flex-col z-50">
          <h3 className="text-lg font-bold text-white mb-2">Vyber klienta</h3>
          <div className="flex flex-col space-y-2">
            {Object.keys(clientsData).map((client) => (
              <button
                key={client}
                onClick={() => openChat(client)}
                className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition flex items-center"
              >
                <Users className="w-5 h-5 mr-2" /> {client}
              </button>
            ))}
          </div>
          <button onClick={closeChat} className="text-gray-300 mt-3 hover:text-white text-sm">Zrušit</button>
        </div>
      )}

      {/* Chatovací okno */}
      {isChatOpen && selectedClient && (
        <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur-lg w-96 h-[500px] p-4 shadow-xl rounded-xl border border-gray-300 flex flex-col z-50">
          <div className="flex justify-between items-center bg-gradient-to-r from-green-500 to-teal-400 text-white px-4 py-2 rounded-t-xl">
            <h3 className="text-lg font-bold">Chat s {selectedClient}</h3>
            <button onClick={closeChat} className="text-white hover:text-gray-200">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 max-w-[75%] rounded-lg text-sm transition ${
                  msg.sender === "coach" 
                    ? "bg-green-500 text-white self-end ml-auto shadow-md" 
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
    </>
  );
};

export default CoachNavbar;
