import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const Home = () => {
  return (
    <div className="home-container">
      <MDBContainer
        fluid
        className="p-4"
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "100vh",
        }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column justify-content-center"
          >
            <h1 className="home-title">
              Explore Ukraine
              <br />
              <span>Camper Van Rentals</span>
            </h1>
          </MDBCol>
        </MDBRow>
        <div className="home-wrapper">
          <Link to="/catalog" className="go-link-btn">
            <span className="btn-span">Let's Go</span>
          </Link>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Home;