import React from "react";

const FooterSection = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-[20px] bg-black">
      <div className="container mx-auto text-white">
        &copy; copyright {currentFullYear}
      </div>
    </footer>
  );
};

export default FooterSection;
