import styled, { keyframes } from "styled-components";

export const VideoTitle = styled.h1`
  width: 100%;
  padding: 0.5rem 1rem;
  font-family: "Nunito Sans", sans-serif;
  color: #111;
`;

export const VideoStatistics = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  p {
    margin-left: 1.0rem;
    font-size: 1.6rem;
    display: inline;
    margin-right: 1rem;

    svg {
      font-size: x-large;
      vertical-align: sub;
    }
  }

  .ActionsContainer {
    overflow-x: auto;
    padding: 0 1rem;
    margin: 1rem 0;
    button {
      cursor: pointer;
      width: 11rem;
      margin-right: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem;
      font-size: 1.6rem;
      font-weight: 600;
      border: none;
      outline: none;
      background: transparent;
      transition: 300ms;
      svg {
        font-size: x-large;
      }

      :hover {
        background-color: #eee;
        border-radius: 5px;
      }
    }

    .DenounceButton {
      svg {
        fill: #ff3341;
      }
    }

    .ShareButton {
      svg {
        fill: #6f86d6;
      }
    }

    display: flex;
    width: 100%;
    .RateContainer {
      display: flex;
      .Rate {
        .RateButton {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;  
        }
      }
    }
  }
`;

export const VideoDescription = styled.details`
  width: 100%;
  padding: 2rem 1rem;
  background: #eee;
  transition: 500ms;

  summary {
    font-size: 1.8rem;
    font-weight: 600;
    outline: none;
    border: none;
  }
`;

export const Description = styled.p`
  font-size: 1.8rem;
  padding: 1rem 0.3rem;
`;

export const ExtraInfos = styled.div`
  .infos {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    a {
      text-decoration: none;
      font-weight: 600;
    }
  }
`;
