import { Menu, X, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/fiticon.png";
import { navItems } from "../constants";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const [email, setEmail] = useState("");

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
    document.body.classList.add("overflow-hidden"); // Zabrání scrollování
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setEmail(""); // Vymazání e-mailu po zavření
    document.body.classList.remove("overflow-hidden"); // Obnoví scrollování
  };

  const handleSendEmail = () => {
    if (email) {
      alert(`Pokyny byly odeslány na ${email}`); // Simulace odeslání
      handleClosePopup();
    } else {
      alert("Prosím zadejte e-mail.");
    }
  };

  // Sleduje posun stránky a zobrazuje/skrývá šipku nahoru
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Transparentní Navbar s rozostřením */}
      <nav className="sticky top-0 z-50 bg-transparent backdrop-blur-lg border-b border-neutral-700">
        <div className="container px-4 mx-auto relative lg:text-sm">
          <div className="flex justify-between items-center py-3">
            
            {/* Logo pro návrat na hlavní stránku */}
            <RouterLink to="/" className="flex items-center flex-shrink-0 cursor-pointer">
              <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
              <span className="text-xl tracking-tight">Gym2gether</span>
            </RouterLink>

            {/* Navigace */}
            <ul className="hidden lg:flex ml-14 space-x-12">
              {navItems.map((item, index) => (
                <li key={index}>
                  <ScrollLink 
                    to={
                      item.label === "Výhody" ? "workflow" : 
                      item.label === "Recenze" ? "testimonials" : 
                      item.id
                    } 
                    smooth={true} 
                    duration={500} 
                    spy={true}
                    exact="true"
                    offset={-100} // Posun kvůli fixnímu navbaru
                    className="cursor-pointer hover:text-indigo-500 transition"
                  >
                    {item.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Akční tlačítka */}
            <div className="hidden lg:flex justify-center space-x-12 items-center">
              <button
                onClick={handleOpenPopup}
                className="bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800 py-2 px-3 rounded-md cursor-pointer"
              >
                Vyžádat kód
              </button>
            </div>

            {/* Mobilní menu tlačítko */}
            <div className="lg:hidden md:flex flex-col justify-end">
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Obsah stránky */}
      <div className={`${isPopupOpen ? "blur-lg" : ""} transition-all duration-300`}>
        {/* Zde bude obsah stránky */}
      </div>

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

            <div className="flex justify-center space-x-4">
              <button 
                onClick={handleSendEmail} 
                className="bg-gradient-to-r from-green-500 to-teal-500 py-2 px-5 rounded-md text-white hover:scale-105 transition"
              >
                Odeslat
              </button>
              <button 
                onClick={handleClosePopup} 
                className="bg-red-500 py-2 px-5 rounded-md text-white hover:scale-105 transition"
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Šipka zpět nahoru (nezobrazuje se, když je pop-up aktivní) */}
      {!isPopupOpen && showScroll && (
        <ScrollLink
          to="herosection"
          smooth={true}
          duration={500}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800 p-3 rounded-full shadow-lg text-white cursor-pointer transition hover:scale-110"
        >
          <ArrowUp size={24} />
        </ScrollLink>
      )}
    </>
  );
};

export default Navbar;
