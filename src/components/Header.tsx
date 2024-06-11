interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 flex justify-between px-6 py-4 bg-white lg:bg-transparent">
      <a
        href="/"
        className="text-xl font-bold tracking-wide text-black uppercase title"
        aria-current="page"
      >
        Aayush Shukla
      </a>
      <div>
        <a
          href="/work"
          className="text-sm font-bold pr-4 tracking-wider text-black uppercase"
        >
          Work
        </a>
        <a
          href="/about"
          className="text-sm font-bold pr-4 tracking-wider text-black uppercase"
        >
          About
        </a>
        <button
          type="button"
          className="text-sm font-medium tracking-wider text-black uppercase"
          onClick={toggleSidebar}
        >
          Menu
        </button>
      </div>
    </div>
  );
};

export default Header;
