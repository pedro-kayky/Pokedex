import React, { useContext, useState } from "react";
import { ThemeContext } from "./theme-contest";

const Button = ({ children, ...props }) => {
    const { theme } = useContext(ThemeContext);

    const buttonStyle = {
        borderRadius: "20px",
        padding: "10px",
        cursor: "pointer",
        display: "flex",
        transition: "0.2s ease-in-out",
        marginLeft: "auto",
        marginRight: "auto",
        width: "200px",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10px",
        border: `1px solid`,
        color: theme.btn.color,
        backgroundColor: theme.btn.backgroundColor,
        transition: "0.4s ease-in-out"
    };

    const buttonHoverStyle = {
        backgroundColor: theme.btnHover.backgroundColor,
        color: theme.btnHover.color,
        border: `1px solid ${theme.btnHover.border}`,
    };

    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            {...props}
            style={{
                ...buttonStyle,
                ...(isHovered ? buttonHoverStyle : {}),
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
        </button>
    );
};

export default Button;
