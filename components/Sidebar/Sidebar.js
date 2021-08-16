import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarksFill, BsBookmarks } from "react-icons/bs";
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

import { AiFillHome } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";

export const Sidebar = ({ darkMode }) => {
    const router = useRouter();
    const [active, setActive] = useState("home");

    return (
        <Nav>
            <Logo onClick={() => router.push('/')}>
                {darkMode === 'light' ? (
                    <Image
                        src="/logo-single-black.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                ) : (
                    <Image
                        src="/logo-single-white.png"
                        width={100}
                        height={100}
                        objectFit="contain"
                    />
                )}
            </Logo>
            <Icons darkMode={darkMode}>
                <li>
                    <Icon onClick={() => router.push('/')}>
                        {router.route === '/' ? <AiFillHome /> : <AiOutlineHome />}
                    </Icon>
                </li>
                <li>
                    <Icon>
                        <RiShoppingCart2Line />
                        {/* <IoMdCart /> */}
                    </Icon>
                </li>
                <li>
                    <Icon>
                        {/* <BsBookmarksFill /> */}
                        <BsBookmarks />
                    </Icon>
                </li>
                <li>
                    <Icon>
                        <BsClockHistory />
                        {/* <BsFillClockFill /> */}
                    </Icon>
                </li>
            </Icons>
            <Icon className="user__icon">
                <HiOutlineUserCircle />
            </Icon>
        </Nav>
    );
};
