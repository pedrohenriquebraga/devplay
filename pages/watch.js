import { VideoPlayerContainer } from "../styles/VideoPlayer";

import Player from "../src/components/VideoPlayer";
import VideoInfos from "../src/components/VideoInfos";

function VideoPlayer() {
  return (
    <>
      <VideoPlayerContainer>
        <Player src="" />
      </VideoPlayerContainer>
      <VideoInfos />
    </>
  );
}

export default VideoPlayer;
