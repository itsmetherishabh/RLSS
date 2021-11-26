import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../images/degree_logo.png";
import './css/Home.css';
import roadMap from "../images/roadMap.jpg";

const Home = () => {
  return (
    <div>
      <div className="row m-auto" style={{borderBottom:"5px solid rgb(4, 6, 17)"}}>
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"3.5rem"}}><b className="tilt" style={{height:"50px", padding:"5px"}}>R</b>ESEARCH ON <b className="tilt" style={{padding:"5px 8px"}}>L</b>EARNING POST <b className="tilt" style={{padding:"5px 8px"}}>S</b>CHOOL & <b className="tilt" style={{padding:"5px 8px"}}>S</b>COPE</span>
        </div>
        <div className="col-lg-6 col-md-6 col-12 p-0">
          <img src={roadMap} className="img-fluid" alt="roadMap" style={{maxHeight:"500px",margin:"0"}} />
        </div>
        <div className="col-lg-3 col-md-3 col-12">
          <span style={{fontSize:"4rem"}}>We will help you at every level to excel in your <b className="tilt" style={{padding:"0 8px"}}>LIFE</b> goal</span>
        </div>
      </div>
      <div className="container">
        <div className="my-3 px-5 py-3 rounded-pill bg-info text-dark" style={{border:"3px solid",borderBottom:"0"}}>
          <h1>How Do we Assist?</h1>
          <p className="homeContent" style={{fontSize:"1.2rem"}}>Enroll on our website, we'll take a few common test related to your background studies. You must be atleast 10th passed to access out website smoothly. 
          After completing those quizes you'll get a summary of how much qualified you are to opt for further option.
          (Provided summary is just a result on the basis of answers you've entered dusring the quiz, it is not the actual assessment of your capability and knowledge. 
          It is requested to attend the quiz with complete honesty for better suggestions.)</p>
        </div>
        {/* <hr className="m-auto" style={{borderStyle:"none", borderTop:"dotted", borderColor:"green", borderWidth:"15px", height:"0", width:"10%"}} /> */}
        <div className="my-3 px-5 py-3 rounded-pill bg-info text-dark" style={{border:"3px solid",borderTop:"0",}}>
          <h1>What Do we Offer?</h1>
          <ul className="homeContent" style={{fontSize:"1.2rem"}}>
            <li>Best Career Guide.</li>
            <li>Fastet Assist.</li>
            <li>Career Guide Based on  Assessment.</li>
          </ul>
        </div>
      </div>
      <div className="container">
        <hr/>
        <h1>SERVICES</h1>
        <p>We provide all kind of guidance to acomplish your life goal.</p>
        <ul>
          <li>Courses options</li>
          <li>Colleges options</li>
          <li>Subjects options</li>
          <li>Jobs options</li>
        </ul>
        <button className="btn btn-md btn-info">Get Started</button>
        <hr/>
      </div>
    </div>
  );
};

export default Home;
