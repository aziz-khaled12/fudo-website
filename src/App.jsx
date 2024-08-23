import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Testemonials from "./components/Testemonials";
import GetStarted from "./components/GetStarted";
function App() {
  return (
    <>
      <div className="w-full px-24 py-11">
        <Navbar />
        <Home />
        <About />
        <Menu />
        <Testemonials />
        < GetStarted />
      </div>
    </>
  );
}

export default App;
