import React, { useContext } from "react";
import { ThemeContext, themes } from "./theme-contest";

export const ToggleButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
    };

    const switchStyle = {
        display: "none",
    };

    const labelStyle = {
        position: "relative",
        display: "inline-block",
        width: "60px",
        height: "30px",
        borderRadius: "15px",
        background: theme.toggleButton.backgroundColor,
        cursor: "pointer",
        transition: "background-color 0.3s",
        margin:"5px"
    };

    const sliderStyle = {
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        backgroundColor: theme.toggleButton.sliderBackgroundColor,
        position: "absolute",
        top: "3px",
        left: theme.toggleButton.sliderLeft,
        transition: "left 0.3s, background-color 0.3s",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const ballStyle = {
        width: "16px",
        height: "16px",
        borderRadius: "50%",
        backgroundColor:"white",
        backgroundImage: theme.toggleButton.backgroundImage, 
        backgroundSize: "cover",
    };
    

    return (
        <label style={labelStyle}>
            <input type="checkbox" style={switchStyle} onClick={toggleTheme} />
            <span style={sliderStyle}>
                <span style={ballStyle}></span>
            </span>
        </label>
    );
};
