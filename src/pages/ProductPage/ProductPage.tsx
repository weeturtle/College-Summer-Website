import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ItemMain } from "../../Features/Item/ItemMain";
import { selectItemById } from "../../Features/Item/itemSlice";

const PageWrapper = styled.div`
position: relative;
top: 4.5rem;
`

export const ProductPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const strippedId = id.substring(1);
    const parseId = parseInt(strippedId)

    const Item = useSelector(selectItemById(parseId));

    console.log(Item)

    return (
        <PageWrapper>
            <ItemMain item={Item} />
        </PageWrapper>
    )
}