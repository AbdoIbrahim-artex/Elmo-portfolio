import { NavLink } from "react-router-dom";
import { darkLogo, footerImage } from "../assets";
// icons
import {
    BiLogoLinkedin,
    BiLogoFacebookSquare,
    BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
    return (
        <footer className="footer px-5">
            <img
                className="absolute bottom-0 right-0 z-[1] w-[211px] hidden sm:hidden md:block"
                src={footerImage}
                alt="elmo solutions footer logo"
            />
            {/* footer nav */}
            <div className="flex items-center justify-between gap-3 flex-wrap">
                <img src={darkLogo} alt="elmo solutions logo" className="w-[40px]" />
                <div className="flex items-center gap-5">
                    <NavLink
                        className="active:text-[var(--blackColor)] dark:hover:text-[var(--mainColor)] hover:text-[var(--blackColor)] text-white transition"
                        to={"about"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="active:text-[var(--blackColor)] dark:hover:text-[var(--mainColor)] hover:text-[var(--blackColor)] text-white transition"
                        to={"services"}
                    >
                        Services
                    </NavLink>
                </div>
            </div>
            {/* info */}
            <div className="z-10">
                <h2 className="text-[56px] leading-[71px] font-headingFont max-w-[690px] text-[var(--whiteColor)] sm:w-full">
                    What you are waiting for?
                </h2>
                <p className="text-[24px] mt-3 leading-[36px] text-[var(--whiteColor)] capitalize">
                    Contact Us Now!
                </p>
                <button className="mainBtn !bg-[var(--whiteColor)] !text-[var(--mainColor)]">
                    Contact us
                </button>
            </div>
            {/* copy right */}
            <div className="flex items-center -mb-4 justify-center flex-wrap gap-5">
                <p className="text-center text-[16px] text-[var(--whiteColor)] leading-[24px]">
                    All rights reserved © 2023 - By Elmo
                </p>
                <div className="flex items-center gap-3 text-[var(--whiteColor)] text-[20px]">
                    <a href="#">
                        <BiLogoLinkedin className="cursor-pointer transition-all dark:hover:text-[var(--mainColor)]" />
                    </a>
                    <a href="#">
                        <BiLogoFacebookSquare className="cursor-pointer transition-all dark:hover:text-[var(--mainColor)]" />
                    </a>
                    <a href="#">
                        <BiLogoTwitter className="cursor-pointer transition-all dark:hover:text-[var(--mainColor)]" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
