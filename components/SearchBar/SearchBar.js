import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Subcontainer,
    Logo,
} from "./styledSearchBar";
import { useState } from "react";

export const SearchBar = ({ darkMode }) => {
    const router = useRouter();

    return (
        <Nav>
            <SearchContainer darkMode={darkMode}>
                <Icon>
                    <FiSearch />
                </Icon>
                <InputContainer>
                    <Input />
                </InputContainer>
            </SearchContainer>
            <Subcontainer>
                <Logo>
                    {darkMode === 'light' ? (
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
