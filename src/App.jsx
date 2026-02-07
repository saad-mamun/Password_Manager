import "./App.css";
import Footer from "./components/Footer";
import Managers from "./components/Managers";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-[80vh]">
        <Managers />
      </div>
      <Footer />
    </>
  );
}

export default App;
