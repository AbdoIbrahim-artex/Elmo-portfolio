import { useSelector } from "react-redux";
import { AboutCartDesign, Container } from "../../shared";
import { about1, about1Light, about2, about2Light, about3, about3Light } from "../../assets";

const AboutUs = () => {
    const { toggleTheme } = useSelector((state) => state.toggleMode);
    return (
        <Container className={"px-5"}>
            <div className="flex items-center flex-wrap gap-8 justify-between">
                <AboutCartDesign
                    isDark={toggleTheme === "dark" ? about1Light : about1}
                    title={"Expert Team"}
                    desc={"Accelerate Innovation With World-Class Tech Teams"}
                />
                <AboutCartDesign
                   isDark={toggleTheme === "dark" ? about2Light : about2}
                    title={"Quality Control"}
                    desc={"Accelerate Innovation With World-Class Tech Teams"}
                />
                <AboutCartDesign
                       isDark={toggleTheme === "dark" ? about3Light : about3}
                    title={"Integration"}
                    desc={"Accelerate Innovation With World-Class Tech Teams"}
                />
            </div>
        </Container>
    );
};

export default AboutUs;
