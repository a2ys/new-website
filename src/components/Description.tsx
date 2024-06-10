interface DescriptionProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Description = ({ isSidebarOpen, toggleSidebar }: DescriptionProps) => {
  return (
    <>
      <div
        className={`fixed top-0 bottom-0 right-0 z-50 w-full flex flex-col px-20 pt-20 pb-10 menu bg-blue-300 min-[560px]:max-w-sm min-[768px]:pt-30 sidebar ${
          isSidebarOpen ? "open" : ""
        }`}
      >
        <button
          type="button"
          className="text-sm font-medium tracking-wider text-black uppercase close-link"
          onClick={toggleSidebar}
        >
          Close
        </button>{" "}
        <nav role="navigation">
          <a
            href="/works/"
            title="Link to Works page"
            className="block mb-3 text-xl font-medium hover:text-white text-black"
          >
            Works
          </a>
          <a
            href="/About/"
            title="Link to About page"
            className="block mb-3 text-xl font-medium hover:text-white text-black"
          >
            About
          </a>
          <a
            href="/Contact/"
            title="Link to Contact page"
            className="block mb-3 text-xl font-medium hover:text-white text-black"
          >
            Contact
          </a>
        </nav>{" "}
        <div className="flex flex-wrap justify-between mt-auto">
          <a
            href="mailto:me@a2ys.dev"
            title="Link to Mail"
            target="_blank"
            rel="me nofollow noreferrer"
            className="text-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-mail"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <path d="m22 6-10 7L2 6"></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/unreal_sapien"
            title="Link to Twitter"
            target="_blank"
            rel="me nofollow noreferrer"
            className="text-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/a2ys"
            title="Link to GitHub"
            target="_blank"
            rel="me nofollow noreferrer"
            className="text-black hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-github"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </div>
      <main>
        <div className="flex flex-col items-center justify-center pt-20 text-black hero lg:pt-30 lg:pb-20 lg:mb-30">
          <div className="text-center">
            <p className="mb-3 text-lg font-semibold tracking-wide md:text-xl text-blue-600">
              Open Source Developer
            </p>
            <h1 className="mb-4 text-5xl md:text-7xl font-bold">
              Programming. <br className="hidden md:block" />
              Leadership.
            </h1>
          </div>
          <div
            data-animate="slide-up"
            className="mt-10 mb-20 lg:mb-40 in-viewport below-viewport"
            data-in-viewport="i0"
          >
            <div className="flex flex-wrap items-center justify-center p-10 row">
              <div className="w-full lg:w-7/12">
                <h2 className="mb-4 h2">Hey, I am Aayush Shukla</h2>
                <p>
                  An open-source developer from India. I'm skilled in developing
                  programs/applications in Java and Python, and developing
                  static websites with React.
                </p>
                <h3 className="mt-6 mb-4 h4">My key areas of expertise are:</h3>
                <ul className="ml-5 list-disc">
                  <li className="mb-1">
                    Programming: I have more than 6 years of experience in
                    programming, and know many languages, out of which my best
                    are Python and Java.
                  </li>
                  <li className="mb-1">
                    Leadership: I have led many projects,both public and
                    private, and I am good at leading teams and strategizing
                    roadmaps.
                  </li>
                  <li>
                    <a href="/services/" className="anchor-link">
                      and more...
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Description;
