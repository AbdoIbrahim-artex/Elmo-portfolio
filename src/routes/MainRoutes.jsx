import { Route, Routes } from "react-router-dom";
import { About, ContactUs, Home, Services } from "../pages";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<ContactUs />} />
        </Routes>
    );
};

export default MainRoutes;
