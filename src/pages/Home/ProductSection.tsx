import { useSelector } from "react-redux";
import styled from "styled-components";
import { item, selectItems } from "../../Features/Item/itemSlice";
import { ShopItemList } from "../../Features/ShopItemList/ShopItemList";

const ProductsWrapper = styled.div`
background-color: #fff9f1;
`

export const ProductSection: React.FC = () => {
    const products: item[] = Object.values(useSelector(selectItems))
    
    const ThreeProducts = products.slice(0, 3)

    return (
        <ProductsWrapper>
            <ShopItemList preSelectItems={ThreeProducts} />
        </ProductsWrapper>
    )
}