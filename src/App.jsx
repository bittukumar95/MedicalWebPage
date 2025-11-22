import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import "./styles/Header.css";
import Home from "./components/Home";
import "./styles/Home.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
