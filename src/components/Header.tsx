import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-between px-4 py-4 bg-white lg:bg-transparent">
      <a
        href="/"
        className="text-xl font-bold tracking-wide text-black uppercase title"
        aria-current="page"
      >
        Aayush Shukla
      </a>
      <div>
        <a
          href="/"
          // className="header-link hidden min-[1024px]:inline-block text-l font-bold pr-4 tracking-wider text-black uppercase"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold pr-4 tracking-wider uppercase ${
            window.location.pathname === "/"
              ? "header-link-active"
              : "text-black"
          }`}
        >
          Home
        </a>
        <a
          href="/work"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold pr-4 tracking-wider text-black uppercase ${
            window.location.pathname === "/work"
              ? "header-link-active"
              : "text-black"
          }`}
        >
          Work
        </a>
        <a
          href="/about"
          className={`header-link hidden min-[1024px]:inline-block text-l font-bold tracking-wider text-black uppercase ${
            window.location.pathname === "/about"
              ? "header-link-active"
              : "text-black"
          }`}
        >
          About
        </a>
        <div className="relative flex items-center justify-center min-[1024px]:hidden">
          <button onClick={handleToggle}>
            {isMenuOpen ? (
              <svg className="feather">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg className="feather">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full right-8 z-10 flex w-auto flex-col justify-center rounded-xl bg-black min-[1024px]:hidden">
            <div className="space-y-4 px-10 py-10 min-[1024px]:hidden">
              <a
                href="/"
                className={`block text-xl font-mediu ${
                  window.location.pathname === "/"
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                Home
              </a>
              <a
                href="/work"
                className={`block text-xl font-medium ${
                  window.location.pathname === "/work"
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                Work
              </a>{" "}
              <a
                href="/about"
                className={`block text-xl font-medium ${
                  window.location.pathname === "/about"
                    ? "text-blue-400"
                    : "text-white"
                }`}
              >
                About
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
