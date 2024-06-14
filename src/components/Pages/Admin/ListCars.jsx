import { useEffect, useState } from "react";
import Sidebar from "../../Fragments/Sidebar";
import DashboardCss from "../../helper/DashboardCss";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UseNavigationToggle from "../../helper/NavigationToggle";

const ListCars = () => {
  const [cars, setCars] = useState([]);
  const navigate = useNavigate();
  const { navRef, bodyRef, headerRef } = UseNavigationToggle();

  DashboardCss();

  useEffect(() => {
    fetch("http://localhost:8000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  const RupiahCurrency = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  const deleteCar = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/cars/${id}`);
      console.log("Car deleted Successfully!", id);
      setCars(cars.filter((car) => car.id !== id));
      navigate("/listcars");
    } catch (error) {
      console.log("Error deleting car: ", error);
    }
  };

  const handleDelete = async (id) => {
    await deleteCar(id);
  };

  return (
    <div id="body-pd" ref={bodyRef}>
      <header className="header" id="header" ref={headerRef}>
        <div className="header_toggle"> </div>
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
      <Sidebar navRef={navRef} />
      <main className="main-content">
        <div className="main-header d-flex justify-content-between">
          <h2
            className="mb-4 mt-3"
            style={{ fontWeight: "700", fontSize: "20px" }}
          >
            List car
          </h2>
          <button
            className="mt-3"
            style={{
              backgroundColor: "#0D28A6",
              width: "142px",
              height: "36px",
            }}
          >
            <Link to="/add_cars" style={{ color: "#fff" }}>
              + Add New Car
            </Link>{" "}
          </button>
        </div>
        <div className="sort-size">
          <span>All</span>
          <span>Small</span>
          <span>Medium</span>
          <span>Large</span>
        </div>
        <div className="container d-flex justify-content-center">
          <div className="row d-flex ">
            {cars.map((car) => (
              <div className="card mt-4 mx-4" key={car.id}>
                <img src={car.image} className="card-img-top" alt={car.type} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-type">
                    {car.manufacture}
                    {car.model}
                  </h5>
                  <p className="card-price">
                    {RupiahCurrency.format(car.rentPerDay)}
                  </p>
                  <p className="card-startRent">
                    <i className="fa-solid fa-key me-2"></i> Start rent - Finish
                    rent
                  </p>
                  <p className="card-updated">
                    <i className="fa-solid fa-clock me-2"></i>Updated at:{" "}
                    24/6/2024
                  </p>

                  <div className="button">
                    <button
                      className="btn-delete-car"
                      onClick={() => handleDelete(car.id)}
                    >
                      <Link to={`/delete/${car.id}`}>
                        <i className="fa-solid fa-trash"></i> Delete
                      </Link>
                    </button>
                    <button className="btn-update-car">
                      <Link to={`/update/${car.id}`}>
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListCars;
