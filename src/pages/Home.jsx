import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Extras from "../components/Extras";
import SignIn from "../components/SignIn";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar /> 
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Extras />
        <SignIn />
        <Reviews />
      </div>
      <Footer />
    </>
  );
};

export default Home;
