import React from "react";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sass/main.scss";

function App() {
  AOS.init();
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
