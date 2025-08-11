import React from "react";

const PreloaderSection = () => {
  return (
    <div className="preloaderSpinner bg-[rgba(255,65,555,0.3)] fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="loader"></div>
    </div>
  );
};

export default PreloaderSection;
