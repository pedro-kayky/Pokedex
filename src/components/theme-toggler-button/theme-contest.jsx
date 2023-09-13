import React, { createContext, useState } from "react";
import darkMode from "../imgs/dark-mode.png";
import dayMode from "../imgs/day-mode.png";

export const themes = {
    light: {
        body: {
            backgroundColor:'lightblue'
        },
        card: {
            border: "5px solid lightblue",
            backgroundColor: "#fff",
            textColor: "#000",
        },
        btn: {
            border: "1px solid black",
            color: "black",
            backgroundColor: "aquamarine",
        },
        btnHover: {
            backgroundColor: "black",
            color: "aquamarine",
            border: "1px solid aquamarine",
        },
        toggleButton: {
            backgroundColor: "linear-gradient(90deg, #bcd879 0%, #d50096 100%)",
            sliderBackgroundColor: "white",
            sliderLeft: "1px",
            backgroundImage: `url(${dayMode})`
        },
        sectionPokemon:{
            backgroundColor:"fff"
        }
    },

    dark: {
        body: {
            backgroundColor:"#383a39"
        },
        card: {
            border: "5px solid #383a39",
            backgroundColor: "black",
            textColor: "white",
        },
        btn: {
            border: "1px solid aquamarine",
            color: "aquamarine",
            backgroundColor: "black",
        },
        btnHover: {
            backgroundColor: "aquamarine",
            color: "black",
            border: "1px solid black",
        },
        toggleButton: {
            backgroundColor: "linear-gradient(90deg, #ff8590 0%, #006fff 100%)",
            sliderBackgroundColor: "white",
            sliderLeft: "35px",
            backgroundImage: `url(${darkMode})`
        },
        sectionPokemon:{
            backgroundColor:"000"
        }
        
    },
};

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

