import styled from 'styled-components';
import { VideoCard, VideoThumb, VideoContent, VideosSectionsContainer  } from './VideosSection'

export const SearchResultsContainer = styled.main` 
  p:nth-child(1) {
      font-size: 1.8rem;
      color: #555;
      text-align: center;
      font-family: 'Nunito';
  }

  hr {
    opacity: 0.3;
    margin-top: 1.7rem;
  }
`;

export const ResultsContainer = styled(VideosSectionsContainer)`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export const VideoResult = styled(VideoCard)`
    width: 30%;
    :hover {
        background-color: #48c6ef33;
    }

    @media (max-width: 850px) {
        width: 45%;
    }

    @media (max-width: 700px) {
        width: 100%;
    }
`
export const VideoThumbnail = styled(VideoThumb)``
export const VideoData = styled(VideoContent)``
