import { useEffect } from "react";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page not found";
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center justify-center pt-40 text-black hero lg:pt-30 lg:pb-10 lg:mb-10">
        <div className="text-center">
          <p className="mb-3 text-lg font-semibold tracking-wide md:text-xl text-blue-600 uppercase">
            Never gonna give you up, never gonna let you down
          </p>
          <h1 className="mb-4 text-5xl md:text-7xl font-bold">
            Don't tell me you're too blind to see 👀
          </h1>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
