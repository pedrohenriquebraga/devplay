import {
  VideoPlayer,
  VideoControllers,
  Video,
  VideoVolumeContainer,
} from "../../styles/VideoPlayer";

import { formatTime } from '../../utils/formatTime'

import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaSyncAlt,
} from "react-icons/fa";
import { useState, useRef } from "react";

function Player() {
  const [play, setPlay] = useState(true);
  const [ loading, setLoading ] = useState(false);
  const [muted, setMuted] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [loop, setLoop] = useState(false);
  const [duration, setDuration] = useState("0");
  const [currentTime, setCurrentTime] = useState("0");
  const [volume, setVolume] = useState(50);
  const video = useRef("video");
  const videoPlayer = useRef("videoPlayer");

  function setVideoInfos() {
  }

  function setSeekBar(time) {
    setCurrentTime(time);
    video.current.currentTime = time;
    setPlayPause();
  }

  function setPlayPause() {
    if (play && !loading) {
      setPlay(false);
      return video.current.pause();
    } else if (!play && !loading) {
      setPlay(true);
      return video.current.play();
    }
  }

  function setLoadingVideo(networkState = 1) {
    if (!networkState) return;

    if (video.current.waiting || networkState == 0 || networkState == 2) {
      return setLoading(true);
    } else {
      return setLoading(false);
    }
  }

  function setCurrentVolume(e) {
    setVolume(e.target.value);
    setMuted(false);
    video.current.muted = false;
    return (video.current.volume = volume / 100);
  }

  function setMute() {
    if (video.current.muted) {
      setMuted(false);
      return (video.current.muted = false);
    }
    setMuted(true);
    return (video.current.muted = true);
  }

  async function setVideoFullscreen() {
    if (!fullscreen) {
      setFullscreen(true);
      if (videoPlayer.current.requestFullscreen) {
        return await videoPlayer.current.requestFullscreen();
      } else if (videoPlayer.current.webkitRequestFullscreen) {
        return await videoPlayer.current.webkitRequestFullscreen();
      } else if (videoPlayer.current.msRequestFullscreen) {
        return await videoPlayer.current.msRequestFullscreen();
      }
    } else {
      setFullscreen(false);
      if (document.exitFullscreen) {
        return await document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        return await document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        return await document.msExitFullscreen();
      }
    }
  }

  function setVideoLoop() {
    if (video.current.loop) {
      setLoop(false);
      return video.current.loop = false
    } else {
      setLoop(true);
      return video.current.loop = true
    }
  }

  function setEnded() {
    if (!video.current.loop) {
      setPlayPause()
      setCurrentTime("0")
      return video.current.currentTime = 0;
    } else {
      setPlayPause()
      setCurrentTime("0")
      return setPlayPause()
    }
  }

  return (
    <VideoPlayer >
      <div className="player" ref={videoPlayer}>
        <VideoControllers>
          <button
            title="Play/Pause" 
            className="videoPlay" 
            onClick={setPlayPause}>
            { 
              play && !loading ? 
              <FaPause /> : 
              !play && !loading ? (<FaPlay />) : <img src="/loading.svg" className="loading" /> 
            }
          </button>
          <div className="VideoBottomControllers">
            <div class="seekbarContainer">
              <span>
                {formatTime(currentTime)}/{formatTime(video.current.duration)}
              </span>
              <input
                type="range"
                min="0"
                max={video.current.duration}
                value={currentTime}
                onChange={(e) => setSeekBar(e.target.value)}
                className="seekBar"
              />
            </div>
            <VideoVolumeContainer>
              <button
                title="Silenciar/Ativar Som" 
                onClick={setMute} 
                className="volumeButton">
                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
              <input
                type="range"
                title={`Volume: ${volume}`}
                min="0"
                max="100"
                value={volume}
                onChange={(e) => setCurrentVolume(e)}
                className="volumeRange"
              />

              <button 
                title="Tela Cheia"
                className="fullscreenButton" 
                onClick={setVideoFullscreen}>
                {!fullscreen ? <FaExpand /> : <FaCompress />}
            </button>
              
              <button 
                title="Repetir"
                className="loopButton" 
                onClick={() => setVideoLoop()}>
                <FaSyncAlt color={loop ? "#37b5de" : "#fff"} />
              </button>
            </VideoVolumeContainer>
          </div>
        </VideoControllers>
        <Video
          ref={video}
          src="/Micro Frontends_ Node.js_ Unform_ StyleSheets_ Sty(240P).mp4"
          poster='https://i.ytimg.com/vi/gq9uGdZCKxI/maxresdefault.jpg'
          onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
          autoPlay
          onPlaying={() => setLoading(false)}
          onWaiting={(e) => setLoadingVideo(e.currentTarget.networkState)}
          onEnded={() => setEnded()}
        />
      </div>
    </VideoPlayer>
  );
}

export default Player;
