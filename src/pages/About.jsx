import {
    AboutUs,
    MainSection,
    OurProgress,
    OurTechnology,
    OurValues,
} from "../components";

const About = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* about main section */}
            <MainSection />
            {/* OurTechnology */}
            <OurTechnology isOneLine />
            {/* about us cards */}
            <AboutUs />
            {/* our progress */}
            <OurProgress />
            {/* our values */}
            <OurValues />
        </div>
    );
};

export default About;
