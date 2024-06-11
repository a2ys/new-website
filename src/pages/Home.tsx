import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Aayush Shukla";
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center pt-40 text-black hero lg:pt-30 lg:pb-10 lg:mb-10">
        <div className="text-center">
          <p className="mb-3 text-lg font-semibold tracking-wide md:text-xl text-blue-600 uppercase">
            Open source developer
          </p>
          <h1 className="mb-4 text-5xl md:text-7xl font-bold">Aayush Shukla</h1>
        </div>
      </div>
      <div
        data-animate="slide-up"
        className="mod-container mt-10 mb-20 lg:mb-40 in-viewport below-viewport"
        data-in-viewport="i0"
      >
        <div className="flex flex-wrap items-center justify-center p-10 row">
          <div className="w-full lg:w-7/12">
            <h2 className="mb-4 h2">Hey, I am Aayush Shukla</h2>
            <p>
              An open-source developer from India. I'm skilled in developing
              programs/applications in Java and Python, and developing static
              websites with React.
            </p>
            <h3 className="mt-6 mb-4 h4">My key areas of expertise are:</h3>
            <ul className="ml-5 list-disc">
              <li className="mb-1">
                Programming: I have more than 6 years of experience in
                programming, and know many languages, out of which my best are
                Python and Java.
              </li>
              <li className="mb-1">
                Leadership: I have led many projects, both public and private,
                and I am good at leading teams and strategizing roadmaps.
              </li>
              <li>
                <a href="/about" className="anchor-link">
                  and more...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
