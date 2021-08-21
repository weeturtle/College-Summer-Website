import styled from "styled-components";
import { SearchBox } from "../Features/Search/SearchBox";
import { FilterButton } from "./FilterButton";
import { SortButton } from "./SortButton";

const ShopHeaderContainer = styled.div`
width: 100%;
height: 4rem;
background-color: #F9EAD0;
display: flex;
justify-content: space-between;
`

export const ShopHeader: React.FC = () => {
    return (
        <ShopHeaderContainer>
            <FilterButton />
            <SearchBox />
            <SortButton />
        </ShopHeaderContainer>
    )
}