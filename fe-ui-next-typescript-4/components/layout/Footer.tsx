const Footer = () => {
  const currentFullYear = new Date().getFullYear();
  return (
    <footer className="footer py-5 bg-black">
      <div className="container mx-auto">
        <div className="innerFooter">
          <p className="txtCopyright text-white text-center">
            &copy; {currentFullYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
