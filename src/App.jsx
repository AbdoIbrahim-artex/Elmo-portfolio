import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import MainRoutes from "./routes/MainRoutes";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";

function App() {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <main className="flex flex-col gap-20 overflow-hidden bg-[var(--whiteColor)] dark:bg-[var(--blackColor)] font-baseFont">
            {/* nave bar */}
            <NavBar />
            {/* all pages */}
            <MainRoutes />
            {/* footer */}
            <Footer />
        </main>
    );
}

export default App;
