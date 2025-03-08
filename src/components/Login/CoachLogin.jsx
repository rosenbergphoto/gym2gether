import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CoachLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResetPopupOpen, setIsResetPopupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); 

  // Simulovaná správná přihlašovací data
  const correctUsername = "jonas";
  const correctPassword = "coach123";

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = username === correctUsername && password === correctPassword;
    setIsSuccess(isValid);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    if (isSuccess) {
      navigate("/coachdash"); // Přesměrování na dashboard při úspěchu
    } else {
      setUsername(""); // Vymazání jména
      setPassword(""); // Vymazání hesla
    }
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    alert(`Pokud existuje účet s e-mailem ${email}, obdržíte odkaz pro obnovu hesla.`);
    setIsResetPopupOpen(false);
    setEmail("");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }} 
      className="relative flex flex-col items-center mt-6 lg:mt-20"
    >
      {/* 🏆 Nadpis */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Přihlaste se jako
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
          {" "} trenér
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
      >
        Zadejte své přihlašovací jméno a heslo:
      </motion.p>

      {/* 📌 Formulář pro přihlášení */}
      <motion.form 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, delay: 0.8 }} 
        className="flex flex-col items-center mt-8"
      >
        {/* Přihlašovací jméno */}
        <motion.input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Přihlašovací jméno"
          className="border border-neutral-500 rounded-md px-4 py-2 w-64 text-center text-orange-400 bg-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 mb-4"
          whileFocus={{ scale: 1.05 }}
        />

        {/* Heslo s tlačítkem pro zobrazení */}
        <div className="relative flex items-center w-64">
          <motion.input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Heslo"
            className="border border-neutral-500 rounded-md px-4 py-2 pr-10 w-full text-center text-orange-400 bg-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            whileFocus={{ scale: 1.05 }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Tlačítko přihlášení */}
        <motion.button 
          type="submit"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-r from-orange-500 to-purple-800 py-3 px-6 mt-4 rounded-md text-white transition"
        >
          Přihlásit se
        </motion.button>
      </motion.form>

      {/* Odkaz pro zapomenuté heslo */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }} // Poslední animace
        className="mt-4 text-neutral-500 cursor-pointer hover:underline"
        onClick={() => setIsResetPopupOpen(true)}
        whileHover={{ scale: 1.05 }}
      >
        Zapomněli jste heslo?
      </motion.p>

      {/* 📌 Pop-up okno s animací pro přihlášení */}
      {isPopupOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 text-white p-8 rounded-xl shadow-lg w-80 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {isSuccess ? "✅ Přihlášení úspěšné!" : "❌ Nesprávné údaje"}
            </h2>
            <p className="mb-6">
              {isSuccess 
                ? "Vítejte trenére! Přihlášení proběhlo úspěšně."
                : "Zkuste to znovu, zadané údaje nejsou správné."
              }
            </p>
            <motion.button 
              onClick={handleClosePopup} 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-red-500 to-orange-500 py-2 px-5 rounded-md text-white transition"
            >
              {isSuccess ? "Pokračovat" : "Zkusit znovu"}
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* 📌 Pop-up okno pro obnovu hesla */}
      {isResetPopupOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }} 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-neutral-900 text-white p-8 rounded-xl shadow-lg w-80 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Obnova hesla</h2>
            <p className="mb-4">Zadejte svůj e-mail a obdržíte odkaz pro reset hesla.</p>
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Váš e-mail" 
              className="border border-neutral-500 rounded-md px-4 py-2 w-full bg-black text-orange-400"
            />
            <motion.button 
              onClick={handleResetSubmit} 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-gradient-to-r from-red-500 to-orange-700 py-2 px-6 rounded-md text-white"
            >
              Odeslat
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default CoachLogin;
