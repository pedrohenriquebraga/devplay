import styled from "styled-components";

export const FeaturedVideoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #c9ccff;

    margin-top: 2.5rem;
    padding: 5.0rem;

    .videoThumb {
        width: 95%;
        object-fit: cover;
        border-radius: 12px;
    }

    h1 {
        font-size: 3.0rem;
    }

    p {
        font-size: 2.0rem;
        margin-bottom: 1.0rem;
    }
    .openVideo {
        text-decoration: none;
        color: #000;
    }
`

export const FeaturedVideo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 95%;

    div {
        width: 95%;

        .videoTitle {
            font-size: 1.8rem;
            margin: 5px 0;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 2; /* number of lines to show */
            -webkit-box-orient: vertical;
            word-break: break-word;
        }

        .videoDescription {
            font-size: 1.6rem;
            margin-bottom: 0;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3; /* number of lines to show */
            -webkit-box-orient: vertical;
            word-break: break-word;
        }

        .videoViews {
            font-size: 1.6rem;
            color: #777;
            margin-bottom: 0;
        }

        .videoDate {
            font-size: 1.6rem;
            margin: 0;
            margin-top: 0.1rem;
            color: #666;
        }

        .videoAuthor {
            font-size: 1.6rem;
            text-decoration: none;
            font-size: 1.8rem;
        }
    }
`
