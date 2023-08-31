import { useSelector } from "react-redux";
import {
    about1,
    about1Light,
    about2,
    about2Light,
    about3,
    about3Light,
    aboutGif,
} from "../../assets";
import { AboutCartDesign } from "../../shared";

const AboutSection = () => {
    const { toggleTheme } = useSelector((state) => state.toggleMode);
    return (
        <div className="flex flex-col gap-16 w-[97%] m-auto px-5">
            <div className="flex items-start justify-between flex-wrap md:flex-nowrap gap-5">
                {/* about info */}
                <div className="w-[100%] md:w-1/2 xl:w-1/2">
                    <p className="text-[var(--textColor)] dark:text-[var(--textDarkColor)] text-[24px]">
                        Who Are We?
                    </p>
                    <h2 className="titleWithDark !text-[40px] md:!text-[40px] lg:!text-[48px] sm:w-[100%] lg:w-[561px] !leading-[61px]">
                        We provide truly prominent IT solutions for your success
                    </h2>
                </div>
                {/* about image */}
                <img
                    className="h-[236px] w-[100%] md:w-[612px] xl:w-[612px] rounded-[32px]"
                    src={aboutGif}
                    alt="elmo about descriptions"
                />
            </div>
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
        </div>
    );
};

export default AboutSection;
