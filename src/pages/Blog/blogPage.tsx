import styled from "styled-components";

const BlogWrapper = styled.div`
position: relative;
top: 4.5rem;
`

const ComingSoon = styled.h1`
text-align: center;
font-size: 3rem;
`

export const BlogPage: React.FC = () => {
    return (
        <BlogWrapper>
            <ComingSoon>Blog Page Coming Soon</ComingSoon>
        </BlogWrapper>
    )
}