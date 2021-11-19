import React from "react";
import { Link } from "react-router-dom";
import tenth from "../images/tenth.png";
import twelfth from "../images/twelfth.png";
import underGrad from "../images/underGrad.jpg";
import postGrad from "../images/postGrad.jpg";


const CareerOptions = () => {
  return (
    <div style={{background:"#94B3FD",minHeight:"40rem"}}>
    {/* <div style={{backgroundImage:`url(${careerBg})`,backgroundSize:`cover`,backgroundRepeat:`no-repeat`}}> */}
      <div className="container">
        <div className="row">
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
            <img src={tenth} className='card-img-top' alt='10th logo' />
            <div className='card-body'>
              <h5 className='card-title'>Completed High Scool</h5>
              <p className='card-text'>
                You can opt for intermediate or diploma.
                <br />
                Click below to know more about career in this...
              </p>
              <Link to='/highSchool' className='btn btn-primary'>
                Click Here
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
            <img src={twelfth} className='card-img-top' alt='12th logo' />
            <div className='card-body'>
              <h5 className='card-title'>Completed Intermediate</h5>
              <p className='card-text'>
                You can opt for bachelor's or diploma. Also you can look forward to several jobs in government sector.
                <br />
                Click below to know more about career in this...
              </p>
              <Link to='/intermediate' className='btn btn-primary'>
                Click Here
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
            <img src={underGrad} className='card-img-top' alt='under graduation logo' />
            <div className='card-body'>
              <h5 className='card-title'>Completed Graduation</h5>
              <p className='card-text'>
                You can look forwqard to apply in related companies. Also there's an option of applying for masters. You can also become an Entrepreneur.
                <br />
                Click below to know more about career in this...
              </p>
              <Link to='/graduation' className='btn btn-primary'>
                Click Here
              </Link>
            </div>
          </div>
          <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
            <img src={postGrad} className='card-img-top' alt='post graduation logo' style={{maxHeight:"12rem"}} />
            <div className='card-body'>
              <h5 className='card-title'>Completed Masters</h5>
              <p className='card-text'>
                You can apply for Phd. There's options for campanies to apply. Also can become guest faculty in several Universities.
                <br />
                Click below to know more about career in this...
              </p>
              <Link to='/postGraduation' className='btn btn-primary'>
                Click Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOptions;
