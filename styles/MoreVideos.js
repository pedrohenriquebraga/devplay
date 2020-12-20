import styled from "styled-components";
import {
  VideoCard,
  VideoThumb,
  VideoContent,
  VideosSectionsContainer,
} from "./VideosSection";

export const MoreVideosContainer = styled.section`
  h2 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 1.7rem;
  }
`;

export const VideosCardContainer = styled(VideosSectionsContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MoreVideoCard = styled(VideoCard)`
  width: 30%;
  min-width: 320px;
  @media (max-width: 716px) {
    width: 100%;
  }
`;

export const MoreVideoThumb = styled(VideoThumb)``;

export const MoreVideoContent = styled(VideoContent)``;
