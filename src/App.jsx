import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Loader from "./components/Loader";
import SolarSystemScene from "./Solar";
import HeroSection from "./SolarSS";
// import SolarSystemScene from 'solar-system-threejs';

const App = () => {
  return (
    <BrowserRouter>
      <div className="">
        {/* <Loader /> */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">

          <HeroSection />
          {/* <Navbar />
          <Hero /> */}
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
