import styled from "styled-components";
import { Carousel } from "../../components/Carousel";
import SLIDES from "../../Features/Carousel/Slides";

const HomeWrapper = styled.div`
position: relative;
top: 4.5rem;
background-color: #FAEAD3
`

export const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <HomeWrapper>
                <Carousel slides={SLIDES}/>
            </HomeWrapper>
        </div>
    )
}