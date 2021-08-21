import { item } from "./itemSlice";
import styled from "styled-components";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";
import { DetailsButton } from "../../components/DetailsButton";

const ProductMainWrapper = styled.div`

`

const ProductInformation = styled.div`
width: 30%;
height: 62.5%;
min-height: 25rem;
`

// const ProductImage = styled.image`
// `

const ProductStats = styled.div`
background-color: #FFF3E1;
height: 10rem;
width: 100%;
position: absolute;
bottom: 0;
`

const ProductTitle = styled.h2`
font-size: 3.2rem;
color: #607D47;
`

const ProductOrigin = styled.h3`
font-size: 2.5rem;
color: #535353;
`

const ProductDescription = styled.p`
font-size: 1.5rem;
color: #535353;
`

const CartSection = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: center;
`

interface props {
    item: item;
}

export const ItemMain: React.FC<props> = ({item}) => {
    if (!item) {
        return null
    }
    
    return (
        <ProductMainWrapper>
            <ProductInformation>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductOrigin>{item.location}</ProductOrigin>
                <ProductDescription>{item.description}</ProductDescription>
                <CartSection>
                    <AddToCartDropDown item={item}/>
                    <DetailsButton itemId={item.id}/>
                </CartSection>
            </ProductInformation>
            <ProductStats>

            </ProductStats>
        </ProductMainWrapper>
    )
}