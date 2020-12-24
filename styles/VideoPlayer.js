import styled from "styled-components";

export const VideoPlayerContainer = styled.div`
  width: 100vw;
`;
export const VideoPlayer = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
  margin-top: 2rem;

  @media (max-width: 320px) {
    width: 100%;
  }
`;
export const VideoControllers = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: absolute;
  background: radial-gradient(#00000055, #00000011);
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
    font-size: 3rem;
    color: #fff;
    transition: 200ms;

    :hover {
        transform: scale(1.2);
    }
  }

  .VideoBottomControllers {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 2rem;

    .fullscreenButton,
    .loopButton {
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
      margin-right: 1rem;
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
        margin-right: 1rem;
      }
    }

    input[type="range"] {
      width: 100%;
      margin: 7.3px 0;
      background-color: transparent;
      -webkit-appearance: none;
    }

    input[type="range"]:focus {
      outline: none;
    }
    input[type="range"]::-webkit-slider-runnable-track {
      background: rgba(104, 147, 188, 0.78);
      border: 0.2px solid #eeeeee;
      border-radius: 1.3px;
      width: 100%;
      height: 11.4px;
      cursor: pointer;
      border-radius: 8px;
    }
    input[type="range"]::-webkit-slider-thumb {
      margin-top: -4px;
      width: 18px;
      height: 18px;
      background: #14a2ce;
      border: 1.3px solid #ffffff;
      border-radius: 15px;
      cursor: pointer;
      -webkit-appearance: none;
    }
    input[type="range"]:focus::-webkit-slider-runnable-track {
      background: #7aa0c4;
    }
    input[type="range"]::-moz-range-track {
      background: rgba(104, 147, 188, 0.78);
      border: 0.2px solid #eeeeee;
      border-radius: 1.3px;
      width: 100%;
      height: 11.4px;
      cursor: pointer;
    }
    input[type="range"]::-moz-range-thumb {
      width: 26px;
      height: 26px;
      background: #14a2ce;
      border: 1.3px solid #ffffff;
      border-radius: 15px;
      cursor: pointer;
    }
    input[type="range"]::-ms-track {
      background: transparent;
      border-color: transparent;
      border-width: 8.2px 0;
      color: transparent;
      width: 100%;
      height: 11.4px;
      cursor: pointer;
    }
    input[type="range"]::-ms-fill-lower {
      background: #5686b4;
      border: 0.2px solid #eeeeee;
      border-radius: 2.6px;
    }
    input[type="range"]::-ms-fill-upper {
      background: rgba(104, 147, 188, 0.78);
      border: 0.2px solid #eeeeee;
      border-radius: 2.6px;
    }
    input[type="range"]::-ms-thumb {
      width: 26px;
      height: 26px;
      background: #14a2ce;
      border: 1.3px solid #ffffff;
      border-radius: 15px;
      cursor: pointer;
      margin-top: 0px;
      /*Needed to keep the Edge thumb centred*/
    }
    input[type="range"]:focus::-ms-fill-lower {
      background: rgba(104, 147, 188, 0.78);
    }
    input[type="range"]:focus::-ms-fill-upper {
      background: #7aa0c4;
    }

    @supports (-ms-ime-align: auto) {
      /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
      input[type="range"] {
        margin: 0;
        /*Edge starts the margin from the thumb, not the track as other browsers do*/
      }
    }
  }
`;
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
    margin-right: 1rem;
  }

  svg {
    transition: 200ms;
    cursor: pointer;
    vertical-align: middle;
    margin-bottom: 0.3rem;
    :hover {
      color: #37b5de;
        transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    display: none;
    visibility: hidden;
  }
`;

export const Video = styled.video`
  width: 100%;
  z-index: -1;
`;
