import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
    return(
        <div className="hero">
            <div className="card bg-dark text-white border-0">
              <img src="/images/bg.jpeg" className="card-img" alt="Background" height="600px"/>
              <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div className="container">
                    <h5 className="card-title display-2 fw-bolder mb-0">DIWALI SALE IS HERE</h5>
                    <p className="card-text fs-4">DONT MISS THE BIGGEST SALE OF INDIA</p>
                  </div>
              </div>
            </div>
            <div className="row justify-content-center py-3">
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
            <NavLink className="btn btn-danger me-2" to="/products"><h1 className="display-4">Shop Now</h1></NavLink>
            </div>
            </div>
        </div>
    )
}
export default Home;