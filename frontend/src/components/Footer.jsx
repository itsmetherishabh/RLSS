import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // <div className="container-fluid text-light p-3"  style={{background:"#212121"}}>
        //     &copy; COPYRIGHT 2021 RLSS
        // </div>
        <div className="container-fluid text-light p-3"  style={{background:"#212121"}}>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3">
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-4">&copy; COPYRIGHT 2021 RLSS</div>
            </div>
        </div>
    );
};

export default Footer
