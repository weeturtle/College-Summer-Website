import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectSearch, setSearchTerm } from "./searchSlice";
import { Icon } from '@iconify/react';
import React from "react";

const SearchBoxContainer = styled.div`
background-color: #FFF3E1;
width: 25rem;
height: 3rem;
border-radius: 20px;
position: relative;
`

const SearchBoxInput = styled.input`
outline: none;
border: none;
background-color: transparent;
height: 100%;
width: ${(props: {value: string}) => props.value !== "" ? "80%" : "100%"};
font-size: 25px;
color: #707070;
padding-left: 1rem;
display: inline;
`

const ClearButton = styled.button`
background-color: transparent;
border: none;
height: 50px;
width: 50px;
position: absolute;
right: 10px;
display: inline;
`

const StyledIcon = styled(Icon)`
height: 100%;
width: 100%;
color: #707070;

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
            {
                searchTerm !== "" && (
                    <ClearButton onClick={() => dispatch(setSearchTerm(''))}>
                        <StyledIcon icon="feather:x" />
                    </ClearButton>
                    )
            }
        </SearchBoxContainer>
    )
}