import { Container } from "../shared";
import { HiMail } from "react-icons/hi";
import { RiUserLocationFill } from "react-icons/ri";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { contact } from "../assets";

const ContactUs = () => {
    return (
        <Container className={"px-5 mt-28 md:mt-0 relative"}>
            <div className="h-[110vh] flex items-center flex-wrap md:flex-nowrap gap-5 justify-between">
                <div className="md:w-1/2">
                    <div className="flex flex-col gap-5 w-full lg:w-[561px]">
                        <h1 className="titleWithDark !leading-[61px] !text-[48px]">
                            Contact Us
                        </h1>
                        <p className="textWithDark w-full lg:w-[450px] !leading-[36px] !text-[24px]">
                            To Make Requests For Further Information, Contact Us
                        </p>
                    </div>
                    {/* social media links */}
                    <div className="flex flex-col mt-24 gap-10">
                        {/* email */}
                        <div className="flex items-center gap-5 text-[24px]">
                            <HiMail className="text-[var(--mainColor)] text-[34px]" />
                            <p className="font-[400] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                Infotechmax@Ourmail.com
                            </p>
                        </div>
                        {/* phone */}
                        <div className="flex items-center gap-5 text-[24px]">
                            <BsFillTelephonePlusFill className="text-[var(--mainColor)] text-[34px]" />
                            <p className="font-[400] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                +00(1) 123 456 7890
                            </p>
                        </div>
                        {/* location */}
                        <div className="flex items-center gap-5 text-[24px]">
                            <RiUserLocationFill className="text-[var(--mainColor)] text-[34px]" />
                            <p className="font-[400] md:w-[377px] text-[var(--blackColor)] dark:text-[var(--whiteColor)]">
                                Eiusmod Adipisicing 147 New Yors, NY Adipisicing
                                123
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <form className="w-[100%] flex flex-col gap-5 xl:w-[730px] shadow-lg rounded-[24px] p-[30px] bg-[var(--whiteColor)] dark:bg-[var(--darkColor)]">
                        <div className="flex items-center gap-5">
                            <input
                                type="text"
                                className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="email"
                            className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                            placeholder="Your Mail"
                        />
                        <input
                            type="text"
                            className="w-full h-[70px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                            placeholder="Subject"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full md:min-h-[230px] bg-transparent text-[var(--darkColor)] dark:text-[var(--whiteColor)] outline-none p-[10px] rounded-[8px] border-[2px] border-[var(--borderColor)]"
                        />
                        <button className="mainBtn !mt-0 w-full">Submit</button>
                    </form>
                </div>
                <img
                    src={contact}
                    className="absolute bottom-0 md:bottom-14 left-2 md:left-[50%] md:translate-x-[-85%]"
                    alt="image contact us elmo-solutions and automation"
                />
            </div>
        </Container>
    );
};

export default ContactUs;
