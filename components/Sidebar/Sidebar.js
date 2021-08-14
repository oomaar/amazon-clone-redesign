import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsClockHistory } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import {
    Nav,
    Logo,
    Icons,
    Icon,
} from "./styledSidebar";

export const Sidebar = ({ darkMode }) => {
    const router = useRouter();

    return (
        <Nav>
            <Logo>
                {darkMode === 'light' ? (
                    <Image
                        onCLick={() => router.push('/')}
                        src="/logo-single-black.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                ) : (
                    <Image
                        onCLick={() => router.push('/')}
                        src="/logo-single-white.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                )}
            </Logo>
            <Icons>
                <li>
                    <Icon>
                        <AiOutlineHome />
                    </Icon>
                </li>
                <li>
                    <Icon>
                        <RiShoppingCart2Line />
                    </Icon>
                </li>
                <li>
                    <Icon>
                        <BsBookmark />
                    </Icon>
                </li>
                <li>
                    <Icon>
                        <BsClockHistory />
                    </Icon>
                </li>
            </Icons>
            <Icon className="user__icon">
                <HiOutlineUserCircle />
            </Icon>
        </Nav>
    );
};
