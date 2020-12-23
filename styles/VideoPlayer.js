import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
    width: 100vw;
`
export const VideoPlayer = styled.div`
    position: relative;
    width: 80%;
    margin: auto;
    margin-top: 2.0rem;

    @media (max-width: 320px) {
        width: 100%;
    }
`
export const VideoControllers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: absolute;
    background: radial-gradient( #00000055, #00000011);
    width: 100%;
    height: 99%;
    opacity: 0;
    z-index: 1000;
    transition: 200ms;
    :hover {
        opacity: 1;
    }

    .videoPlay {
        text-align: center;
        cursor: pointer;
        margin: auto;
        background: transparent;
        border: none;
        outline: none;
        font-size: 5.0rem;
        color: #fff;
    }

    .VideoBottomControllers {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        padding: 1.0rem 2.0rem;

        .fullscreenButton, .loopButton {
            padding: 0.2rem;
            margin: 0 1.5rem;
            transition: 200ms;
        }

        .loopButton {
            margin: 0;
        }

        .seekbarContainer {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 75%;
            margin-right: 1.0rem;
            .seekBar {
                cursor: pointer;
                width: 100%;
                padding: 0;
                border: none;
                outline: none;
            }

            @media (max-width: 768px) {
                width: 100%;
            }

            span {
                font-size: 1.8rem;
                font-weight: 600;
                color: #fff;
                margin-right: 1.0rem;
            }
        }
    }
`
export const VideoVolumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    button {
        background: transparent;
        border: none;
        outline: none;
        color: #fff;
        font-size: 2.2rem;
        vertical-align: middle;
        margin-right: 1.0rem;
    }

    svg {
        transition: 200ms;
        cursor: pointer;
        vertical-align: middle;
        margin-bottom: 0.3rem;
        :hover {
            color: #37b5de;
        }
    }

    @media (max-width: 768px) {
        display: none;
        visibility: hidden;
    }
`

export const Video = styled.video`
    width: 100%;
    z-index: -1;
`