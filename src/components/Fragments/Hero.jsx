import Button from "../Elements/Buttons";

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundColor: "#f1f3ff" }} id="hero">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-6 text-box">
            <div className="main-text ">
              <h1>Sewa & Rental Mobil Terbaik di kawasan Malang</h1>
              <p>
                Selamat datang di Binar Car Rental. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.{" "}
              </p>
            </div>
            <Button></Button>
          </div>
          <div className="col-sm-6 hero-img">
            <img src="./images/img_car.png" className="img-fluid " alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
