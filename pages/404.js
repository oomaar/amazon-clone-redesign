import Image from "next/image";
import Link from "next/link";
import {
    Container,
    Sorry,
    Title,
    SubTitle,
    BackButton,
} from "../Global/styles/styled404Page";

const PageNotFound = () => {
    return (
        <Container>
            <Sorry>SORRY</Sorry>
            <Title>The Page You Requested Can Not Be Found !</Title>
            <Image src="/404.png" width={300} height={300} objectFit="contain" />
            <SubTitle>
                Try searching or go to
                <Link href="/">
                    <BackButton>Amazon's home page.</BackButton>
                </Link>
            </SubTitle>
        </Container>
    );
};

export default PageNotFound;
