import { useDeviceStore } from "@/store/useDeviceStore/useDeviceStore";
import { useDeviceListener } from "@/utils/utils";
import React from "react";

const ResponsiveNotice = () => {
  useDeviceListener();
  const { width, breakpoint } = useDeviceStore();

  return (
    <div className="p-4 bg-gray-100 rounded">
      <p>
        <strong>Viewport Width:</strong> {width}px
      </p>
      <p>
        <strong>Breakpoint:</strong> {breakpoint}
      </p>
    </div>
  );
};

export default ResponsiveNotice;
