import { useSelector } from "react-redux";
import { ProductCardInfo } from "../../components/ProductCardInfo";
import { item, selectItems } from "../Item/itemSlice";
import styled from "styled-components";

const ItemListContainer = styled.div`
`

export const ShopItemList: React.FC = () => {
    const items = useSelector(selectItems);
    
    const values: item[] = Object.values(items);
    
    return (
        <ItemListContainer>
            {
                    values.length > 0 && values.map((item: item) => <ProductCardInfo item={item} key={item.id}/>)
            }
        </ItemListContainer>
    )
}