import Sidebar from "../../Fragments/Sidebar";
import { useEffect, useState } from "react";
import UseNavigationToggle from "../../helper/NavigationToggle";
import DashboardCss from "../../helper/DashboardCss";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

const UpdateCarPage = () => {
  DashboardCss();
  const { navRef, bodyRef, headerRef, toggleRef } = UseNavigationToggle();
  const { id } = useParams();
  const [manufacture, setManufacture] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [car, setCar] = useState({
    name: "",
    rentPerDay: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8000/cars/${id}`)
      .then((response) => setCar(response.data))
      .catch((error) => console.log("Error fetching data:", error));
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar({ ...car, [name]: value });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCar({ ...car, image: reader.result });
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/cars/${id}`, car);
      if (response.status === 200) {
        setMessage("Car updated successfully!");
        navigate("/listcars");
      } else {
        setMessage("Failed to update car");
      }
    } catch (error) {
      setMessage("Something went wrong");
    }
  };

  return (
    <body id="body-pd" style={{ backgroundColor: "#e4e4e4" }} ref={bodyRef}>
      <header className="header" id="header" ref={headerRef}>
        <div className="header_toggle">
          {" "}
          <i className="bx bx-menu" id="header-toggle" ref={toggleRef}></i>{" "}
        </div>
        <Link
          to="#"
          style={{
            backgroundColor: "#CFD4ED",
            width: "100px",
            height: "34px",
            marginLeft: "10px",
          }}
        ></Link>
      </header>
      <Sidebar navRef={navRef}></Sidebar>
      <section className="new-car">
        <h2
          className="mb-2 pt-5"
          style={{ fontWeight: "700", fontSize: "20px", marginTop: "20px" }}
        >
          Update car
        </h2>
        <div className="card p-4" style={{ margin: "0 auto" }}>
          <form
            onSubmit={handleSubmit}
            method="post"
            id="add-cars"
            enctype="multipart/form-data"
          >
            <div className="mb-3">
              <label htmlFor="carName" className="form-label">
                Car Name
              </label>
              <input
                type="text"
                className="form-control"
                id="manufacture"
                name="manufacture"
                placeholder="Enter car name"
                value={car.manufacture}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="carPrice" className="form-label">
                Car Price
              </label>
              <input
                type="text"
                className="form-control"
                id="rentPerDay"
                name="rentPerDay"
                placeholder="Enter car price"
                value={car.rentPerDay}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="carPhoto" className="form-label">
                Car Photo
              </label>
              <input
                type="file"
                className="form-control"
                name="image"
                onChange={handleImage}
              />
              <img
                src={car.image}
                width="100px"
                className="img-thumbnail mt-1"
              />
              <input type="hidden" name="old_image" value={car.image} />
            </div>
            <div className="mb-3">
              <label htmlFor="carPhoto" className="form-label">
                Start Rent
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="carPhoto" className="form-label">
                Finish Rent{" "}
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="carPhoto" className="form-label">
                Created at
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="carPhoto" className="form-label">
                Updated at
              </label>
            </div>
            <button
              type="submit"
              className="btn mt-3 ms-4"
              style={{
                borderRadius: "0",
                border: "1px solid #0D28A6",
                backgroundColor: "#fff",
                color: "#0D28A6",
              }}
              onClick={() => window.history.back()}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn mt-3"
              name="submit"
              style={{
                borderRadius: "0",
                backgroundColor: "#0D28A6",
                color: "#fff",
              }}
            >
              Update
            </button>
          </form>
        </div>
      </section>
    </body>
  );
};

export default UpdateCarPage;
