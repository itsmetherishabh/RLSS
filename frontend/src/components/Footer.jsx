import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        // <div className="container-fluid text-light p-3"  style={{background:"#212121"}}>
        //     &copy; COPYRIGHT 2021 RLSS
        // </div>
        <div className="container-fluid text-light p-3"  style={{background:"#212121"}}>
            <div className="row">
                <div className="col-3">
                    <h3><u>ABO</u>UT</h3>
                    <Link to="/contact" style={{color:"#fff", textDecoration:"none"}}>Contact Us</Link> <br />
                    <Link to="/team" style={{color:"#fff", textDecoration:"none"}}>Our Team</Link>
                </div>
                <div className="col-3">
                    <h3><u>HE</u>LP</h3>
                    <Link to="/faq" style={{color:"#fff", textDecoration:"none"}}>FAQ</Link>
                </div>
                <div className="col-3">
                    <h3><u>SOC</u>IAL</h3>
                    <Link to="/facebook" style={{color:"#fff", textDecoration:"none"}}>FaceBook</Link> <br />
                    <Link to="/intagram" style={{color:"#fff", textDecoration:"none"}}>Instagram</Link> <br />
                    <Link to="/linkedIn" style={{color:"#fff", textDecoration:"none"}}>Linked In</Link>
                </div>
                <div className="col-3">
                    <h3><u>Mai</u>l Us</h3>
                    <p>Research on Learning post School & Scope, F-55 Sector-36 Greater (201310), Noida, India</p>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-4">&copy; COPYRIGHT 2021 RLSS</div>
            </div>
        </div>
    );
};

export default Footer
