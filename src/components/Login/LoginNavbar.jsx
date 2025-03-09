import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/fiticon.png";

const LoginNavbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEmail(""); 
    document.body.classList.remove("overflow-hidden");
  };

  const handleSendEmail = () => {
    if (email) {
      alert(`Pokyny byly odeslány na ${email}`);
      handleClosePopup();
    } else {
      alert("Prosím zadejte e-mail.");
    }
  };

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

            {/* Přihlášení uprostřed (PC) */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 text-blue-400 px-6 py-2 rounded-lg shadow-md">
              <span className="text-lg font-semibold">Přihlášení</span>
            </div>

            {/* Tlačítko "Vyžádat kód" (PC) */}
            <div className="hidden lg:flex justify-center space-x-6 items-center">
              <button 
                onClick={handleOpenPopup}
                className="bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800 py-2 px-4 rounded-md shadow-md hover:scale-105 transition"
              >
                Vyžádat kód
              </button>
            </div>

            {/* Mobilní burger menu */}
            <div className="lg:hidden flex justify-center items-center">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
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
                  onClick={() => {
                    handleOpenPopup();
                    setMobileDrawerOpen(false);
                  }}
                  className="block w-full text-lg text-white bg-gradient-to-r from-blue-500 to-indigo-600 py-3 px-6 rounded-md shadow-md hover:scale-105 transition text-center"
                >
                  Vyžádat kód
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pop-up okno */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="bg-neutral-900 text-white p-8 rounded-xl shadow-lg w-96 text-center">
            <h2 className="text-2xl font-semibold mb-4">Vyžádat kód</h2>
            <p className="mb-6">
              Pokud se chcete přidat jako trenér nebo uživatel do aplikace, 
              vyplňte svůj e-mail a my vám pošleme pokyny s dalšími kroky.
            </p>
            
            {/* Pole pro zadání e-mailu */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Zadejte svůj e-mail"
              className="w-full px-4 py-2 mb-4 text-white bg-neutral-800 placeholder-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Akční tlačítka */}
            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleSendEmail} 
                className="bg-gradient-to-r from-green-500 to-teal-500 py-2 px-5 rounded-md text-white hover:scale-105 transition"
              >
                Odeslat
              </button>
              <button 
                onClick={handleClosePopup} 
                className="py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:scale-105 hover:bg-blue-700 transition cursor-pointer"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginNavbar;
