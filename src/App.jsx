import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import Home from "./screens/Home";
import Navigation from "./components/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvSeries from "./screens/TvSeries";
import Search from "./screens/Search";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/search/:params" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
