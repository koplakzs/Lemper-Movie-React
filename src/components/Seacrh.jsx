const Seacrh = () => {
  return (
    <form className="d-flex ms-auto" role="search">
      <input
        className="form-control me-2 "
        type="search"
        placeholder="Search Movie"
        aria-label="Search"
      />
      <button className="btn btn-warning" type="submit">
        Search
      </button>
    </form>
  );
};

export default Seacrh;
