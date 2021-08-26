import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { BiSun, BiMoon, BiSearch } from "react-icons/bi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { selectDark, setDarkMode } from "../../Redux/slices/darkSlice";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Subcontainer,
    Icons,
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
            <SearchContainer>
                <Icon>
                    <BiSearch />
                </Icon>
                <InputContainer>
                    <Input />
                </InputContainer>
            </SearchContainer>
            <Subcontainer>
                <Logo onClick={() => router.push('/')}>
                    <Image
                        src={`${darkValue === 'light' ? "/logo-black.png" : "/logo-white.png"}`}
                        width={200}
                        height={200}
                        objectFit="contain"
                    />
                </Logo>
                <Icons>
                    <Icon>
                        {darkValue === 'light' ? (
                            <BiMoon onClick={handleDark} />
                        ) : (
                            <BiSun onClick={handleLight} />
                        )}
                    </Icon>
                    <Icon>
                        <HiOutlineUserCircle />
                    </Icon>
                </Icons>
            </Subcontainer>
        </Nav>
    );
};