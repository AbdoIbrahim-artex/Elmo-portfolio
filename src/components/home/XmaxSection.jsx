import OurTechnology from "./OurTechnology";

const XmaxSection = () => {
    return (
        <div className="flex flex-col gap-5 md:my-28">
            <div className="w-full rotate-3 origin-left pt-3 z-10 px-[40px] bg-[var(--secondaryDarkColor)] dark:bg-[var(--darkColor)]">
                <OurTechnology isOneLine newIcons />
            </div>
            <div className="w-full flex -rotate-3 origin-right items-center justify-center z-10 py-[23px] md:px-[180px] bg-[var(--mainColor)] dark:bg-[var(--darkColor)]">
                <ul className="flex items-center font-headingFont justify-center gap-6 md:gap-20 list-disc">
                    <li className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                        Unlock
                    </li>
                    <li className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                        the full potential
                    </li>
                    <li className="text-[14px] md:text-[32px]  text-[var(--whiteColor)] leading-[40px]">
                        of your business
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default XmaxSection;
