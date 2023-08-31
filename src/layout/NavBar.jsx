import { NavLink } from "react-router-dom";
import { engIcon, italy, mainLogo } from "../assets";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { CgMenuRight } from "react-icons/cg";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleLangFun, toggleThemeFun } from "../store/reducres/Toggle";

const NavBar = () => {
    const [t, i18n] = useTranslation();
    const dispatch = useDispatch();
    const { toggleLang, toggleTheme } = useSelector(
        (state) => state.toggleMode
    );
    // dark and light themes
    const [openMenu, setOpenMenu] = useState(false);
    // in scroll nav styles
    const [navStyle, setNavStyle] = useState({
        initial: {},
        animate: {},
    });

    // handel navigation
    const handleScroll = useCallback(() => {
        const scrollY = window.pageYOffset;
        if (scrollY > 20) {
            setNavStyle({
                initial: {
                    y: -100,
                    opacity: 0,
                },
            });
            if (scrollY > 250) {
                setNavStyle({
                    ...navStyle,
                    animate: {
                        y: 0,
                        opacity: 1,
                        boxShadow: "0px -5px 10px 2px rgba(0, 0, 0, 0.3)",
                        top: 0,
                        marginTop: "0px",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        backgroundColor:
                            toggleTheme === "light"
                                ? "var(--secondaryDarkColor)"
                                : "var(--blackColor)",
                        transition: {
                            duration: 0.8,
                        },
                    },
                });
            }
        } else {
            setNavStyle({
                ...navStyle,
                animate: {
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 0.8,
                    },
                },
            });
        }
    }, [navStyle, toggleTheme]);

    const handelDarkMode = () => {
        dispatch(toggleThemeFun(toggleTheme === "light" ? "dark" : "light"));
    };

    // toggle language
    const toggleLanguage = useCallback(
        (language) => {
            dispatch(toggleLangFun(language));
            i18n.changeLanguage(language);
            localStorage.setItem("lang", language);
        },
        [i18n, dispatch]
    );

    const toggleNavMenu = () => {
        setOpenMenu(openMenu ? false : true);
    };

    useEffect(() => {
        const getLang = localStorage.getItem("lang");
        dispatch(toggleLangFun(getLang));
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [dispatch, handleScroll]);

    // to change theme
    useEffect(() => {
        // setNavStyle({
        //     ...navStyle,
        //     animate: {
        //         ...navStyle?.animate,
        //         backgroundColor:
        //             themeMode === "light"
        //                 ? "var(--secondaryDarkColor)"
        //                 : "var(--blackColor)",
        //     },
        // });
        if (toggleTheme === "dark") {
            document?.documentElement?.classList?.add("dark");
        } else {
            document?.documentElement?.classList?.remove("dark");
        }
    }, [toggleTheme]);

    return (
        <motion.header
            variants={navStyle}
            initial="initial"
            animate="animate"
            className="navBar items-center"
        >
            {/* logo */}
            <NavLink to={"/"}>
                <img className="w-[50px]" src={mainLogo} alt="" />
            </NavLink>
            <motion.div
                variants={navStyle}
                initial="initial"
                animate="animate"
                onClick={toggleNavMenu}
                className={`navWrapper !p-0 !shadow-none flex items-center ${
                    openMenu ? "open" : null
                }`}
            >
                <nav className="flex gap-7 items-center text-[20px] capitalize text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                    <NavLink
                        className="active:text-[var(--mainColor)] hover:text-[var(--mainColor)] transition"
                        to={"about"}
                    >
                        {t("navAboutUs")}
                    </NavLink>
                    <NavLink
                        className="active:text-[var(--mainColor)] hover:text-[var(--mainColor)] transition"
                        to={"services"}
                    >
                        {t("navServices")}
                    </NavLink>
                    <NavLink to={"contact"} className="navBarBtn">
                        {t("navContactUs")}
                    </NavLink>
                </nav>
                <div className="settings flex items-center space-x-4">
                    {/* switch languages  */}
                    <div
                        onClick={() =>
                            toggleLanguage(toggleLang === "en" ? "it" : "en")
                        }
                        className="languages cursor-pointer ml-10"
                    >
                        <img
                            src={toggleLang === "en" ? italy : engIcon}
                            alt="change elmo language"
                            className="w-[40px]"
                        />
                    </div>
                    {/* toggle theme */}
                    <div
                        onClick={handelDarkMode}
                        className="cursor-pointer ml-10 text-[35px]"
                    >
                        {toggleTheme === "light" ? (
                            <MdDarkMode />
                        ) : (
                            <CiLight className="text-[var(--whiteColor)]" />
                        )}
                    </div>
                </div>
            </motion.div>
            {/* toggle navBar style */}
            <div
                onClick={toggleNavMenu}
                className="cursor-pointer md:hidden text-[45px] z-10"
            >
                <CgMenuRight className="text-[var(--mainColor)]" />
            </div>
        </motion.header>
    );
};

export default NavBar;
