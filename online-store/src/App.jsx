import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Homepage />
      <Cards/>
    </>
  );
}

export default App;
