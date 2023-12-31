import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Home from "./screens/Home";
import Navigation from "./components/layouts/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./screens/Search";
import Detail from "./screens/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:params" element={<Search />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
