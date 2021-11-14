import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/degree_logo.png";
import roadMap from "../images/roadMap.jpg";

const Home = () => {
  return (
    <div>
      <div className="row m-auto">
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"3.5rem"}}><b style={{height:"50px",background:"red",color:"white", padding:"5px"}}>R</b>ESEARCH ON <b style={{background:"red",color:"white", padding:"5px 8px"}}>L</b>EARNING POST <b style={{background:"red",color:"white", padding:"5px 8px"}}>S</b>CHOOL & <b style={{background:"red",color:"white", padding:"5px 8px"}}>S</b>COPE</span>
        </div>
        <div className="col-lg-6 col-md-6 col-12 p-0">
          <img src={roadMap} style={{maxHeight:"500px",margin:"0"}}/>
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"4rem"}}>We will help you at every level to excel in your LIFE goal</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
