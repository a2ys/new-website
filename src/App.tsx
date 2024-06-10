import "./index.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="inner">
        <Header />
        <Description />
        <Footer />
      </div>
    </>
  );
}

export default App;
