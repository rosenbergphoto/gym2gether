import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SignIn = () => {
  return (
    <div id="prihlaseni" className="mt-20 px-6">
      {/* 🏆 Nadpis s animací */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
      >
        Chci se přihlásit jako:
      </motion.h2>

      {/* 📌 Dlaždice pro výběr */}
      <div className="flex flex-wrap justify-center gap-6 mt-10 max-w-6xl mx-auto">
        {pricingOptions.map((option, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="w-full sm:w-[48%] lg:w-[46%]" // Širší dlaždice
          >
            <div className="p-10 border border-neutral-700 rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 hover:scale-105 transition">
              {/* 🏅 Titulek */}
              <p className="text-4xl font-semibold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text mb-6">
                {option.title}
              </p>

              {/* ✅ Výhody */}
              <ul className="space-y-4 text-neutral-300">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <CheckCircle2 className="text-teal-400 w-6 h-6" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* 🔹 Přihlašovací tlačítko */}
              <Link
                to={option.title === "Trenér" ? "/coachsignin" : "/usersignin"}
                className="block w-full mt-10"
              >
                <button className="w-full h-12 text-xl font-semibold text-white bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg shadow-md hover:scale-105 transition">
                  Přihlásit se jako {option.title}
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SignIn;
