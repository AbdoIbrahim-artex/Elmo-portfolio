import { Container } from "../../shared";

const OurProgress = () => {
    return (
        <Container className={"p-5"}>
            <div className="flex flex-col gap-10">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <h2 className="titleWithDark !leading-[51px] !text-[40px]">
                        Our Process
                    </h2>
                    <p className="titleWithDark md:w-[815px] !font-[400] !leading-[40px] !text-[32px]">
                        we take a personalized approach to every project,
                        working closely with our clients to understand their
                        needs and goals. Our development process typically
                        involves the following stages
                    </p>
                </div>
                <div className="md:w-[815px] md:self-end">
                    <ul className="flex flex-col gap-10 list-decimal ml-8 md:ml-0">
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Consultation and Planning: We start by meeting with
                            our clients to discuss their project requirements
                            and goals.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Design: Our team of designers works closely with our
                            clients to create a user-friendly and visually
                            appealing design that meets their needs.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Development: Our team of developers then brings the
                            design to life, using the latest technologies and
                            programming languages to create a high-quality
                            software solution.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Testing and Quality Assurance: We rigorously test
                            and debug our software solutions to ensure that they
                            meet our clients' requirements and are free of
                            errors or bugs.
                        </li>
                        <li className="textWithDark !leading-[44px] !text-[32px]">
                            Deployment: We work with our clients to deploy the
                            final product and provide ongoing support and
                            maintenance to ensure that it continues to function
                            smoothly.
                        </li>
                    </ul>
                </div>
            </div>
        </Container>
    );
};

export default OurProgress;
