"use client";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@/constants/constants";
import { useBeamStore } from "@/store/useBeamStore/useBeamStore";
import { useEffect, useRef } from "react";

const TracingBeamComponent = () => {
  const { position, setTargetPosition, updateBeamPosition } = useBeamStore();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Set the target position to the mouse coordinates
      setTargetPosition(x, y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setTargetPosition]);

  useEffect(() => {
    const animationFrame = () => {
      updateBeamPosition();
      requestAnimationFrame(animationFrame);
    };
    animationFrame();
  }, [updateBeamPosition]);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT); // Clear canvas

        // Draw beam
        ctx.fillStyle = "rgba(255, 0, 0, 0.8)"; // Red beam with transparency
        ctx.fillRect(position.x - 2, position.y - 20, 4, 40); // Beam's position and size
      }
    }
  }, [position]);
  return <></>;
};

export default TracingBeamComponent;
