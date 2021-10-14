import React from "react";
import { Link } from "react-router-dom";


const CareerOptions = () => {
  return (
    <div className="container row">
      <div className='card col-lg-3 col-md-4 col-12 my-3 mx-2 p-3'>
        <img src='...' className='card-img-top' alt='...' />
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
      <div className='card col-lg-3 col-md-4 col-12 my-3 mx-2 p-3'>
        <img src='...' className='card-img-top' alt='...' />
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
      <div className='card col-lg-3 col-md-4 col-12 my-3 mx-2 p-3'>
        <img src='...' className='card-img-top' alt='...' />
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
      <div className='card col-lg-3 col-md-4 col-12 my-3 mx-2 p-3'>
        <img src='...' className='card-img-top' alt='...' />
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
  );
};

export default CareerOptions;
