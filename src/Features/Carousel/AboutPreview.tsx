import styled from "styled-components";

const AboutWrapper = styled.div`
background-color: #FAEAD3;
width: 100%;
height: 30rem;
`

export const AboutPreview: React.FC = () => {
    return (
        <AboutWrapper>
            <h2>About Preview</h2>
        </AboutWrapper>
    )
}