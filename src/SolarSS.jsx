// src/components/HeroSection.jsx
// import SolarSystem from './SolarSystem';

import SolarSystem from "./Solar";

export default function HeroSection() {
    return (
        <div className="relative w-full h-screen text-white overflow-hidden ">
            <div className="absolute inset-0 z-0">
                <SolarSystem className="absolute inset-0 z-0" />    
                  </div>
            
        </div>
    );
}
