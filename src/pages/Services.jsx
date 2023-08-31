import { MainServicesSection, OurServices, OurTechnology } from "../components";

const Services = () => {
    return (
        <div className="w-full flex flex-col gap-20">
            {/* main section */}
            <MainServicesSection />
             {/* OurTechnology */}
             <OurTechnology isOneLine />
            {/* our services */}
            <OurServices />
        </div>
    );
};

export default Services;
