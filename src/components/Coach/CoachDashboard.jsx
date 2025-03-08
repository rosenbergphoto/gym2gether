import { useState } from "react";
import { Dumbbell, Utensils, Users, ChevronLeft, Edit3, Save, Ruler, Scale, BarChart, Move, Flame, Footprints, Route, Calendar} from "lucide-react";
import clientsData from "../../constants/clientData";
import { motion } from "framer-motion";

const CoachDashboard = () => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [currentMealDay, setCurrentMealDay] = useState(0);
  const [currentWorkoutDay, setCurrentWorkoutDay] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const daysOfWeek = ["Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota", "Neděle"];
  const [clients, setClients] = useState(clientsData);
  const [backupClients, setBackupClients] = useState(clientsData); 
  const [changedFields, setChangedFields] = useState({});

  const prevMealDay = () => setCurrentMealDay((currentMealDay - 1 + 7) % 7);
  const nextMealDay = () => setCurrentMealDay((currentMealDay + 1) % 7);
  const prevWorkoutDay = () => setCurrentWorkoutDay((currentWorkoutDay - 1 + 7) % 7);
  const nextWorkoutDay = () => setCurrentWorkoutDay((currentWorkoutDay + 1) % 7);
  
  const saveChanges = () => {
    console.log("saveChanges bylo zavoláno"); 
  
    setBackupClients(JSON.parse(JSON.stringify(clients))); 
    setEditMode(false); 
  
    setTimeout(() => {
      setChangedFields({});
      console.log("Zvýraznění resetováno"); 
    }, 2000); 
  };

  const handleMealChange = (index, field, value) => {
    setClients((prevClients) => {
      const updatedClients = JSON.parse(JSON.stringify(prevClients));
      updatedClients[selectedClient].mealPlan[daysOfWeek[currentMealDay]][index][field] = value;
  
      setChangedFields((prev) => ({
        ...prev,
        [`meal-${currentMealDay}-${index}-${field}`]: true, 
      }));
  
      return updatedClients;
    });
  };
  const handleWorkoutChange = (index, field, value) => {
    setClients((prevClients) => {
      const updatedClients = JSON.parse(JSON.stringify(prevClients));
      updatedClients[selectedClient].workoutPlan[daysOfWeek[currentWorkoutDay]][index][field] = value;
  
      setChangedFields((prev) => ({
        ...prev,
        [`workout-${currentWorkoutDay}-${index}-${field}`]: true, // Označíme změněné pole
      }));
  
      return updatedClients;
    });
  };
  


  const toggleEditMode = () => {
    if (editMode) {
      setClients(JSON.parse(JSON.stringify(backupClients)));
      setChangedFields({}); // Reset změněných hodnot
    } else {
      setBackupClients(JSON.parse(JSON.stringify(clients)));
    }
    setEditMode(!editMode);
  };
  


  return (
    <div id="user-dashboard-section" className="flex flex-col items-center mt-6 lg:mt-20 px-6">
      {/* Hlavní nadpis s animací */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide"
      >
        Vítejte zpět,{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 text-transparent bg-clip-text">
          Jonáši!
          </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-5 text-lg text-center text-neutral-500 max-w-4xl"
      >
        Nahlédněte na postup svých klientů, upravujte jim jídelníček a tréninkový plán.
      </motion.p>

{!selectedClient ? (
  <div className="w-full max-w-6xl">
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="text-3xl text-center font-semibold text-white mt-8"
    >
      Seznam klientů
    </motion.h2>
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
    >
      {Object.keys(clients).map((client, index) => (
        <motion.div
          key={client}
          onClick={() => setSelectedClient(client)}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}         
          className={`p-6 rounded-xl shadow-lg cursor-pointer hover:scale-105 transition
            ${
              index === 0
                ? "bg-gradient-to-br from-blue-500 to-indigo-500"
                : index === 1
                ? "bg-gradient-to-br from-green-500 to-teal-500"
                : "bg-gradient-to-br from-purple-500 to-pink-500"
            } text-white`}
        >
          {/* Ikona */}
          <Users className="w-10 h-10 mx-auto mb-3" />

          {/* Jméno uživatele */}
          <h3 className="text-2xl font-bold text-center">{client}</h3>

          {/* Údaje o klientovi */}
          <div className="mt-4 p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-md">
            <table className="w-full text-white text-sm">
              <tbody>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Ruler className="w-5 h-5 mr-2 text-white" /> Výška:
                  </td>
                  <td className="py-2 text-right">{clients[client].height} cm</td>
                </tr>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Scale className="w-5 h-5 mr-2 text-white" /> Váha:
                  </td>
                  <td className="py-2 text-right">{clients[client].weight} kg</td>
                </tr>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <BarChart className="w-5 h-5 mr-2 text-white" /> Bench press:
                  </td>
                  <td className="py-2 text-right">{clients[client].benchPress} kg</td>
                </tr>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Move className="w-5 h-5 mr-2 text-white" /> Dřep:
                  </td>
                  <td className="py-2 text-right">{clients[client].squat} kg</td>
                </tr>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Move className="w-5 h-5 mr-2 text-white" /> Mrtvý tah:
                  </td>
                  <td className="py-2 text-right">{clients[client].deadlift} kg</td>
                </tr>
                <tr className="flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-white" /> Věk:
                  </td>
                  <td className="py-2 text-right">{clients[client].age} let</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Dlaždice s kaloriemi, vzdáleností a kroky */}
          <div className="mt-4 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md">
            <table className="w-full text-white text-sm">
              <tbody>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Flame className="w-5 h-5 mr-2 text-white" /> Spálené kalorie:
                  </td>
                  <td className="py-2 text-right">{clients[client].burnedCalories} kcal</td>
                </tr>
                <tr className="border-b border-white/20 flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Route className="w-5 h-5 mr-2 text-white" /> Uražená vzdálenost:
                  </td>
                  <td className="py-2 text-right">{clients[client].distance} km</td>
                </tr>
                <tr className="flex justify-between items-center">
                  <td className="py-2 text-left font-semibold opacity-80 flex items-center">
                    <Footprints className="w-5 h-5 mr-2 text-white" /> Počet kroků:
                  </td>
                  <td className="py-2 text-right">{clients[client].steps}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
)  : (
    <div className="w-full max-w-6xl">
      <div className="flex justify-center mb-6 mt-8">
         <button onClick={() => setSelectedClient(null)} className="flex items-center bg-gray-700 text-white py-2 px-4 rounded-md shadow-md hover:scale-105 transition">
            <ChevronLeft className="mr-2" /> Zpět na výběr klientů
          </button>
        </div>
          <h2 className="text-4xl text-center font-bold text-white mb-6">{selectedClient}</h2>

  {/* Jídelníček a Trénink */}
  <motion.div 
    initial={{ opacity: 0, y: 30 }} 
    animate={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.7, delay: 0.2 }} 
    className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 w-full"
>
  {/* 🥗 Jídelníček */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="bg-gradient-to-br from-green-500 to-teal-500 text-white p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Utensils className="w-10 h-10 text-white mr-3" />
        <h3 className="text-2xl font-bold">Jídelníček</h3>
      </div>
    </div>

    {/* 🔄 Přepínač dnů */}
    <div className="flex justify-center space-x-2 mb-4">
      <button onClick={prevMealDay} className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md hover:scale-105 transition">
        ◀
      </button>
      <span className="bg-white/10 px-4 py-2 rounded-lg text-lg font-semibold">{daysOfWeek[currentMealDay]}</span>
      <button onClick={nextMealDay} className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md hover:scale-105 transition">
        ▶
      </button>
    </div>

    {/* 📌 Seznam jídel v šedé dlaždici */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md"
    >
      <table className="w-full text-white text-sm">
        <thead>
          <tr className="border-b border-white/30 text-left">
            <th className="py-2">Jídlo</th>
            <th className="py-2 text-center">Gramáž</th>
            <th className="py-2 text-right">Kalorie</th>
          </tr>
        </thead>
        <tbody>
          {clients[selectedClient].mealPlan?.[daysOfWeek[currentMealDay]]?.map((meal, index) => (
            <tr key={index} className="border-b border-white/20 last:border-none">
              
              {/* JÍDLO */}
              <td className={`py-2 ${changedFields[`meal-${currentMealDay}-${index}-food`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={meal.food} 
                    onChange={(e) => handleMealChange(index, "food", e.target.value)} 
                    className="bg-transparent border-b text-white w-full focus:outline-none"
                  />
                ) : (
                  meal.food
                )}
              </td>

              {/* GRAMÁŽ */}
              <td className={`py-2 text-center ${changedFields[`meal-${currentMealDay}-${index}-grams`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={meal.grams} 
                    onChange={(e) => handleMealChange(index, "grams", e.target.value)} 
                    className="bg-transparent border-b text-white w-full text-center focus:outline-none"
                  />
                ) : (
                  meal.grams
                )}
              </td>

              {/* KALORIE */}
              <td className={`py-2 text-right ${changedFields[`meal-${currentMealDay}-${index}-kcal`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={meal.kcal} 
                    onChange={(e) => handleMealChange(index, "kcal", e.target.value)} 
                    className="bg-transparent border-b text-white w-full text-right focus:outline-none"
                  />
                ) : (
                  meal.kcal
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </motion.div>

  {/* 🏋️ Trénink */}
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white p-6 rounded-xl shadow-lg"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <Dumbbell className="w-10 h-10 text-white mr-3" />
        <h3 className="text-2xl font-bold">Trénink</h3>
      </div>
    </div>

    {/* 🔄 Přepínač dnů */}
    <div className="flex justify-center space-x-2 mb-4">
      <button onClick={prevWorkoutDay} className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md hover:scale-105 transition">
        ◀
      </button>
      <span className="bg-white/10 px-4 py-2 rounded-lg text-lg font-semibold">{daysOfWeek[currentWorkoutDay]}</span>
      <button onClick={nextWorkoutDay} className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-md hover:scale-105 transition">
        ▶
      </button>
    </div>

    {/* 📌 Seznam cviků v šedé dlaždici */}
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-md"
    >
      <table className="w-full text-white text-sm">
        <thead>
          <tr className="border-b border-white/30 text-left">
            <th className="py-2">Cvik</th>
            <th className="py-2 text-center">Série</th>
            <th className="py-2 text-right">Opakování</th>
          </tr>
        </thead>
        <tbody>
          {clients[selectedClient].workoutPlan?.[daysOfWeek[currentWorkoutDay]]?.map((workout, index) => (
            <tr key={index} className="border-b border-white/20 last:border-none">

              {/* CVIK */}
              <td className={`py-2 ${changedFields[`workout-${currentWorkoutDay}-${index}-exercise`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={workout.exercise} 
                    onChange={(e) => handleWorkoutChange(index, "exercise", e.target.value)} 
                    className="bg-transparent border-b text-white w-full focus:outline-none"
                  />
                ) : (
                  workout.exercise
                )}
              </td>

              {/* SÉRIE */}
              <td className={`py-2 text-center ${changedFields[`workout-${currentWorkoutDay}-${index}-sets`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={workout.sets} 
                    onChange={(e) => handleWorkoutChange(index, "sets", e.target.value)} 
                    className="bg-transparent border-b text-white w-full text-center focus:outline-none"
                  />
                ) : (
                  `${workout.sets}x`
                )}
              </td>

              {/* OPAKOVÁNÍ */}
              <td className={`py-2 text-right ${changedFields[`workout-${currentWorkoutDay}-${index}-reps`] ? "bg-orange-500 text-black font-bold" : ""}`}>
                {editMode ? (
                  <input 
                    value={workout.reps} 
                    onChange={(e) => handleWorkoutChange(index, "reps", e.target.value)} 
                    className="bg-transparent border-b text-white w-full text-right focus:outline-none"
                  />
                ) : (
                  workout.reps
                )}
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  </motion.div>
</motion.div>



         {/* 📝 Tlačítka pro úpravy */}
         <div className="flex justify-between mt-4">
            {/* 🔄 Přepnout editaci */}
            <button
              onClick={toggleEditMode}
              className={`flex items-center px-4 py-2 rounded-md shadow-md hover:scale-105 transition ${editMode ? "bg-red-500" : "bg-blue-500"} text-white`}
            >
              <Edit3 className="w-5 h-5 mr-2" /> {editMode ? "Zrušit úpravy" : "Upravit"}
            </button>

            {/* 💾 Uložit změny */}
            {editMode && (
              <button
              onClick={() => {
                console.log("Tlačítko Uložit změny bylo kliknuto"); // DEBUG
                saveChanges();
              }}
              className="flex items-center bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:scale-105 transition"
            >
              <Save className="w-5 h-5 mr-2" /> Uložit změny
            </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoachDashboard; 