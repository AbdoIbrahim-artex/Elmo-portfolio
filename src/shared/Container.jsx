// eslint-disable-next-line react/prop-types
const Container = ({ children, className }) => {
    return <div className={`w-[97%] m-auto ${className}`}>{children}</div>;
};

export default Container;
