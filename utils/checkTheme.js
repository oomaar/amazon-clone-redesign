export const checkTheme = (darkMode, setDarkMode) => {
    switch (darkMode) {
        case "light":
            setDarkMode("dark");
            return localStorage.setItem("setDarkMode", "dark")

        case "dark":
            setDarkMode("light");
            return localStorage.setItem("setDarkMode", "light")

        default:
            setDarkMode("light");
            return localStorage.setItem("setDarkMode", "light")
    };
};