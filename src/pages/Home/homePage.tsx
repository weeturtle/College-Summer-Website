import styled from "styled-components";
import { Carousel } from "../../components/Carousel";
import SLIDES from "../../Features/Carousel/Slides";
import { AboutSection } from "./AboutSection";

const HomeWrapper = styled.div`
position: relative;
top: 4.5rem;
background-color: #FAEAD3
`

const CarouselWrapper = styled.div`
height: 40rem;
`

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <HomeWrapper>
                <CarouselWrapper>
                    <Carousel slides={SLIDES}/>
                </CarouselWrapper>
                <AboutSection />
            </HomeWrapper>
        </div>
    )
}