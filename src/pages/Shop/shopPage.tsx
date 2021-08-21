import styled from "styled-components";
import { ShopHeader } from "../../components/ShopHeader";
import { ShopItemList } from "../../Features/ShopItemList/ShopItemList";

const ShopWrapper = styled.div`
position: relative;
top: 4.5rem;
background-color: #FAEAD3
`

export const ShopPage: React.FC = () => {
    return (
        <ShopWrapper>
            <ShopHeader />
            <ShopItemList />
        </ShopWrapper>
    )
}