import { useSelector } from "react-redux";
import styled from "styled-components";
import { ItemMain } from "../Item/ItemMain";
import { selectItems } from "../Item/itemSlice";

const PreviewWrapper = styled.div`
width: 100%;
height: 40rem;
background-color: #FAEAD3;
`

export const ProductPreview: React.FC = () => {
    const items = useSelector(selectItems);

    return (
        <PreviewWrapper>
            <ItemMain item={items[1]} />
        </PreviewWrapper>
    )
}