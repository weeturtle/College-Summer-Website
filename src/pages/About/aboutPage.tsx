import styled from "styled-components";

const AboutWrapper = styled.div`
position: relative;
top: 4.5rem;
`

const ComingSoon = styled.h1`
text-align: center;
font-size: 3rem;
`

export const AboutPage: React.FC = () => {
    return (
        <AboutWrapper>
            <ComingSoon>About Page Coming Soon</ComingSoon>
        </AboutWrapper>
    )
}