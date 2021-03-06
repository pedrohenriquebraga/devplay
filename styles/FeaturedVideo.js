import styled, { keyframes } from "styled-components";

const FeaturedEnter = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    75% {
        opacity: 0.;
        transform: translateX(35%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`

export const FeaturedVideoContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-color: #48c6ef66;

    overflow: hidden;

    margin-top: 2.5rem;
    padding: 5.0rem 1.0rem;

    .videoThumb {
        width: 100%;
        object-fit: cover;
        border-radius: 12px;
    }

    h1 {
        font-size: 2.8rem;
        text-align: center;
        margin-bottom: 1.7rem;
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
    animation: ${FeaturedEnter} 1.5s ease-out;

    width: 100%;
    max-width: 1000px;

    div {
        width: 100%;

        .videoTitle {
            font-size: 1.8rem;
            margin: 0.5rem 0;
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
            color: #555;
            margin-bottom: 0;
        }

        .videoDate {
            font-size: 1.6rem;
            margin: 0;
            margin-top: 0.1rem;
            color: #555;
        }

        .videoAuthor {
            font-size: 1.6rem;
            font-weight: 600;
            text-decoration: none;
        }
    }
`
