import {Link} from "react-router-dom";

const NavBar = () => (
  <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid text-white">
        <Link className="nav-link active text-white" to="/">SyraTech</Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
)

export default NavBar;