import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Logo,
} from "./styledSearchBar";

export const SearchBar = ({ darkMode }) => {
    const router = useRouter();

    return (
        <Nav>
            <SearchContainer>
                <Icon>
                    <FiSearch />
                </Icon>
                <InputContainer>
                    <Input />
                </InputContainer>
            </SearchContainer>
            <Logo>
                {darkMode === 'light' ? (
                    <Image
                        onCLick={() => router.push('/')}
                        src="/logo-black.png"
                        width={300}
                        height={100}
                        objectFit="contain"
                    />
                ) : (
                    <Image
                        onCLick={() => router.push('/')}
                        src="/logo-white.png"
                        width={300}
                        height={100}
                        objectFit="contain"
                    />
                )}
            </Logo>
        </Nav>
    );
};
