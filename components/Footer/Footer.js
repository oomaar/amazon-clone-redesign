import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectDark } from "../../Redux/slices/darkSlice";
import {
    FooterContainer,
    FooterSubContainer,
    FooterLinks,
    FooterLink,
    CopyContainer,
    FooterLogo,
    FooterCopy,
} from "./styledFooter";

export const Footer = () => {
    const darkValue = useSelector(selectDark);

    return (
        <FooterContainer>
            <FooterSubContainer>
                <FooterLinks>
                    <h3>Get to Know Us</h3>
                    <FooterLink>About Amazon</FooterLink>
                    <FooterLink>Connect with Us</FooterLink>
                    <FooterLink>Amazon Careers</FooterLink>
                    <FooterLink>Gift a Smile</FooterLink>
                </FooterLinks>
                <FooterLinks>
                    <h3>Make Money with Us</h3>
                    <FooterLink>Products on Amazon</FooterLink>
                    <FooterLink>Apps on Amazon</FooterLink>
                    <FooterLink>Amazon e-business</FooterLink>
                    <FooterLink>Advertise Your Products</FooterLink>
                    <FooterLink>Self-Publish with Us</FooterLink>
                    <FooterLink>Host on Amazon Hub</FooterLink>
                    <FooterLink><GoChevronRight /> See More</FooterLink>
                </FooterLinks>
                <FooterLinks>
                    <h3>Amazon Payment</h3>
                    <FooterLink>Amazon Business Card</FooterLink>
                    <FooterLink>Shop with Points</FooterLink>
                    <FooterLink>Reload Your Balance</FooterLink>
                    <FooterLink>Amazon Currency Converter</FooterLink>
                </FooterLinks>
                <FooterLinks>
                    <h3>Let Us Help You</h3>
                    <FooterLink>Amazon with COVID-19</FooterLink>
                    <FooterLink>Shipping Rules & Policies</FooterLink>
                    <FooterLink>Returns & Replacements</FooterLink>
                    <FooterLink>Manage Your Devices</FooterLink>
                    <FooterLink>Amazon Assistant</FooterLink>
                </FooterLinks>
            </FooterSubContainer>
            <CopyContainer>
                <FooterLogo>
                    {darkValue === 'light' ? (
                        <Image
                            src="/logo-single-black.png"
                            width={50}
                            height={50}
                            objectFit="contain"
                        />
                    ) : (
                        <Image
                            src="/logo-single-white.png"
                            width={50}
                            height={50}
                            objectFit="contain"
                        />
                    )}
                </FooterLogo>
                <FooterCopy>
                    Amazon Clone | Powered by NextJS | Developed & Re-Designed by <span>Omar Hassan</span>
                </FooterCopy>
            </CopyContainer>
        </FooterContainer>
    );
};
