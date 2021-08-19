import { item } from "./itemSlice";
import styled from "styled-components";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";

const ProductMainWrapper = styled.div`

`

const ProductInformation = styled.div`
`

// const ProductImage = styled.image`
// `

const ProductStats = styled.div`
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
                </CartSection>
            </ProductInformation>
            <ProductStats>

            </ProductStats>
        </ProductMainWrapper>
    )
}