import { useTooltipStore } from "@/store/usetooltipStore/usetooltipStore";
import React from "react";

interface TooltipTriggerProps {
  text: string;
  children: React.ReactNode;
}

const TooltipTriggerComponent = ({ text, children }: TooltipTriggerProps) => {
  const { showTooltip, hideTooltip } = useTooltipStore();

  const handleMouseMove = (e: React.MouseEvent) => {
    showTooltip(text, e.clientX, e.clientY);
  };
  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseLeave={hideTooltip}
    >
      {children}
    </span>
  );
};

export default TooltipTriggerComponent;
