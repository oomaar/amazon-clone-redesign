import Image from "next/image";
import {
    FooterContainer,
} from "./styledFooter";

export const Footer = ({ darkMode }) => {
    return (
        <FooterContainer>
            {darkMode === 'light' ? (
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
            <h6>Amazon Clone, Powered by NextJS</h6>
        </FooterContainer>
    );
};
