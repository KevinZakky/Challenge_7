import { Link } from "react-router-dom";

const Button = () => {
  return (
    <button type="button" className="btn btn-sewa">
      <Link to="/cars">Mulai Sewa Mobil</Link>
    </button>
  );
};
export default Button;
