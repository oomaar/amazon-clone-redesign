import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { BiSun, BiMoon } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { selectDark, setDarkMode } from "../../Redux/slices/darkSlice";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Subcontainer,
    ThemeIcon,
    Logo,
} from "./styledSearchBar";

export const SearchBar = () => {
    const router = useRouter();
    const darkValue = useSelector(selectDark);
    const dispatch = useDispatch();

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
        <Nav>
            <ThemeIcon>
                {darkValue === 'light' ? (
                    <BiMoon onClick={handleDark} />
                ) : (
                    <BiSun onClick={handleLight} />
                )}
            </ThemeIcon>
            <SearchContainer>
                <Icon>
                    <FiSearch />
                </Icon>
                <InputContainer>
                    <Input />
                </InputContainer>
            </SearchContainer>
            <Subcontainer>
                <Logo>
                    {darkValue === 'light' ? (
                        <Image
                            onClick={() => router.push('/')}
                            src="/logo-black.png"
                            width={300}
                            height={100}
                            objectFit="contain"
                        />
                    ) : (
                        <Image
                            onClick={() => router.push('/')}
                            src="/logo-white.png"
                            width={300}
                            height={100}
                            objectFit="contain"
                        />
                    )}
                </Logo>
            </Subcontainer>
        </Nav>
    );
};
