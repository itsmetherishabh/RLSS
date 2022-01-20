import React from 'react';
import './css/Home.css';
import topImg from "../images/homeBook.jpg";
import homeCollege from "../images/homeCollege.jpg";
import homeAsses from "../images/homeAsses.jpg";
import homeCareer from "../images/homeCareer.jpg";
import homeInfo from "../images/homeInfo.jpg";
import homeInfo2 from "../images/homeInfo2.jpg";
import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div>
      <section className="topHeading">
        {/* <h1> Research on Learning post School and Scope </h1> */}
        {/* <h1>RLSS</h1> */}
        <span><b style={{height:"50px", padding:"5px", fontSize:"3.5rem"}}>R</b>ESEARCH ON <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>L</b>EARNING POST <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>S</b>CHOOL & <b style={{padding:"5px 8px", fontSize:"3.5rem"}}>S</b>COPE</span>
        <div className="mx-4 py-4 rounded" style={{ minHeight: "35rem", backgroundImage: `url(${topImg})`, backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}> 
            <p className="mb-4" style={{ fontSize: "4rem", color: "white", background: "rgba(211, 188, 219, 0.6)" }}><b>THE CAREER GUIDE TO EXCEL IN LIFE</b></p>
            <a href="/" className="btn btn-lg btn-light mt-4">Read More</a>
        </div>
        {/* <img src = { topImg } /> */}
      </section>

      <section className="container text-center my-4 py-3">

        <div className="my-2 py-3">
          <h3> WHAT WE PROVIDE? </h3>
          <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
        </div>

        <div className="row mx-auto px-3">
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={homeCareer} className='card-img-top' alt='12th logo' />
            <p>Here we provide best Career options that will lead to a bright future</p>
            <div className='card-body'>
              <Link to='/career' className='btn btn-secondary'>
                CAREER
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={homeAsses} className='card-img-top' alt='under graduation logo' />
            <div className='card-body'>
              <Link to='/assessment' className='btn btn-secondary'>
                ASSESSMENT
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto py-2 px-3' style={{maxWidth:"23rem"}}>
            <img src={homeCollege} className='card-img-top' alt='post graduation logo' style={{maxHeight:"12rem"}} />
            <p>Here we provide best Colleges or Universities from all around the India that are best fit for a student to study and
             conquer thier life goals. Also the procedure how to get in is also mentioned.</p>
            <div className='card-body'>
              <Link to='/colleges' className='btn btn-secondary'>
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
        <div className="bg-secondary pt-4" style={{ height: "28rem" }}>
          <div className="bg-light my-4 p-4 text-left" style={{ width: "18rem", position:'absolute', zIndex:'1', left:'20%', float: "left"}}>
            <p> We offer proper career guide and suggest some lists of colleges. Some tests paper are there to solve </p>
            <Link to="/colleges" className="btn btn-md btn-dark"> Learn More </Link>
          </div>
          <div className="bg-secondary" style = {{  float: "left" }}>
            <img src={homeInfo} alt="..." style={{ maxWidth: "20rem", position:'absolute', zIndex:'0', left:'35%' }} />
            <img src={homeInfo2} alt="..." className="mt-4" style={{ maxWidth: "20rem", position:'absolute', zIndex:'1', left:'52%', border: '20px solid white' }} />

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
