import "./index.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="inner">
        <Header toggleSidebar={toggleSidebar} />
        <Description
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
