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

interface props {
    preSelectItems?: item[];
}

export const ShopItemList: React.FC<props> = ({preSelectItems = []}) => {
    const allItems: item[] = useSelector(selectSearchItems)
    const items: item[] = preSelectItems.length === 0 ? allItems : preSelectItems;
        
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