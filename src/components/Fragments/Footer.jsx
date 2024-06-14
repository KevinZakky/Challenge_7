const Footer = () => {
  return (
    <footer className="footer">
      <div className="container container-fluid" style={{ maxWidth: "1168px" }}>
        <div className="row">
          <div className="col-sm-3 address">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </div>
          <div className="col-sm-3 section-link" style={{ maxWidth: "139px" }}>
            <ul>
              <li>
                <a href="#ourservices">Our services</a>
              </li>
              <li>
                <a href="#why">Why Us</a>
              </li>
              <li>
                <a href="#testimonial">Testimonial</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 footer-icons">
            <p>Connect with us</p>
            <ul>
              <li>
                <a href="#">
                  <img src="./images/icon_facebook.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/icon_instagram.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/icon_twitter.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/icon_mail.png" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="./images/icon_twitch.png" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3 copyright">
            <p>Copyright Binar 2024</p>
            <div className="footer-brand"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
