import Image from "next/image";
import { useState } from "react";
import { AiFillHome, AiOutlineHome, AiFillClockCircle, AiOutlineClockCircle } from "react-icons/ai";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { RiSettings5Line, RiSettings4Fill } from "react-icons/ri";
import { BsBookmarksFill, BsBookmarks } from "react-icons/bs";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectDark } from "../../Redux/slices/darkSlice";
import { selectItems } from "../../Redux/slices/cartSlice";
import {
    Nav,
    Logo,
    Icons,
    Icon,
    ItemsCount,
} from "./styledSidebar";

export const Sidebar = () => {
    const router = useRouter();
    const darkValue = useSelector(selectDark);
    const items = useSelector(selectItems);
    const [settings, setSettings] = useState(false);

    return (
        <Nav>
            <Logo onClick={() => router.push('/')}>
                <Image
                    src={`${darkValue === 'light' ? "/logo-single-black.png" : "/logo-single-white.png"}`}
                    width={100}
                    height={100}
                    objectFit="contain"
                />
            </Logo>
            <Icons>
                <li>
                    <Icon onClick={() => router.push('/')}>
                        {router.route === '/' ? <AiFillHome /> : <AiOutlineHome />}
                    </Icon>
                </li>
                <li>
                    <Icon className="relative__icon" onClick={() => router.push('/cart')}>
                        {router.route === '/cart' ? <HiShoppingCart /> : <HiOutlineShoppingCart />}
                        <ItemsCount>
                            <p>{items.length}</p>
                        </ItemsCount>
                    </Icon>
                </li>
                <li>
                    <Icon className="relative__icon" onClick={() => router.push("/bookmark")}>
                        {router.route === '/bookmark' ? <BsBookmarksFill /> : <BsBookmarks />}
                        <ItemsCount>
                            <p>0</p>
                        </ItemsCount>
                    </Icon>
                </li>
                <li>
                    <Icon>
                        {router.route === '/checkout' ? <AiFillClockCircle /> : <AiOutlineClockCircle />}
                    </Icon>
                </li>
            </Icons>
            <Icon onClick={() => setSettings(state => !state)}>
                {settings ? <RiSettings4Fill /> : <RiSettings5Line />}
            </Icon>
        </Nav>
    );
};