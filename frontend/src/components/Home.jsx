import React from 'react';
import './css/Home.css';
import topImg from "../images/homeBook2.jpg";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <section className="topHeading">
        {/* <h1> Research on Learning post School and Scope </h1> */}
        {/* <h1>RLSS</h1> */}
        <span><b style={{height:"50px", padding:"5px", fontSize:"3.5rem"}}>R</b>ESEARCH ON <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>L</b>EARNING POST <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>S</b>CHOOL & <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>S</b>COPE</span>
        <div className="mx-4 py-4 rounded" style={{ minHeight: "35rem", backgroundImage: `url(${topImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}> 
            <p style={{ fontSize: "4rem", color: "white" }}>THE CAREER GUIDE TO EXCEL IN LIFE</p>
            <a href="" className="btn btn-md btn-secondary">Read More</a>
        </div>
        {/* <img src = { topImg } /> */}
      </section>

      <section className="container text-center my-4 py-3">

        <div className="my-2 py-3">
          <h3> WHAT WE PROVIDE? </h3>
          <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
        </div>
        {/* <div className="row">
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
        </div> */}

        <div className="row mx-auto px-3">
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={topImg} className='card-img-top' alt='12th logo' />
            <div className='card-body'>
              <Link to='/intermediate' className='btn btn-secondary'>
                CAREER
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={topImg} className='card-img-top' alt='under graduation logo' />
            <div className='card-body'>
              <Link to='/graduation' className='btn btn-secondary'>
                ASSESSMENT
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={topImg} className='card-img-top' alt='post graduation logo' style={{maxHeight:"12rem"}} />
            <div className='card-body'>
              <Link to='/postGraduation' className='btn btn-secondary'>
                COLLEGES
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-2">
        <div className="text-center my-3 py-3">
          <h3> MORE INFORMATION ABOUT COLLEGES </h3>
          <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
        </div>
        <div className="bg-secondary pt-4" style={{ height: "18rem" }}>
          <div className="bg-light my-4 p-4 text-left" style={{ width: "18rem", position:'absolute', zIndex:'1', left:'5%', float: "left"}}>
            <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
            <Link to="/" className="btn btn-md btn-dark"> Learn More </Link>
          </div>
          <div className="bg-secondary" style = {{  float: "left" }}>
            <img src={topImg} style={{ maxWidth: "20rem", position:'absolute', zIndex:'0', left:'20%' }} />
            <img src={topImg} className="mt-4" style={{ maxWidth: "20rem", position:'absolute', zIndex:'1', left:'35%', border: '20px solid white' }} />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
