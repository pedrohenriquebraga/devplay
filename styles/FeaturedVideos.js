import styled from 'styled-components';

export const FeaturedVideosContainer = styled.div`
    display: grid;
    grid-template-columns: 100% 1fr 1fr 1fr ;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template-areas: "m m a a",
                         "m m a a",
                         "m m a a",
                         "m m a a";
    height: 80vh;
    margin-top: 30px;
    padding: 30px;
    background-color: #9cc8ff;
    a {
        width: 50%;
        text-decoration: none;
    }
`;

export const FeaturedVideosGrid = styled.div`

`
export const FeaturedVideoMain = styled.div`
    grid-area: 'm';
    width: 50%;
    height: 80%;
    color: #000;
    margin-right: 0;
    a {
        width: fit-content;
    }
    img {
        width: 100%;
        border-radius: 12px;
    }
`

export const FeaturedVideosAside = styled.div`
    
`
