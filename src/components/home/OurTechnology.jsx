import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap,
} from "framer-motion";
// import { wrap } from "@motionone/utils";
import {
    HTML,
    Java,
    LARAVEL,
    PHP,
    Python,
    React,
    Redux,
    cPlus,
    css,
    cssIcon,
    javaScriptIcon,
    mysqlIcon,
    phpIcon,
} from "../../assets";

// eslint-disable-next-line react/prop-types
function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    const x = useTransform(baseX, (v) => `${wrap(30, -45, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax m-auto mb-4">
            <motion.div className="scroller" style={{ x }}>
                <span>{children}</span>
            </motion.div>
        </div>
    );
}

// eslint-disable-next-line react/prop-types
export default function OurTechnology({isOneLine , newIcons}) {
    return (
        <section className={`OurTechnology ${isOneLine ? '!my-[0px]' : '!my-[50px]' }  container`} id="technology">
            
            {
                !newIcons && (
                    <ParallaxText baseVelocity={-10}>
                        <div className="flex items-center justify-center gap-5 md:gap-24">
                            <img className="w-[80px] md:w-auto" src={React} alt="Technology"/>
                            <img className="w-[80px] md:w-auto" src={Python} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={Redux} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={PHP} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={LARAVEL} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={Java} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={HTML} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={css} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={cPlus} alt="Technology" />
                        </div>
                    </ParallaxText>
                )
            }
            {
                !isOneLine && (
                    <ParallaxText baseVelocity={10}>
                        <div className="flex items-center justify-center gap-5 md:gap-24">
                            <img className="w-[80px] md:w-auto" src={Redux} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={Python} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={Java} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={React} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={PHP} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={cPlus} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={css} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={LARAVEL} alt="Technology" />
                            <img className="w-[80px] md:w-auto" src={HTML} alt="Technology" />
                        </div>
                    </ParallaxText>
                )
            }

            {
                newIcons && (
                    <ParallaxText baseVelocity={-10}>
                        <div className="flex items-center justify-center gap-5 md:gap-24">
                            <img className="w-[60px]" src={phpIcon} alt="Technology"/>
                            <img className="w-[60px]" src={mysqlIcon} alt="Technology" />
                            <img className="w-[60px]" src={javaScriptIcon} alt="Technology" />
                            <img className="w-[60px]" src={cssIcon} alt="Technology" />
                        </div>
                    </ParallaxText>
                )
            }
        
            
        </section>
    );
}
