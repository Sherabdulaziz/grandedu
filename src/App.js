import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import NotFound from "./components/NotFound";
import { Component } from "react";
import HomeP from "./components/HomeP";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Footer from "./components/Footer";
import Appc from "./components/Appc";

function App() {
  return (

    <div>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeP />} />
            <Route path="/section1" element={<Section1 />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />
            <Route path="/section4" element={<Section4 />} />
            <Route path="/section5" element={<Section5 />} />
            <Route path="/section6" element={<Section6 />} />
            <Route path="/section7" element={<Section7 />} />
            <Route path="/section8" element={<Section8 />} />
          {/* <Route path="/Appc" element={<Appc />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>

  );
}

export default App;
