import { TOOLTIP_DELAY, TOOLTIP_OFFSET } from "@/constants/constants";
import { useTooltipStore } from "@/store/usetooltipStore/usetooltipStore";
import React, { useEffect, useState } from "react";

const TooltipComponent = () => {
  const { text, visible, position } = useTooltipStore();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (visible) {
      timeout = setTimeout(() => setShouldRender(true), TOOLTIP_DELAY);
    } else {
      setShouldRender(false);
    }

    return () => clearTimeout(timeout);
  }, [visible]);

  if (!shouldRender) return null;
  return (
    <div
      className="fixed px-3 py-2 bg-black text-white text-sm rounded shadow-md z-50 pointer-events-none transition-opacity duration-150"
      style={{
        top: position.y + TOOLTIP_OFFSET,
        left: position.x + TOOLTIP_OFFSET,
      }}
    >
      {text}
    </div>
  );
};

export default TooltipComponent;
