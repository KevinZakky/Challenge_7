import ReactOwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRef } from "react";

const Testimonial = () => {
  const carouselRef = useRef(null);
  const options = {
    center: true,
    loop: true,
    margin: 0,
    // nav: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      1000: {
        items: 2.3,
      },
    },
  };

  const prevButtonHandle = () => {
    if (carouselRef.current) {
      $(".owl-next").css("background-color", "");
      $(".owl-next").find("i").css("color", "");
      $(".owl-prev").css("background-color", "#5cb85f");
      $(".owl-prev").find("i").css("color", "white");
      carouselRef.current.prev();
    }
  };

  const nextButtonHandle = () => {
    if (carouselRef.current) {
      $(".owl-prev").css("background-color", "");
      $(".owl-prev").find("i").css("color", "");
      $(".owl-next").css("background-color", "#5cb85f");
      $(".owl-next").find("i").css("color", "white");
      carouselRef.current.next();
    }
  };

  return (
    <section className="testimonial" id="testimonial">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 title">
            <h3>Testimonial</h3>
            <p>Berbagai review positif dari para pelanggan kami</p>
          </div>
          <div className="col-12 box-carousel">
            <ReactOwlCarousel
              className="owl-carousel"
              {...options}
              ref={carouselRef}
            >
              <div className="testimonial-box">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid testimonial-img-profile"
                    src="/images/img_photo.png"
                    alt=""
                  />
                  <div className="testimonial-star-box">
                    <div>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid testimonial-img-profile"
                    src="/images/img_photo.png"
                    alt=""
                  />
                  <div className="testimonial-star-box">
                    <div>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial-box">
                <div className="d-flex align-items-center">
                  <img
                    className="img-fluid testimonial-img-profile"
                    src="/images/img_photo_1.png"
                    alt=""
                  />
                  <div className="testimonial-star-box">
                    <div>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-star"></i>
                      </a>
                    </div>
                    <p>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod lorem ipsum dolor sit amet, consectetur
                      adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                      amet, consectetur adipiscing elit, sed do eiusmod”
                    </p>
                    <h5>John Dee 32, Bromo</h5>
                  </div>
                </div>
              </div>
            </ReactOwlCarousel>
            <div className="col-12 text-center mt-3">
              <button className="owl-prev" onClick={prevButtonHandle}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="owl-next" onClick={nextButtonHandle}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
