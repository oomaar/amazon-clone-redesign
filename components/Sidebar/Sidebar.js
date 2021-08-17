import { RiShoppingCart2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { BsBookmarksFill, BsBookmarks, BsClockHistory } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { AiFillHome } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";
import { selectDark } from "../../Redux/slices/darkSlice";
import {
    Nav,
    Logo,
    Icons,
    Icon,
} from "./styledSidebar";

export const Sidebar = () => {
    const router = useRouter();
    const darkValue = useSelector(selectDark);

    return (
        <Nav>
            <Logo onClick={() => router.push('/')}>
                {darkValue === 'light' ? (
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
            <Icons darkValue={darkValue}>
                <li>
                    <Icon onClick={() => router.push('/')}>
                        {router.route === '/' ? <AiFillHome /> : <AiOutlineHome />}
                    </Icon>
                </li>
                <li>
                    <Icon onClick={() => router.push('/cart')}>
                        {/* <RiShoppingCart2Line /> */}
                        {/* <IoMdCart /> */}
                        {router.route === '/cart' ? <IoMdCart /> : <RiShoppingCart2Line />}
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
