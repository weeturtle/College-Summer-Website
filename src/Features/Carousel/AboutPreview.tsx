import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "../../app/routes";
import { ReadMore } from "../../components/ReadMore";
import FairTrade from '../../assets/About/Fairtrade.png';

const AboutWrapper = styled.div`
background-color: #FAEAD3;
width: 100%;
height: 40rem;
display: flex;
align-items: center;
position: relative;
`

const FieldImage = styled.img`
height: 90%;
position: relative;
left: 10rem;
`

const TextContainer = styled.div`
background: rgba(255, 255, 255, 0.8);
height: 75%;
width: 25%;
min-width: 450px;
z-index: 2;
position: relative;
right: 5rem;
text-align: center;
padding: 1rem;
`

const Title = styled.h2`
color: #607D47;
font-size: 2.5rem;
`

const Information = styled.p`
margin: 0 auto;
position: relative;
top: 2rem;
font-size: 2.25rem;
width: 80%;
color: #535353;
`

const Links = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 17.5%;
gap: 5rem;
background: #f1dbbd;
padding: 2rem 0;
border-radius: 1.25rem;
`

const FairTradeImage = styled.img`
background-color: #607D47;
border-radius: 5%;
width: 10rem;
`

export const AboutPreview: React.FC = () => {
    return (
        <AboutWrapper>
            <FieldImage src={require('../../assets/About/FarmerInField2.webp').default} alt="Woman Farming Coffee" />
            <TextContainer>
                <Title>Our Suppliers</Title>
                <Information>
                    From the stunning fields in Columbia to the distant farms of Peru, we’re committed to cultivating sustainable, long terms relationships with all of our suppliers. 
                </Information>
            </TextContainer>
            <Links>
                <Link to={{ pathname: "https://www.fairtrade.org.uk/" }} target="_blank">
                    <FairTradeImage src={FairTrade} alt="Fair Trade" />
                </Link>
                <ReadMore to={ROUTES.aboutUsRoute()} />
            </Links>
        </AboutWrapper>
    )
}