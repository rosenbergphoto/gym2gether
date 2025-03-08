import UserNavbar from "../components/User/UserNavbar";
import UserDashboard from "../components/User/UserDashboard";
import UserParameters from "../components/User/UserParameters"; 
import UserInitials from "../components/User/UserInitials"; // Přidáno volání osobních údajů
import Footer from "../components/Footer";

const UserDash = () => {
  return (
    <>
      <UserNavbar />    
      <UserDashboard />
      <UserInitials /> {/* Voláme sekci s osobními údaji */}
      <UserParameters /> {/* Voláme sekci s kaloriemi, kroky a vzdáleností */}
      <Footer />
    </>
  );
};

export default UserDash;