import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Container,
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
                <div>
                    <img src="/banner/1.jpg" />
                </div>
                <div>
                    <img src="/banner/2.jpg" />
                </div>
                <div>
                    <img src="/banner/3.jpg" />
                </div>
                <div>
                    <img src="/banner/4.jpg" />
                </div>
                <div>
                    <img src="/banner/5.jpg" />
                </div>
                <div>
                    <img src="/banner/6.jpg" />
                </div>
            </Carousel>
        </Container>
    );
};
