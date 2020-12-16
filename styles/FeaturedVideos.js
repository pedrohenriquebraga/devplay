import styled from "styled-components";

export const FeaturedVideoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #c9ccff;

    margin-top: 2.5rem;
    padding: 3.0rem;

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
            font-size: 2.5rem;
            margin: 5px 0;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3; /* number of lines to show */
            -webkit-box-orient: vertical;
            word-break: break-word;
        }

        .videoDescription {
            margin-bottom: 0;
            text-overflow: ellipsis;
            display: -webkit-box;
            overflow: hidden;
            -webkit-line-clamp: 3; /* number of lines to show */
            -webkit-box-orient: vertical;
            word-break: break-word;
        }

        .videoViews {
            color: #777;
            margin-bottom: 0;
        }

        .videoDate {
            margin: 0;
            margin-top: 0.1rem;
            color: #666;
        }

        .videoAuthor {
            text-decoration: none;
            font-size: 1.8rem;
        }
    }
`