import styled from "styled-components";
import { ShopItemList } from "../../Features/ShopItemList/ShopItemList";

const ShopWrapper = styled.div`
position: relative;
top: 5rem;
background-color: #FAEAD3
`

export const ShopPage: React.FC = () => {
    return (
        <ShopWrapper>
            <ShopItemList />
        </ShopWrapper>
    )
}