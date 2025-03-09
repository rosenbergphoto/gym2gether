import { useState } from "react";
import { motion } from "framer-motion";
import { Flame, Move, Footprints } from "lucide-react";

  const UserParameters = () => {
  const [weeklyStats, setWeeklyStats] = useState({
    calories: [2200, 2100, 2300, 2250, 2350, 2400, 2500],
    distance: [3.5, 4.0, 3.8, 4.2, 4.5, 5.0, 5.2],
    steps: [9000, 10000, 9500, 10500, 11000, 12000, 12500],
  });

  const handleInputChange = (type, index, value) => {
    const updatedStats = [...weeklyStats[type]];
    updatedStats[index] = value;
    setWeeklyStats({ ...weeklyStats, [type]: updatedStats });
  };

  const days = ["Po", "Út", "St", "Čt", "Pá", "So", "Ne"];

  return (
    <motion.div 
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full max-w-[75rem] mx-auto px-6"
    >
      {/* Průměrně spálené kalorie */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }} 
        transition={{ duration: 0.2 }}
        className="bg-gradient-to-br from-red-500 via-orange-500 to-red-700 text-white p-6 sm:p-8 rounded-xl shadow-lg  transition"
      >
        <div className="flex items-center mb-3">
          <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 2 }}>
            <Flame className="w-8 h-8 text-white mr-3" />
          </motion.div>
          <h3 className="text-xl font-bold">Průměrně spálené kalorie</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs opacity-80">{day}</span>
              <input
                type="number"
                value={weeklyStats.calories[index]}
                onChange={(e) => handleInputChange("calories", index, e.target.value)}
                className="w-full px-3 py-3 text-white bg-white/10 backdrop-blur-md rounded-md text-center focus:ring-2 focus:ring-orange-400"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Průměrná vzdálenost */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-gradient-to-br from-green-500 via-teal-500 to-green-700 text-white p-6 sm:p-8 rounded-xl shadow-lg transition"
      >
        <div className="flex items-center mb-3">
          <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Move className="w-8 h-8 text-white mr-3" />
          </motion.div>
          <h3 className="text-xl font-bold">Průměrná vzdálenost (km)</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs opacity-80">{day}</span>
              <input
                type="number"
                value={weeklyStats.distance[index]}
                onChange={(e) => handleInputChange("distance", index, e.target.value)}
                className="w-full px-3 py-3 text-white bg-white/10 backdrop-blur-md rounded-md text-center focus:ring-2 focus:ring-teal-400"
              />
            </div>
          ))}
        </div>
      </motion.div>

      {/* Průměrný počet kroků */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-700 text-white p-6 sm:p-8 rounded-xl shadow-lg hover:scale-105 transition"
      >
        <div className="flex items-center mb-3">
          <motion.div animate={{ rotate: [0, -10, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <Footprints className="w-8 h-8 text-white mr-3" />
          </motion.div>
          <h3 className="text-xl font-bold">Průměrný počet kroků (kroky)</h3>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4 text-center">
          {days.map((day, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-xs opacity-80">{day}</span>
              <input
                type="number"
                value={weeklyStats.steps[index]}
                onChange={(e) => handleInputChange("steps", index, e.target.value)}
                className="w-full px-3 py-3 text-white bg-white/10 backdrop-blur-md rounded-md text-center focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default UserParameters;
