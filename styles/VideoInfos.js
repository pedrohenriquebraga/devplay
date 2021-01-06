import styled from "styled-components";


export const VideoTitle = styled.h1`
  width: 80%;
  padding: 0.5rem 0.3rem;
  font-family: "Nunito Sans", sans-serif;
  color: #111;
`;

export const VideoDescription = styled.details`
  width: 100%;
  padding: 2rem 0.3rem;
  background: linear-gradient(to right, #eee, #ddd);

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
  }
`;
