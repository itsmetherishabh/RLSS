import React from "react";
import logo from "../images/degree_logo.png";
import userImg from "../images/user1.jpg";

const Home = () => {
  return (
    <div>
      <h1 style={{ fontFamily: "Akronim", backgroundColor: "#99ffff" }}>
        <marquee>
          <img src={logo} alt='' />
          Reasearch on Learning post School & Scope
        </marquee>
      </h1>

      <section className='header'>
        <div className='text-box'>
          <h1>world's Best Website</h1>
          <p>
            <h2>How We Will Help You <br /> In your journey</h2>
          </p>
          <button className="btn btn-lg btn-info mt-4">Road Map</button>
        </div>
      </section>
      <section className='testimonials'>
        <h1>What Our Students Says</h1>
        <div className='row'>
          <div className='testimonial-col'>
            <img src={userImg} alt='' />
            <div>
              <p>Lorem ipsum dolor sit amet copp</p>
              <h3>kartik singh</h3>
            </div>
          </div>
          <div className='testimonial-col'>
            <img src={userImg} alt='' />
            <div>
              <p>Lorem ipsum dolor sit amet copp</p>
              <h3>Nitin Sharma</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
