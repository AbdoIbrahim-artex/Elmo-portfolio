import { Container } from "../../shared";

const OurValues = () => {
    return (
        <Container className={"p-5"}>
            <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4 flex-wrap">
                    <h2 className="titleWithDark !leading-[51px] !text-[40px]">
                        Our Values
                    </h2>
                    <p className="titleWithDark md:w-[815px] md:text-right m-auto !font-[400] !leading-[40px] !text-[32px]">
                        we are guided by the following values
                    </p>
                </div>
                <div className="md:w-[815px] md:self-end">
                    <ul className="flex flex-col gap-10 list-decimal ml-8 md:ml-0">
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Customer Focus: We put our clients' needs first, and
                            we are committed to delivering software solutions
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Collaboration: We work closely with our clients and
                            encourage feedback and collaboration throughout the
                            development process.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Innovation: We stay at the forefront of the latest
                            technology trends and innovations, and we use our
                            expertise to create software solutions
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Quality: We are committed to delivering high-quality
                            software solutions that meet our clients' needs and
                            are free of errors or bugs.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Integrity: We operate with honesty, transparency,
                            and integrity in all of our dealings with our
                            clients and partners.
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default OurValues;
