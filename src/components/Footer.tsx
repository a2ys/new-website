const Footer = () => {
  return (
    <footer className="py-10 mt-20 text-white bg-black lg:mt-40 lg:py-20">
      <div className="mod-container">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-col lg:w-4/6">
            <div>
              <h4 className="mb-2 text-sm font-semibold tracking-wider uppercase text-blue-300 lg:mb-4">
                Interested in working together? Drop a mail.
              </h4>{" "}
              <a
                href="mailto:me@a2ys.dev"
                className="text-white big-email anchor-link"
              >
                me@a2ys.dev
              </a>
            </div>
          </div>{" "}
          <div className="hidden lg:block lg:w-3/12 xl:w-1/6">
            <h4 className="mb-4 text-sm font-semibold tracking-wider uppercase text-blue-300">
              Quick Links
            </h4>{" "}
            <nav>
              <a
                href="/work"
                title="Link to Work page"
                className="block mb-1 text-white"
              >
                <span className="anchor-link">Work</span>
              </a>
              <a
                href="/about"
                title="Link to About page"
                className="block mb-1 text-white"
              >
                <span className="anchor-link">About</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
