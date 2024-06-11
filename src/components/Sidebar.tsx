interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  return (
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
          href="/work"
          title="Link to Work page"
          className="block mb-3 text-xl font-medium hover:text-white text-black"
        >
          Work
        </a>
        <a
          href="/about"
          title="Link to About page"
          className="block mb-3 text-xl font-medium hover:text-white text-black"
        >
          About
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
          <svg className="feather">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
            <polyline points="22,6 12,13 2,6"></polyline>
          </svg>
        </a>
        <a
          href="https://twitter.com/unreal_sapien"
          title="Link to Twitter"
          target="_blank"
          rel="me nofollow noreferrer"
          className="text-black hover:text-white"
        >
          <svg className="feather">
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
          <svg className="feather">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/a2ys"
          title="Link to LinkedIn"
          target="_blank"
          rel="me nofollow noreferrer"
          className="text-black hover:text-white"
        >
          <svg className="feather">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        <a
          href="https://instagram.com/_cococolastic_"
          title="Link to Instagram"
          target="_blank"
          rel="me nofollow noreferrer"
          className="text-black hover:text-white"
        >
          <svg className="feather">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
