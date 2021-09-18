import { ImCross, ImUser } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiSun, BiMoon } from "react-icons/bi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDark, setDarkMode } from "../../Redux/slices/darkSlice";
import {
    Container,
    Background,
    SettingsSidebar,
    GreatingBox,
    Icon,
    SubContainer,
} from "./styledSettings";

export const Settings = ({ setSettings }) => {
    const dispatch = useDispatch();
    const darkValue = useSelector(selectDark);

    const checkTheme = () => {
        switch (darkValue) {
            case "light":
                dispatch(setDarkMode("dark"));
                return localStorage.setItem("darkValue", "dark")

            case "dark":
                dispatch(setDarkMode("light"));
                return localStorage.setItem("darkValue", "light")

            default:
                dispatch(setDarkMode("light"));
                return localStorage.setItem("darkValue", "light")
        };
    };

    const handleLight = () => {
        checkTheme();
        dispatch(setDarkMode("light"));
    };

    const handleDark = () => {
        checkTheme();
        dispatch(setDarkMode("dark"));
    };

    useEffect(() => {
        if (localStorage.getItem("darkValue")) {
            const darkerValue = localStorage.getItem("darkValue");
            dispatch(setDarkMode(darkerValue));
        } else {
            checkTheme(null);
        };
    });

    return (
        <Container>
            <SettingsSidebar>
                <GreatingBox>
                    <span><ImUser /> Hello, Username</span>
                    <Icon>
                        <ImCross onClick={() => setSettings(false)} />
                    </Icon>
                </GreatingBox>
                <SubContainer>
                    <ImUser />
                    Your Account
                </SubContainer>
                <SubContainer>
                    <RiCustomerService2Fill />
                    Customer Service
                </SubContainer>
                {darkValue === 'light' ? (
                    <SubContainer onClick={handleDark}>
                        <BiMoon />
                        Dark Mode
                    </SubContainer>
                ) : (
                    <SubContainer onClick={handleLight}>
                        <BiSun />
                        Dark Mode
                    </SubContainer>
                )}
                <SubContainer>
                    Sign In
                </SubContainer>
            </SettingsSidebar>
            <Background onClick={() => setSettings(false)}></Background>
        </Container>
    );
};