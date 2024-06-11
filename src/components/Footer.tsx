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
            <div className="phone-socials">
              <h4 className="mt-8 mb-4 text-sm font-semibold tracking-wider uppercase text-blue-300">
                My socials
              </h4>{" "}
              <nav>
                <a
                  href="https://github.com/a2ys"
                  title="Link to GitHub"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block pr-4 text-white"
                >
                  <svg className="feather">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/a2ys"
                  title="Link to LinkedIn page"
                  target="_blank"
                  rel="me nofollow noreferrer"
                  className="inline-block text-white"
                >
                  <svg className="feather">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </nav>
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
            <h4 className="mt-4 mb-4 text-sm font-semibold tracking-wider uppercase text-blue-300">
              My socials
            </h4>{" "}
            <nav>
              <a
                href="https://github.com/a2ys"
                title="Link to GitHub"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block pr-4 text-white"
              >
                <svg className="feather">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/a2ys"
                title="Link to LinkedIn page"
                target="_blank"
                rel="me nofollow noreferrer"
                className="inline-block text-white"
              >
                <svg className="feather">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
