import React from 'react';
import './css/Home.css';
import topImg from "../images/homeBook2.jpg";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <section className="topHeading">
        <h1> RLSS </h1>
        <div className="mx-4 rounded" style={{ minHeight: "35rem", backgroundImage: `url(${topImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>  </div>
        {/* <img src = { topImg } /> */}
      </section>

      <section className="container text-center">
        <h3> WHAT WE PROVIDE? </h3>
        <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
        <div className="row">
          <div className="col-4 col-sm mx-2" >
            <img src={topImg} style={{ maxWidth: "25rem" }} />
            <Link to="/" className="btn btn-md btn-info"> Learn more </Link>
          </div>
          <div className="col-4 col-sm mx-2" >
            <img src={topImg} style={{ maxWidth: "25rem" }} />
            <Link to="/" className="btn btn-md btn-info"> Learn more </Link>
          </div>
          <div className="col-4 col-sm mx-2" >
            <img src={topImg} style={{ maxWidth: "25rem" }} />
            <Link to="/" className="btn btn-md btn-info"> Learn More </Link>
          </div>
        </div>
      </section>

      <section>
        <h3> More Information For College </h3>
        <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
        <div className="bg-info" style={{ height: "25rem" }}>
          <div className="bg-light my-4 p-4" style={{ width: "18rem", float: "left"}}>
            <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
            <Link to="/" className="btn btn-md btn-dark"> Learn More </Link>

          </div>
          <div className="bg-secondary" style = {{  float: "left" }}>
            <img src={topImg} style={{ maxWidth: "25rem" }} />
            <img src={topImg} style={{ maxWidth: "25rem", border: '10px solid white'}} />

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
