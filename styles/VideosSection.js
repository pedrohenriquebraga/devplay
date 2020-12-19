import styled from "styled-components";

export const VideosSectionsContainer = styled.main`
  width: 100%;
  height: 100%;
  padding: 2rem;
  a {
    text-decoration: none;
    color: #000;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
`;

export const VideosScrollingCards = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    width: 10px;
    background: #ddd;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5159f5;
    border-radius: 8px;
    transition: 200ms;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #4048e4;
  }
`;

export const VideoSections = styled.section`
  margin-bottom: 6rem;
  .sectionTitle {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const VideoThumb = styled.figcaption`
position: relative;
  width: 100%;
  .videoDuration {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 0 0.8rem 0.8rem 0;
    justify-content: flex-end;
    align-items: flex-end;
    background-color: #000;
    color: #fff;
    font-size: 1.4rem;
    padding: 0.5rem;
    border-radius: 3px;
  }
`;

export const VideoCard = styled.div`
  flex: 0 0 auto;
  width: 30rem;
  margin: 0 1rem;
  padding: 1.5rem;
  transition: 200ms;
  border-radius: 5px;
  margin-bottom: 1rem;

  img {
    width: 100%;
    border-radius: 8px;
    position: absolute;
    z-index: -1;
  }
`;

export const VideoContent = styled.div`
  .videoTitle {
    font-size: 1.7rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  .videoDescription {
    font-size: 1.5rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    word-break: break-word;
  }

  .videoDate,
  .videoViews {
    font-size: 1.5rem;
    color: #555;
  }

  .channelUrl {
    font-size: 1.5rem;
    color: #5159f5;
    transition: 200ms;
    font-weight: 600;

    :hover {
      color: #4048e4;
    }
  }
`;
