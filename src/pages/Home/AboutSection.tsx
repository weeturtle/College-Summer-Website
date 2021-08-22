import styled from "styled-components";

const AboutSectionWrapper = styled.div`
height: 25rem;
width: 100%;
background-color: #fff6e9;
`

const AboutHeader = styled.h2`
font-size: 1.5rem;
text-align: center;
color: #607D47;
padding-top: 2rem;
`

const CustomerDescription = styled.p`
text-align: center;
font-size: 2rem; 
width: 40%;
padding-top: 1rem;
margin: 0 auto;
color: #535353;
line-height: 1.5;
`

const StatContainer = styled.div`
width: 65%;
margin: 3rem auto;
height: 5.5rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const Stat = styled.div`
height: 100%;
color: #535353;
text-align: ${(props: {pos: "left" | "center" | "right"}) => props.pos};
display: flex; 
flex-direction: column;
align-items: ${(props: {pos: "left" | "center" | "right"}) => {
    switch (props.pos) {
        case "left":
            return "flex-start";
        case "center":
            return "center";
        case "right":
            return "flex-end";
        default:
            break;
    }
}};
gap: 1rem;
`

const Plus = styled.span`
color: #607D47;
`

const StatHeader = styled.h4`
color: #607D47;
width: 75%;
font-size: 1.5rem;
`

const StatInfo = styled.h3`
font-size: 3.5rem;
`

export const AboutSection: React.FC = () => {
    return (
        <AboutSectionWrapper>
            <AboutHeader>ABOUT</AboutHeader>
            <CustomerDescription>Over 7000 Satisfied Customers Rely on our Massive Selection of Great Tea and Coffee </CustomerDescription>
            <StatContainer>
                <Stat pos="left">
                    <StatInfo>100<Plus>+</Plus></StatInfo>
                    <StatHeader>Monthly Subscribers</StatHeader>
                </Stat>
                <Stat pos="center">
                    <StatInfo>10000<Plus>+</Plus></StatInfo>
                    <StatHeader>Total Orders</StatHeader>
                </Stat>
                <Stat pos="right">
                    <StatInfo>1000<Plus>+</Plus></StatInfo>
                    <StatHeader>Weekly Blog Readers</StatHeader>
                </Stat>
            </StatContainer>
        </AboutSectionWrapper>
    )
}