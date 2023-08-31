import { Container } from "../../shared";
import {
    servicePage2,
    servicePage3,
    servicePage4,
    servicePage5,
} from "../../assets";

const OurServices = () => {
    return (
        <Container className={"px-5 flex flex-col gap-16"}>
            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            Web Design
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img
                        className="w-[612px] ml-auto md:h-[562px] rounded-[32px]"
                        src={servicePage2}
                        alt="elmo solutions about-us page"
                    />
                </div>
            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <img
                        className="w-[612px] mr-auto md:h-[562px] rounded-[32px]"
                        src={servicePage3}
                        alt="elmo solutions about-us page"
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            SoftWare Apps
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team .
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            SoftWare Solutions
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team .
                        </p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <img
                        className="w-[612px] ml-auto md:h-[562px] rounded-[32px]"
                        src={servicePage4}
                        alt="elmo solutions about-us page"
                    />
                </div>
            </div>

            <div className="flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <img
                        className="w-[612px] mr-auto md:h-[562px] rounded-[32px]"
                        src={servicePage5}
                        alt="elmo solutions about-us page"
                    />
                </div>
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            Automation
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            Accelerate Innovation With World-Class Tech Teams
                            We’ll Match You To An Entire Remote Team .
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default OurServices;
