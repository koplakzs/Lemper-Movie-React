import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Seacrh = () => {
  const [searchMovie, setSearchMovie] = useState("");

  return (
    <form className="d-flex ms-auto" role="search">
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Search Movie"
        aria-label="Search"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <Link to={`/search/${searchMovie}`}>
        <button
          className="btn btn-warning"
          type="submit"
          onClick={() => setSearchMovie("")}
        >
          Search
        </button>
      </Link>
    </form>
  );
};

export default Seacrh;
