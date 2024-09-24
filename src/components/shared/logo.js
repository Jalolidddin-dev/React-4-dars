import { Link } from "react-router-dom";
import logoImage from "../../images/depositphotos_61243831-stock-photo-letter-s-logo.jpg";
import "../app.css";
function Logo() {
  return (
    <div className="logo_image">
      <Link to={"/"}>
        <img src={logoImage} alt="logo-image" />
      </Link>
    </div>
  );
}

export default Logo;
