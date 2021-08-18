import styled from "styled-components";

const PreviewWrapper = styled.div`
width: 100%;
height: 30rem;
background-color: #FAEAD3;
`

export const ProductPreview: React.FC = () => {
    return (
        <PreviewWrapper>
            <h2>Product Preview</h2>
        </PreviewWrapper>
    )
}