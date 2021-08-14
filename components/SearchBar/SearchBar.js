import { FiSearch } from "react-icons/fi";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Subcontainer,
    Logo,
} from "./styledSearchBar";

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
                <Icon className="user__iconSearch">
                    <HiOutlineUserCircle />
                </Icon>
            </Subcontainer>
        </Nav>
    );
};
