import React from "react";
import { Link } from "react-router-dom";
import iitLogo from "../images/iitLogo.jfif";
import duLogo from "../images/duLogo.png";
import luLogo from "../images/luLogo.jpg";
import jmiLogo from "../images/jmiLogo.png";



const Colleges = () =>{
    return(
    <div style={{background:"rgb(151, 224, 151)",minHeight:"40rem"}}>
        <div className="container">
            <div className="row">
                <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
                    <img src={iitLogo} className='card-img-top' alt='IIT logo' />
                    <div className='card-body'>
                    <h5 className='card-title'>Indian Institute of Technology</h5>
                    <p className='card-text'>
                        You can get admission in an IIT.
                        <br />
                        Click below to know more about how to take admission in this...
                    </p>
                    <Link to='/iit' className='btn btn-info'>
                        Know More
                    </Link>
                    </div>
                </div>
                <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
                    <img src={duLogo} className='card-img-top' alt='DU logo' />
                    <div className='card-body'>
                    <h5 className='card-title'>University Of Delhi</h5>
                    <p className='card-text'>
                        You can get admission in any College of D.U.
                        <br />
                        Click below to know more about how to take admission in this...
                    </p>
                    <Link to='/du' className='btn btn-info'>
                        Know More
                    </Link>
                    </div>
                </div>
                <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
                    <img src={luLogo} className='card-img-top' alt='LU logo' />
                    <div className='card-body'>
                    <h5 className='card-title'>University Of Lucknow</h5>
                    <p className='card-text'>
                        You can get admission in any College affiliated with L.U.
                        <br />
                        Click below to know more about how to take admission in this...
                    </p>
                    <Link to='/lu' className='btn btn-info'>
                        Know More
                    </Link>
                    </div>
                </div>
                <div className='card col-lg-3 col-md-5 col-sm my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
                    <img src={jmiLogo} className='card-img-top' alt='Jamia logo' />
                    <div className='card-body'>
                    <h5 className='card-title'>Jamia Milia Islamia</h5>
                    <p className='card-text'>
                        You can get admission in Jamia Milia.
                        <br />
                        Click below to know more about how to take admission in this...
                    </p>
                    <Link to='/jmi' className='btn btn-info'>
                        Know More
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Colleges;
