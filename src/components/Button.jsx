export const Button = ({ text, onClick, color = "blue" }) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color, color: "white", padding: "20px" }}>
            {text}
        </button>
    );
};