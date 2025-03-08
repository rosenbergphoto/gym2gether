import { useState, useEffect } from "react";
import clientsData from "../../constants/clientData"; // Opravená cesta
import { Dumbbell, Utensils, Bell } from "lucide-react";
import { motion } from "framer-motion";

const UserDashboard = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [todayWorkout, setTodayWorkout] = useState([]);
  const [showNotification, setShowNotification] = useState(true);
  const user = clientsData["Tomáš"]; 

  useEffect(() => {
    const daysOfWeek = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];
    const todayIndex = new Date().getDay();
    const todayName = daysOfWeek[todayIndex];
  
    setSelectedDay(todayName);
  }, []); 
  
  useEffect(() => {
    if (selectedDay) {
      setTodayWorkout(user.workoutPlan[selectedDay] || []);
    }
  }, [selectedDay]); 

  return (
    <div id="user-dashboard-section" className="flex flex-col items-center mt-6 lg:mt-20 px-6">
      {/* 🏆 Hlavní nadpis s animací */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Vítejte zpět,{" "}
        <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-800 text-transparent bg-clip-text">
          Tomáši!
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-5 text-lg text-center text-neutral-500 max-w-4xl"
      >
        Sledujte svůj postup, získejte od svého trenéra jídelníček a trénink.
      </motion.p>

      {/* 🔔 Notifikace s animací */}
      {showNotification && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="flex justify-between items-center bg-yellow-500 text-black px-4 py-2 mt-6 rounded-lg shadow-md animate-pulse"
        >
          <div className="flex items-center">
            <Bell className="mr-2 w-6 h-6" />
            <p className="font-semibold">Jídelníček byl aktualizován vaším trenérem!</p>
          </div>
          <button onClick={() => setShowNotification(false)} className="ml-4 text-black hover:text-gray-700">
            ✖
          </button>
        </motion.div>
      )}

      {/* 📌 Přepínač dnů s animací (desktop + mobilní verze) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="my-4"
  >
      {/* 🖥 **Verze pro větší obrazovky (desktop)** */}
      <div className="hidden md:flex justify-center space-x-2">
        {Object.keys(user.mealPlan).map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              selectedDay === day ? "bg-blue-600 text-white scale-105" : "bg-gray-700 text-gray-300 hover:scale-105"
            }`}
          >
            {day}
          </button>
        ))}
      </div>

  {/* Verze pro mobil a tablet (s šipkami */}
  <div className="flex md:hidden justify-between items-center bg-blue-500 px-6 py-3 rounded-lg shadow-md">
    <button
      onClick={() => {
        const dayIndex = Object.keys(user.mealPlan).indexOf(selectedDay);
        setSelectedDay(Object.keys(user.mealPlan)[(dayIndex - 1 + 7) % 7]); // Posun zpět
      }}
      className="p-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
    >
      ◀
    </button>

    <span className="text-lg font-semibold text-white mx-6">{selectedDay}</span> {/* Zvětšený mezerník mezi šipkami */}

    <button
      onClick={() => {
        const dayIndex = Object.keys(user.mealPlan).indexOf(selectedDay);
        setSelectedDay(Object.keys(user.mealPlan)[(dayIndex + 1) % 7]); // Posun vpřed
      }}
      className="p-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
    >
      ▶
    </button>
  </div>
</motion.div>

      {/* 📌 Dlaždice */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 w-full max-w-6xl"
      >
        {/* 🥗 Jídelníček */}
        <div className="bg-gradient-to-br from-green-400 via-lime-500 to-green-700 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center mb-4">
            <Utensils className="w-10 h-10 text-white mr-3" />
            <h3 className="text-2xl font-bold">{selectedDay} - Jídelníček</h3>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <table className="w-full text-white">
              <thead>
                <tr>
                  <th className="py-2">Jídlo</th>
                  <th>Gramáž</th>
                  <th>Kalorie</th>
                </tr>
              </thead>
              <tbody>
                {user.mealPlan[selectedDay]?.map((meal, index) => (
                  <tr key={index} className={index === user.mealPlan[selectedDay].length - 1 ? "" : "border-b border-white/20"}>
                    <td className="py-2">{meal.food}</td>
                    <td>{meal.grams}</td>
                    <td>{meal.kcal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 🏋️ Trénink */}
        <div className="bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-700 text-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Dumbbell className="w-10 h-10 text-white mr-3" />
              <h3 className="text-2xl font-bold">{selectedDay} - Trénink</h3>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <table className="w-full text-white text-center">
              <thead>
                <tr>
                  <th>Cvik</th>
                  <th>Série</th>
                  <th>Opakování</th>
                </tr>
              </thead>
              <tbody>
                {todayWorkout.length > 0 ? (
                  todayWorkout.map((exercise, index) => (
                    <tr key={index} className={index === todayWorkout.length - 1 ? "" : "border-b border-white/20"}>
                      <td className="py-2">{exercise.exercise}</td>
                      <td>{exercise.sets}</td>
                      <td>{exercise.reps}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="py-2 text-gray-300">Dnes není naplánovaný žádný trénink.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
