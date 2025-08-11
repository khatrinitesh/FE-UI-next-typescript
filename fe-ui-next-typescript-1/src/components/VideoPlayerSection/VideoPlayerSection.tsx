"use client";
import { useVideoStore } from "@/store/useVideoStore/useVideoStore";
import React, { useEffect, useRef } from "react";

const VideoPlayerSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { isPlaying, isMuted, volume, play, pause, toggleMute, setVolume } =
    useVideoStore();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
    }

    video.muted = isMuted;
    video.volume = volume;
  }, [isPlaying, isMuted, volume]);

  return (
    <div className="w-full max-w-[640px] mx-auto">
      <video
        ref={videoRef}
        src="https://media.istockphoto.com/id/2173362884/video/2025-christmas-gift-christmas-present-opening-giving-box-container-package-backgrounds.mp4?s=mp4-640x640-is&k=20&c=tiHzKitStyQrQS23e2iHebXKnmiIXwGn0xfXyhhFt5Y=" // Replace with your video
        className="w-full rounded shadow"
        controls={false}
      />
      <div className="flex items-center gap-4 mt-4">
        <button onClick={isPlaying ? pause : play}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default VideoPlayerSection;
