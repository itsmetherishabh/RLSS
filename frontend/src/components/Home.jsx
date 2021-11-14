import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/degree_logo.png";
import roadMap from "../images/roadMap.jpg";

const Home = () => {
  return (
    <div>
      <div className="row m-auto">
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"3.5rem"}}><b style={{background:"red",color:"white"}}>R</b>ESEARCH ON <b style={{background:"red",color:"white"}}>L</b>EARNING POST <b style={{background:"red",color:"white"}}>S</b>CHOOL & <b style={{background:"red",color:"white"}}>S</b>COPE</span>
        </div>
        <div className="col-lg-5 col-md-5 col-12">
          <img src={roadMap} style={{maxHeight:"500px"}}/>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"4rem"}}>We will help you at every level to excel in your life goal</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
