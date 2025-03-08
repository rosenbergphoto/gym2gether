import { useState, useEffect } from "react";
import video1 from "../assets/fitvideo.mp4";
import video2 from "../assets/fitvideo2.mp4";
import titleImage from "../assets/titlefitness.png"; 
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateText(true), 500);
  }, []);

  return (
    <div id="herosection" className="relative flex flex-col items-center mt-6 lg:mt-20 px-6">
      
{/* 📌 Obrázek s rozmazáním a fade-out efektem */}
<div className="absolute top-[-6rem] left-1/2 transform -translate-x-1/2 flex justify-center w-full">
  <motion.div
    className="relative w-64 sm:w-80 md:w-96"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    {/* ✅ Samotný obrázek s rozmazáním */}
    <img
      src={titleImage}
      alt="Title Fitness"
      className="w-full relative z-10 mask-image-gradient"// ✅ Přidáno rozmazání
    />

  </motion.div>
</div>





      {/* 🏆 Hlavní nadpis s animací */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: animateText ? 1 : 0, y: animateText ? 0 : -50 }}
        transition={{ duration: 1 }}
        className="relative z-20 text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide mt-16 sm:mt-24"
      >
        Jedno místo pro propojení
        <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-800 text-transparent bg-clip-text">
          {" "}
          trenérů a uživatelů
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateText ? 1 : 0, y: animateText ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-10 text-lg text-center text-neutral-400 max-w-4xl"
      >
        Připojte se k platformě propojující trenéry a sportovce, kde můžete sledovat svůj progres, najít tréninkové plány a spojit se s profesionály.
      </motion.p>

      {/* 📌 Akční tlačítka s animací */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateText ? 1 : 0, y: animateText ? 0 : 30 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex justify-center my-10 space-x-4"
      >
        <ScrollLink
          to="prihlaseni"
          smooth={true}
          duration={500}
          offset={-100}
          className="py-3 px-6 bg-blue-600 text-white rounded-md shadow-md hover:scale-105 hover:bg-blue-700 transition cursor-pointer"
        >
          Přihlásit se
        </ScrollLink>

        <button
          onClick={() => setIsAboutOpen(true)}
          className="py-3 px-6 border border-white text-white rounded-md shadow-md hover:bg-white hover:text-black transition"
        >
          O nás
        </button>
      </motion.div>

      {/* 🎥 Videa - zvětšená */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: animateText ? 1 : 0, y: animateText ? 0 : 30 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-col sm:flex-row mt-16 justify-center w-full max-w-6xl"
      >
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-[48%] border border-blue-500 shadow-sm shadow-indigo-800 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-[48%] border border-blue-500 shadow-sm shadow-indigo-800 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* 📌 Modal "O nás" */}
      {isAboutOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full"
          >
            <h2 className="text-2xl font-bold text-center mb-4">O projektu</h2>
            <p className="text-md text-gray-300">
              Tento projekt vznikl jako <strong>bakalářská práce Davida Rosenberga</strong> na téma:
              <span className="block mt-2 font-semibold text-white">
                "Psychologický vliv grafického rozhraní na uživatele".
              </span>
            </p>
            <div className="flex justify-end mt-6">
              <button 
                onClick={() => setIsAboutOpen(false)} 
                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Zavřít
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
