import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; 
import UserSignIn from "./pages/UserSignIn"; 
import CoachSignIn from "./pages/CoachSignIn"; 
import Userdash from "./pages/UserDash"; 
import Coachdash from "./pages/CoachDash"; 

const App = () => {
  return ( 
    <Router>
      <Routes>
        {/* Hlavní stránka */}
        <Route path="/" element={<Home />} />

        {/* Hlavní stránka */}
        <Route path="/coachsignin" element={<CoachSignIn />} />        

        {/* Stránka uživatele */}
        <Route path="/usersignin" element={<UserSignIn />} />

         {/* Stránka dashboardu uživatele */}
         <Route path="/userdash" element={<Userdash />} />       

         {/* Stránka dashboardu trenéra */}
         <Route path="/coachdash" element={<Coachdash />} />                

        {/* Chybová stránka */}
        <Route path="*" element={<h1 className="text-center text-4xl mt-10">Stránka nenalezena</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
