import Image from "next/image";
import { useSelector } from "react-redux";
import { HeadTag } from "../Global/HeadTag";
import {
    Container,
    Title,
    SubTitle,
    ImageContainer,
} from "../Global/styles/styledBookmarkPage";

const bookmark = () => {
    return (
        <Container>
            <HeadTag title="Amazon | Your Bookmarks" />
            <Title>Bookmarks</Title>

            <ImageContainer>
                <Image
                    src="/bookmark.png"
                    alt="empty bookmark"
                    width={500}
                    height={500}
                    objectFit="contain"
                />
            </ImageContainer>
            <SubTitle>You don't have any bookmarks yet</SubTitle>
        </Container>
    );
};

export default bookmark;