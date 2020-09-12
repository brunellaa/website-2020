import React from "react";
import Header from "./components/header/Header";
import MainPage from "./pages/MainPage";
import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
    </div>
  );
}

export default App;
