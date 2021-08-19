import styled from "styled-components";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";

const PreviewWrapper = styled.div`
width: 100%;
height: 30rem;
background-color: #FAEAD3;
`

export const ProductPreview: React.FC = () => {
    return (
        <PreviewWrapper>
            <h2>Product Preview</h2>
            <AddToCartDropDown options={[
                {name: "150g", price: 4.99, inStock: true},
                {name: "250g", price: 5.99, inStock: true},
                {name: "500g", price: 9.99, inStock: true}
            ]} />
        </PreviewWrapper>
    )
}