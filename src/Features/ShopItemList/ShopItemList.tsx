import { useSelector } from "react-redux";
import { item } from "../Item/itemSlice";
import styled from "styled-components";
import { ProductCard } from "../ProductCard/ProductCard";
import { selectSearchItems } from "../Search/searchSlice";

const ItemListContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const ProductCardContainer = styled.div`
padding: 2.5rem 0;
`

export const ShopItemList: React.FC = () => {
    const items: item[] = useSelector(selectSearchItems);
    
    console.log(useSelector(selectSearchItems))
    
    return (
        <ItemListContainer>
            {
                    items.length > 0 && items.map((item: item, index: number) => (
                        <ProductCardContainer key={index}>
                            <ProductCard item={item} orientation={index % 2 === 1 ? "right" : "left"}/>
                        </ProductCardContainer>
                    ))
            }
        </ItemListContainer>
    )
}