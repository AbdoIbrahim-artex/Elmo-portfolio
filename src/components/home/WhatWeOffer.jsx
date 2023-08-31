import { servicePage2 } from "../../assets";
import { Container } from "../../shared";
import { BsArrowRight } from "react-icons/bs";

const WhatWeOffer = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="text-center px-5">
                <p className="textWithDark !leading-[29px] !text-[24px]">
                    what we offer?
                </p>
                <h2 className="titleWithDark !leading-[61px] !text-[40px]  md:!text-[48px]">
                    Efficiency through software and automation.
                </h2>
            </div>
            <Container>
                <div className="flex items-start p-[40px] rounded-[20px] bg-[var(--mainColor)] dark:bg-[var(--darkColor)] justify-between gap-5 flex-wrap lg:flex-nowrap">
                    <div className="md:w-1/2 min-h-[350px] md:h-[480px] flex flex-col justify-between">
                        <div className="space-y-8">
                            <h3 className="font-headingFont  text-[var(--whiteColor)] leading-[71px] text-[56px] ">
                                Web Design
                            </h3>
                            <p className="textWithDark md:w-[510px] !text-[var(--whiteColor)] !leading-[48px] !text-[32px]">
                                Accelerate Innovation With World-Class Tech
                                Teams We’ll Match You To An Entire Remote Team
                            </p>
                        </div>
                        <a
                            href="#"
                            className="textWithDark !text-[var(--whiteColor)] flex items-center gap-5"
                        >
                            Learn More <BsArrowRight />
                        </a>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            className="ml-auto md:w-[527px]"
                            src={servicePage2}
                            alt="elmo services images"
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhatWeOffer;
