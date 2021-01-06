import { VideoPlayerContainer } from "../styles/VideoPlayer";

import Player from "../src/components/VideoPlayer";
import VideoInfos from "../src/components/VideoInfos";
import Header from "../src/components/Header";

function VideoPlayer() {
  return (
    <>
      <Header />
      <VideoPlayerContainer>
        <Player src="" />
      </VideoPlayerContainer>
      <VideoInfos />
    </>
  );
}

export default VideoPlayer;
