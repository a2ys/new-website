import { useEffect } from "react";
import chess from "../assets/images/Chess.jpg";
import portfolio from "../assets/images/Portfolio.png";

const Work = () => {
  useEffect(() => {
    document.title = "Work | Aayush Shukla";
  }, []);

  return (
    <div className="pt-10 mt-40 mb-40 lg:pt-30 lg:mt-30 lg:mb-40 sup:mb-40">
      <div
        data-animate="fade"
        className="mod-container in-viewport"
        data-in-viewport="i178"
      >
        <p className="mb-3 text-base font-semibold tracking-wide uppercase md:text-lg text-blue-600 lg:mb-5">
          Showcase
        </p>{" "}
        <h1 className="w-full text-black h1 lg:max-w-4/5 sup:max-w-4/6">
          Check out my recent projects.{" "}
        </h1>
      </div>
      <div className="mod-container mt-40">
        <div className="flex flex-wrap justify-between row">
          <a
            href="/work/chess-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full column lg:w-6/12 xl:w-5/12 mb-15 lg:mb-0 in-viewport below-viewport"
          >
            <div className="relative mb-10 thumbnail">
              <figure className="relative z-10 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black overlay"></div>{" "}
                <img
                  src={chess}
                  width="640"
                  height="597"
                  alt="Thumbnail for Chess AI"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </figure>{" "}
              <div className="z-0 border-line"></div>
            </div>{" "}
            <h2 className="mb-2 h2">Chess AI in Python</h2>{" "}
            <p>
              With plain Python, I created a chess engine and an AI which can
              play chess using the engine.
            </p>{" "}
            <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-blue-600">
              Read More
            </p>
          </a>
          <a
            href="/work/portfolio"
            className="block w-full column lg:w-6/12 xl:w-5/12 mb-15 lg:mb-0 lg:mt-30 in-viewport below-viewport"
          >
            <div className="relative mb-10 thumbnail">
              <figure className="relative z-10 overflow-hidden">
                <div className="absolute inset-0 z-10 bg-black overlay"></div>{" "}
                <img
                  src={portfolio}
                  width="640"
                  height="597"
                  alt="Thumbnail for Portfolio Website"
                  loading="lazy"
                  className="w-full h-auto"
                />
              </figure>{" "}
              <div className="z-0 border-line"></div>
            </div>{" "}
            <h2 className="mb-2 h2">Portfolio Website</h2>{" "}
            <p>My portfolio website created with React.</p>{" "}
            <p className="mt-4 text-xs font-semibold tracking-wider uppercase text-blue-600">
              Read More
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
