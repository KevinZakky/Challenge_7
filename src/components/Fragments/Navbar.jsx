const Navbar = () => {
  return (
    <nav
      className="navbar navbar-light navbar-expand-lg"
      style={{ backgroundColor: "#f1f3ff" }}
    >
      <div className="container-fluid justify-content-between">
        <a className="navbar-brand" href="#hero"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{ border: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <ul className="nav nav-pills d-none d-lg-flex">
          <li className="nav-item">
            <a className="nav-link" href="#ourservices">
              Our Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#why">
              Why Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#testimonial">
              Testimonial
            </a>
          </li>
          <li className="nav-item me-2">
            <a className="nav-link" href="#faq">
              FAQ
            </a>
          </li>
          <li className="nav-item">
            <button
              type="button"
              className="btn btn-register"
              style={{ color: "#fff" }}
            >
              Register
            </button>
          </li>
        </ul>

        <div
          className="offcanvas offcanvas-end d-lg-none"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <a href="#" style={{ color: "#000", textDecoration: "none" }}>
              <h5
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                style={{ fontWeight: 700 }}
              >
                BCR
              </h5>
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#ourservices">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#why">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-register"
                  style={{
                    color: "#fff",
                    borderRadius: "2px",
                    marginTop: "0.8rem",
                  }}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
