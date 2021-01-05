import styled from "styled-components";

export const VideoTitle = styled.h1`
  width: 80%;
  font-family: "Nunito Sans", sans-serif;
  color: #111;
`;

export const VideoDescription = styled.details`
  padding: 2rem 0.3rem;
  background: linear-gradient(to right, #eee, #ddd);

  summary {
    font-size: 1.8rem;
    font-weight: 600;
    outline: none;
    border: none;
  }

  p {
    font-size: 1.6rem;
    padding: 2rem 0.3rem;
  }
`;

export const Description = styled.p``;

export const ExtraInfos = styled.div``;
