import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Testemonials from "./components/Testemonials";
import GetStarted from "./components/GetStarted";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="w-full px-24 pt-11 pb-16 flex flex-col items-center justify-between gap-28">
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Testemonials />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
}

export default App;
