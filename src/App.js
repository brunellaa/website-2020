import React from "react";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import Footer from "./components/footer/Footer";
import Background from "./components/background/Background";
import AOS from "aos";
import "aos/dist/aos.css";
import "./sass/main.scss";

function App() {
  AOS.init({ disable: "mobile" });
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Footer />
      <Background />
    </div>
  );
}

export default App;
