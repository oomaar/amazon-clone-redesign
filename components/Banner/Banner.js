import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Container,
    ImgContainer,
    Img,
} from "./styledBanner";

export const Banner = () => {
    return (
        <Container>
            <Carousel
                infiniteLoop
                autoplay={true}
                interval={1000}
                dynamicHeight={true}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
            >
                <ImgContainer>
                    <Img src="/banner/2.jpg" />
                </ImgContainer>
                <ImgContainer>
                    <Img src="/banner/1.jpg" />
                </ImgContainer>
                <ImgContainer>
                    <Img src="/banner/3.jpg" />
                </ImgContainer>
                <ImgContainer>
                    <Img src="/banner/4.jpg" />
                </ImgContainer>
                <ImgContainer>
                    <Img src="/banner/5.jpg" />
                </ImgContainer>
                <ImgContainer>
                    <Img src="/banner/6.jpg" />
                </ImgContainer>
            </Carousel>
        </Container>
    );
};
