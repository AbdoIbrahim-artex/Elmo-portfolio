import { servicePage1, servicePage2, servicePage3 } from "../../assets";
import { Container } from "../../shared";
import { BsArrowUpRight } from "react-icons/bs";

const OurProjects = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="text-center px-5">
                <p className="textWithDark !leading-[29px] !text-[24px]">
                    our projects
                </p>
                <h2 className="titleWithDark !leading-[61px] !text-[40px]  md:!text-[48px]">
                    Efficiency through software and automation.
                </h2>
            </div>
            <Container
                className={"flex items-center flex-wrap justify-between gap-5"}
            >
                <div className="p-7 rounded-[40px] relative flex items-start flex-wrap md:flex-nowrap gap-7 bg-[var(--secondaryDarkColor)] dark:bg-[var(--darkColor)] w-full">
                    {/* project image */}
                    <div className="w-[608px] flex-shrink-1 lg:flex-shrink-0 h-[324px] overflow-hidden rounded-[32px]">
                        <img
                            src={servicePage1}
                            className="w-full h-full object-cover"
                            alt="elmo-solutions-projects"
                        />
                    </div>
                    {/* project info */}
                    <div>
                        <h3 className="titleWithDark mt-2 mb-6 !text-[48px] leading-[61px]">
                            Project One .1
                        </h3>
                        <p className="textWithDark w-[100%] xl:w-[500px] !text-[24px] leading-[29px]">
                            Lorem ipsum dolor sit amet consectetur. Metus mauris
                            senectus enim facilisis blandit est gravida
                        </p>
                    </div>
                    {/* view this project button */}
                    <div className="w-[72px] text-[25px] flex items-center justify-center h-[72px] rounded-[50%] absolute bottom-7 right-7 bg-[var(--whiteColor)]">
                        <BsArrowUpRight />
                    </div>
                </div>
                <div className="p-7 min-h-[758px] relative rounded-[40px] bg-[var(--secondaryDarkColor)] dark:bg-[var(--darkColor)] w-full md:flex-1">
                    {/* project image */}
                    <div className="flex-shrink-1 lg:flex-shrink-0 h-[354px] overflow-hidden rounded-[32px]">
                        <img
                            src={servicePage2}
                            className="w-full h-full object-cover"
                            alt="elmo-solutions-projects"
                        />
                    </div>
                    {/* project info */}
                    <div>
                        <h3 className="titleWithDark mt-5 mb-6 !text-[48px] leading-[61px]">
                            Project Two .2
                        </h3>
                        <p className="textWithDark w-[100%] xl:w-[500px] !text-[24px] leading-[29px]">
                            Lorem ipsum dolor sit amet consectetur. Metus mauris
                            senectus enim facilisis blandit est gravida
                        </p>
                    </div>
                    {/* view this project button */}
                    <div className="w-[72px] text-[25px] flex items-center justify-center h-[72px] rounded-[50%] absolute bottom-7 right-7 bg-[var(--whiteColor)]">
                        <BsArrowUpRight />
                    </div>
                </div>
                <div className="p-7 min-h-[758px] relative rounded-[40px] bg-[var(--secondaryDarkColor)] dark:bg-[var(--darkColor)] w-full md:flex-1">
                    {/* project image */}
                    <div className="flex-shrink-1 lg:flex-shrink-0 h-[354px] overflow-hidden rounded-[32px]">
                        <img
                            src={servicePage3}
                            className="w-full h-full object-cover"
                            alt="elmo-solutions-projects"
                        />
                    </div>
                    {/* project info */}
                    <div>
                        <h3 className="titleWithDark mt-5 mb-6 !text-[48px] leading-[61px]">
                            Project One .3
                        </h3>
                        <p className="textWithDark w-[100%] xl:w-[500px] !text-[24px] leading-[29px]">
                            Lorem ipsum dolor sit amet consectetur. Metus mauris
                            senectus enim facilisis blandit est gravida
                        </p>
                    </div>
                    {/* view this project button */}
                    <div className="w-[72px] text-[25px] flex items-center justify-center h-[72px] rounded-[50%] absolute bottom-7 right-7 bg-[var(--whiteColor)]">
                        <BsArrowUpRight />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OurProjects;
