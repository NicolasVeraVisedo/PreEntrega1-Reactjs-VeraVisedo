import "./navbar.scss";
import logo from "../../img/logo.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} width={50} alt="" /> JoyveriE
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Principal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Aros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Collares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pulseras
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
