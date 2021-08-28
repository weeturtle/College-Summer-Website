import styled from "styled-components";

const ErrorWrapper = styled.div`
position: relative;
top: 4.5rem;
`

const Error = styled.h1`
text-align: center;
font-size: 3rem;
`


export const ErrorPage: React.FC = () => {
    return (
        <ErrorWrapper>
            <Error>
                Error 404 - Page Not Found
            </Error>
        </ErrorWrapper>
    )
}