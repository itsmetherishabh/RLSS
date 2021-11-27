import React from 'react'
import { Link } from "react-router-dom";
import './css/Footer.css';

const Footer = () => {
    return (
        // <div className="container-fluid text-light p-3"  style={{background:"#212121"}}>
        //     &copy; COPYRIGHT 2021 RLSS
        // </div>
        <div className="container-fluid text-dark p-3" id="footer">
            <div className="row mx-2">
                <div className="col">
                    <h3><u>ABO</u>UT</h3>
                    <Link to="/contact" className="text-dark" style={{textDecoration:"none"}}>Contact Us</Link> <br />
                    <Link to="/team" className="text-dark" style={{textDecoration:"none"}}>Our Team</Link>
                </div>
                <div className="col">
                    <h3><u>HE</u>LP</h3>
                    <Link to="/faq" className="text-dark" style={{textDecoration:"none"}}>FAQ</Link>
                </div>
                <div className="col">
                    <h3><u>SOC</u>IAL</h3>
                    <Link to="/facebook" className="text-dark" style={{textDecoration:"none"}}>FaceBook</Link> <br />
                    <Link to="/intagram" className="text-dark" style={{textDecoration:"none"}}>Instagram</Link> <br />
                    <Link to="/linkedIn" className="text-dark" style={{textDecoration:"none"}}>Linked In</Link>
                </div>
                <div className="col-sm">
                    <h3><u>Mai</u>l Us</h3>
                    <p>Research on Learning post School & Scope, F-55 Sector-36 Greater (201310), Noida, India</p>
                </div>
            </div>
            <hr />
            <div className="row mx-2">
                <div className="col">&copy; COPYRIGHT 2021 RLSS</div>
            </div>
        </div>
    );
};

export default Footer
