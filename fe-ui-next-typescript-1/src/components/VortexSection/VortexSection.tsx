"use client";
import { useVortexStore } from "@/store/useVortexStore/useVortexStore";
import clsx from "clsx";
import React, { useEffect } from "react";

const VortexSection: React.FC = () => {
  const {
    isSpinning,
    speed,
    direction,
    toggleVortex,
    changeSpeed,
    changeDirection,
  } = useVortexStore();

  // Dynamically set the speed of the rotation
  const vortexStyle = {
    animation: isSpinning
      ? `${
          direction === "clockwise" ? "spinClockwise" : "spinCounterClockwise"
        } ${speed}s infinite linear`
      : "none",
  };

  // This is the animation CSS for spin
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes spinClockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes spinCounterClockwise {
        from { transform: rotate(0deg); }
        to { transform: rotate(-360deg); }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="vortex-container">
      <div
        className={clsx(
          "vortex w-24 h-24 rounded-full border-4 border-blue-500 flex justify-center items-center",
          { "bg-transparent": !isSpinning, "bg-blue-100": isSpinning }
        )}
        style={vortexStyle}
      >
        <div className="text-center">
          <button
            className="text-white px-4 py-2 bg-blue-500 rounded-md"
            onClick={toggleVortex}
          >
            {isSpinning ? "Stop Vortex" : "Start Vortex"}
          </button>
          <div>
            <button
              onClick={() => changeSpeed(speed === 1 ? 0.5 : 1)}
              className="text-white px-2 py-1 bg-green-500 rounded-md mt-2"
            >
              Toggle Speed (Current: {speed}s)
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                changeDirection(
                  direction === "clockwise" ? "counterclockwise" : "clockwise"
                )
              }
              className="text-white px-2 py-1 bg-yellow-500 rounded-md mt-2"
            >
              Toggle Direction ({direction})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VortexSection;
