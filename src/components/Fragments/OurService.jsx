const OurService = () => {
  return (
    <section
      className="our-services"
      id="ourservices"
      style={{ marginTop: "6rem" }}
    >
      <div className="container container-fluid">
        <div className="row d-lg-flex">
          <div className="col-sm-6 our-services-img">
            <img
              src="./images/img_service.png"
              alt=""
              style={{ maxWidth: "459px", height: "auto" }}
            />
          </div>
          <div className="col-sm-6">
            <div className="our-services-text">
              <h2
                style={{
                  maxWidth: "468px",
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "36px",
                }}
              >
                Best Car Rental for any kind of trip in Malang!
              </h2>
              <p>
                Sewa mobil di Malang bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
            </div>
            <div
              className="services-list"
              style={{ marginLeft: "7%", marginTop: "5%" }}
            >
              <p>
                <img src="./images/icon.png" className="me-3" alt="" /> Sewa
                Mobil Dengan Supir di Bali 12 Jam
              </p>
              <p>
                <img src="./images/icon.png" className="me-3" alt="" /> Sewa
                Mobil Lepas Kunci di Bali 24 Jam
              </p>
              <p>
                <img src="./images/icon.png" className="me-3" alt="" /> Sewa
                Mobil Jangka Panjang Bulanan
              </p>
              <p>
                <img src="./images/icon.png" className="me-3" alt="" /> Gratis
                Antar-Jemput Mobil di Bandara
              </p>
              <p>
                <img src="./images/icon.png" className="me-3" alt="" /> Layanan
                Airport Transfer / Drop In Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
