import { ThemeProvider } from "styled-components";
import GlobalStyles from "./Global.styled";

const getTheme = (darkMode) => ({
  fontFamily: "arial,sans-serif",
  colors: {
    primary: darkMode ? "#BCC0C3" : "#4D5156",
    secondary: darkMode ? "#79B4F8" : "#1A0DAB",
    background: darkMode ? "#202124" : "#FFFFFF",
    contentBackground: darkMode ? "#303134" : "#f1f3f4",
    contentHover: darkMode ? "#3c4043" : "#d8d7dc",
    borderColor: darkMode ? "#3c4043" : "#ebebeb",
    headingColor: darkMode ? "#ddd" : "#202124",
  },
  breakpoints: {
    sm: "screen and (max-width: 556px)",
    md: "screen and (max-width: 854px)",
    lg: "screen and (max-width: 1028px)",
    xl: "screen and (max-width: 1280px)",
  },
});

const Theme = ({ darkMode, children }) => (
  <ThemeProvider theme={getTheme(darkMode)}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export default Theme;
export const lightTheme = {
  card: "#ffffff",
  border: "rgba(0,0,0,0.1)",
  shadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
  shadowHover: "0 6px 18px rgba(0, 0, 0, 0.15)",
  text: "#222",
  textSecondary: "#555",
  primary: "#0070f3",
};

export const darkTheme = {
  card: "#1e1e1e",
  border: "rgba(255,255,255,0.08)",
  shadow: "0 4px 15px rgba(0,0,0,0.4)",
  shadowHover: "0 6px 20px rgba(0,0,0,0.55)",
  text: "#f5f5f5",
  textSecondary: "#c7c7c7",
  primary: "#4ea1ff",
};
