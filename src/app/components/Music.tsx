"use client";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function Music() {
  return (
    <div className='flex gap-2 my-2 mx-5'>
      <AudioPlayer
        autoPlay
        loop
        defaultCurrentTime='00:00'
        defaultDuration='01:36'
        src='Dream and Dream.mp3'
        onPlay={(e) => console.log("onPlay")}
        showJumpControls={false}
        showDownloadProgress={false}
        showFilledVolume
      />
    </div>
  );
}
