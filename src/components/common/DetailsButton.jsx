import { Link } from "react-router-dom";

const DetailsButton = ({ idMovie }) => {
  return (
    <Link
      to={`/movie/${idMovie}`}
      className="btn btn-warning rounded-3 shadow-lg mt-2"
    >
      Detail
    </Link>
  );
};

export default DetailsButton;
