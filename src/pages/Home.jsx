import {
    OurProjects,
    OurTechnology,
    WhatWeOffer,
    XmaxSection,
} from "../components";
import AboutSection from "../components/home/AboutSection";
import HeroSection from "../components/home/HeroSection";

const Home = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* main section in home page */}
            <HeroSection />
            {/* about sections */}
            <AboutSection />
            {/* XmaxSection */}
            <XmaxSection />
            {/* what we offer section */}
            <WhatWeOffer />
            {/* OurTechnology */}
            <OurTechnology />
            {/* our projects */}
            <OurProjects />
        </div>
    );
};

export default Home;
