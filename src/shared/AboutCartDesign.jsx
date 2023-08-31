
// eslint-disable-next-line react/prop-types
const AboutCartDesign = ({ isDark, title, desc }) => {
    return (
        <>
            <div className="w-full sm:w-1/2 md:w-[319px] flex flex-col gap-7">
                {/* icon */}
                <img
                    src={isDark}
                    className="w-[80px]"
                    alt="elmo solutions about icon"
                />
                <div>
                    {/* title */}
                    <h3 className="titleWithDark mb-2">{title}</h3>
                    {/* desc */}
                    <p className="textWithDark">{desc}</p>
                </div>
            </div>
        </>
    );
};

export default AboutCartDesign;
