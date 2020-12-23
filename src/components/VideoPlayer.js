import {
  VideoPlayer,
  VideoControllers,
  Video,
  VideoVolumeContainer,
} from "../../styles/VideoPlayer";

import { 
  FaPlayCircle, 
  FaPauseCircle, 
  FaVolumeUp,
  FaVolumeMute, 
  FaExpand,
  FaSyncAlt } from "react-icons/fa";
import { useState, useRef } from "react";

function Player() {
  const [ play, setPlay ] = useState(true);
  const [ muted, setMuted ] = useState(false);
  const [ loop, setLoop ] = useState(false);
  const [ duration, setDuration ] = useState('0');
  const [ currentTime, setCurrentTime ] = useState('0');
  const [ volume, setVolume ] = useState(50)
  const video = useRef("video");

  function setVideoInfos() {
    setDuration(video.current.duration)
  }

  function setPlayPause() {
    if (play) {
      setPlay(false);
      return video.current.pause()
    }
    setPlay(true)
    return video.current.play();
  }

  function setCurrentVolume(e) {
    setVolume(e.target.value)
    setMuted(false)
    video.current.muted = false
    return video.current.volume = volume / 100
  }

  function setMute() {
    if (video.current.muted) {
      setMuted(false)
      return video.current.muted = false
    }
    setMuted(true)
    return video.current.muted = true
  }

  function setVideoLoop() {
    if (video.current.loop) {
      setLoop(false)
      return video.current.loop = false
    }

    setLoop(true)
    return video.current.loop = true
  }

  return (
    <VideoPlayer>
      <VideoControllers>
        <button 
          className="videoPlay"
          onClick={setPlayPause}
        >
          {play ? <FaPauseCircle /> : <FaPlayCircle />}
        </button>
        <div className="VideoBottomControllers">
          <div class="seekbarContainer">
            <span>00:00/12:00</span>
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              className="seekBar"
            />
          </div>
          <VideoVolumeContainer>
            <button 
              onClick={setMute}
              className="volumeButton"
            >
              { muted ? (<FaVolumeMute />) : (<FaVolumeUp />) }
            </button>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={e => setCurrentVolume(e)}
              className="volumeRange"
            />

            <button className="fullscreenButton">
              <FaExpand />
            </button>
            <button 
              className="loopButton"
              onClick={setVideoLoop}
            >
              <FaSyncAlt color={loop ? '#37b5de' : '#fff'} />
            </button>
          </VideoVolumeContainer>
        </div>
      </VideoControllers>
      <Video
        ref={video}
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        onLoadedMetadata={() => setVideoInfos()}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
        autoPlay
      />
    </VideoPlayer>
  );
}

export default Player;
