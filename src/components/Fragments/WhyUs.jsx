const WhyUs = () => {
  return (
    <section className="why-us" id="why">
      <h3>Why Us?</h3>
      <p className="p-title">Mengapa harus pilih Binar Car Rental?</p>
      <div className="container container-why d-lg-flex justify-content-evenly container-fluid">
        <div className="col-sm-4 col-list-why">
          <img
            src="./images/thumbs-up.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h5>Mobil Lengkap</h5>
          <p>
            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
            terawat
          </p>
        </div>
        <div className="col-sm-4 col-list-why">
          <img
            src="./images/icon_price.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h5>Harga Murah</h5>
          <p>
            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
            mobil lain
          </p>
        </div>
        <div className="col-sm-4 col-list-why">
          <img
            src="./images/icon_24hrs.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h5>Layanan 24 Jam</h5>
          <p>
            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
            tersedia di akhir minggu
          </p>
        </div>
        <div className="col-sm-4 col-list-why">
          <img
            src="./images/icon_professional.png"
            alt=""
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <h5>Sopir Profesional</h5>
          <p>
            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat
            waktu
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
