import { useState } from "react";
import { motion } from "framer-motion";
import { Ruler, BarChart, Scale, Move, Smile, Calendar } from "lucide-react";

const UserInitials = () => {
  // ✅ Výchozí hodnoty pro uživatele
  const [userStats, setUserStats] = useState({
    age: 25,
    weight: 80,
    height: 180,
    benchPress: 100,
    squat: 120,
    deadlift: 150,
    mood: "citim_se_skvele",
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 2 }}
      className="flex justify-center w-full mt-6 px-4 sm:px-6"
    >
      <div className="w-full max-w-6xl bg-gradient-to-br from-purple-500 via-fuchsia-600 to-pink-700 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition">
        
        {/* 🔹 Nadpis s animovanou ikonou */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center mb-4"
        >
          <motion.div 
            animate={{ y: [0, -3, 0] }} 
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Ruler className="w-8 h-8 text-white mr-3" />
          </motion.div>
          <h3 className="text-2xl font-bold">Osobní údaje</h3>
        </motion.div>

        {/* 📏 Osobní údaje - lepší zarovnání na mobilu a fixace šířky */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full"
        >
          {[
            { label: "Věk", field: "age", icon: <Calendar /> },
            { label: "Váha (kg)", field: "weight", icon: <Scale /> },
            { label: "Výška (cm)", field: "height", icon: <Move /> },
            { label: "Bench Press (kg)", field: "benchPress", icon: <BarChart /> },
            { label: "Dřep (kg)", field: "squat", icon: <Move /> },
            { label: "Mrtvý tah (kg)", field: "deadlift", icon: <Move /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col items-center w-full"
            >
              <div className="flex items-center">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {stat.icon}
                </motion.div>
                <span className="ml-2">{stat.label}</span>
              </div>
              <input
                type="number"
                value={userStats[stat.field]}
                onChange={(e) => setUserStats({ ...userStats, [stat.field]: e.target.value })}
                className="w-full px-3 py-2 text-white bg-white/10 backdrop-blur-md rounded-md text-center mt-2 focus:ring-2 focus:ring-pink-400"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* 😀 Aktuální pocit (dropdown menu) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6"
        >
          <label className="text-white text-lg font-semibold flex items-center">
            <Smile className="mr-2" /> Jak se dnes cítíte?
          </label>
          <select
            value={userStats.mood}
            onChange={(e) => setUserStats({ ...userStats, mood: e.target.value })}
            className="bg-white/10 text-white px-4 py-2 rounded-lg mt-2 w-full text-center focus:ring-2 focus:ring-pink-400"
          >
            <option value="citim_se_skvele">Cítím se skvěle</option>
            <option value="citim_se_dobre">Cítím se dobře</option>
            <option value="neutralni">Cítím se neutrálně</option>
            <option value="unaveny">Jsem unavený</option>
            <option value="potrebuji_pomoc">Potřebuji pomoc</option>
          </select>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UserInitials;
