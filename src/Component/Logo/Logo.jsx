import "./Logo.css";
import { Link } from "react-router-dom";
function Logo() {
  return (
    <>
      <Link to="/" className="text-black fsf">
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <img src="logo.svg" alt="Logo"  />
          <h5 style={{ margin: 0 }}>SparkSerene</h5>
        </span>
      </Link>
    </>
  );
}

export default Logo;
