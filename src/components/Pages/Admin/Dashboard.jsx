import { Link } from "react-router-dom";
import Sidebar from "../../Fragments/Sidebar";
import UseNavigationToggle from "../../helper/NavigationToggle";
import DashboardCss from "../../helper/DashboardCss";

const DashboardPage = () => {
  const { navRef, bodyRef, headerRef } = UseNavigationToggle();
  DashboardCss();

  return (
    <div ref={bodyRef} id="body-pd">
      <header className="header" id="header" ref={headerRef}>
        <div className="header_toggle"></div>
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
      <div className="height-100">
        <div className="container">
          <div className="row my-4">
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-striped text-center my-3">
                  <thead>
                    <tr className="table-dark">
                      <th>No</th>
                      <th>User Email</th>
                      <th>Car</th>
                      <th>Start Rent</th>
                      <th>Finish Rent</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>user@gmail.com</td>
                      <td>Lamborghini aventador</td>
                      <td>27 juli 2024</td>
                      <td>27 juli 2042</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>user@gmail.com</td>
                      <td>Lamborghini aventador</td>
                      <td>27 juli 2024</td>
                      <td>27 juli 2042</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>user@gmail.com</td>
                      <td>Lamborghini aventador</td>
                      <td>27 juli 2024</td>
                      <td>27 juli 2042</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
