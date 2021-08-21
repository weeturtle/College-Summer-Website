import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectSearch, setSearchTerm } from "./searchSlice";

const SearchBoxContainer = styled.div`
`

const SearchBoxInput = styled.input`
outline: none;
border: none;
background-color: #FFF3E1;
width: 25rem;
height: 3rem;
border-radius: 20px;
font-size: 25px;
color: #707070;
padding-left: 1rem;
`

export const SearchBox: React.FC = () => {
    const dispatch = useDispatch();
    let searchTerm = useSelector(selectSearch);

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchTerm(event.target.value));
    }


    return (
        <SearchBoxContainer>
            <SearchBoxInput type="text" value={searchTerm} onChange={handleTextChange} placeholder="Search..." />
        </SearchBoxContainer>
    )
}