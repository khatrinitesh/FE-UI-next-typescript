const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-5 bg-black">
      <div className="container mx-auto">
        <div className="innerContent">
          <p className="txtCopyright text-white">&copy; {currentFullYear}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
