import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Fragments/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import DashboardCss from "../../helper/DashboardCss";
import UseNavigationToggle from "../../helper/NavigationToggle";

const AddCarsPage = () => {
  DashboardCss();
  const [manufacture, setManufacture] = useState("");
  const [rentPerDay, setRentPerDay] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const { navRef, toggleRef, headerRef, bodyRef } = UseNavigationToggle();

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => [setImage(reader.result)];
  };

  const addCar = async (event) => {
    event.preventDefault();
    const formData = {
      manufacture: manufacture,
      rentPerDay: rentPerDay,
      image: image,
    };

    try {
      await axios.post("http://localhost:8000/cars", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setMessage("Car added successfully!");
      navigate("/listcars");
    } catch (err) {
      setMessage(err.response.data.msg);
    }
  };

  return (
    <div id="body-pd" style={{ backgroundColor: "#e4e4e4" }} ref={bodyRef}>
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
          Add new car
        </h2>
        <div className="card p-4" style={{ margin: "0 auto" }}>
          <form
            onSubmit={addCar}
            action="/add_cars"
            method="post"
            id="add-cars"
            encType="multipart/form-data"
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
                value={manufacture}
                onChange={(e) => setManufacture(e.target.value)}
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
                value={rentPerDay}
                onChange={(e) => setRentPerDay(e.target.value)}
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
                required
              />
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
              Save
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddCarsPage;
