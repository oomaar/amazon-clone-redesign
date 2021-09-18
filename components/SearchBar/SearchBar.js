import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { BiSearch } from "react-icons/bi";
import { useSelector } from "react-redux";
import { selectDark } from "../../Redux/slices/darkSlice";
import {
    Nav,
    SearchContainer,
    Icon,
    InputContainer,
    Input,
    Subcontainer,
    Logo,
} from "./styledSearchBar";

export const SearchBar = () => {
    const router = useRouter();
    const darkValue = useSelector(selectDark);

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
            </Subcontainer>
        </Nav>
    );
};