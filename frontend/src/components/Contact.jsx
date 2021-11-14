import React from 'react'
import background from "../images/booksBg.jpg";

const Contact = () => {
    return (
        <div className="py-5" style={{backgroundImage:`url(${background})`,minHeight:"40rem"}}>
            <div className="container" id="contactPage">
                <center>
                <div className="container text-light">
                    <h1> Get In Touch</h1>
                    <p>To get in touch please fill up the below form </p>
                    <div className="row" style={{maxWidth: "50rem",textAlign: "left"}}>
                        <div className="col-lg-6 col-12 mx-5 ml-auto" style={{maxWidth: "50rem"}}>
                            <p><b>Drop a Message</b></p>
                            <form className="row g-2">
                                <div className="col-12">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com"/>
                                </div>
                                {/* <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4"/>
                                </div> */}
                                <div className="col-12">
                                    <label htmlFor="inputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                                </div>
                                <div className="col-md-5">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="inputCity"/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select">
                                        <option selected>Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label htmlFor="inputZip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="inputZip"/>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-info">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div className="mx-1 col-lg-3 mr-auto col-16 p-4 bg-info text-dark">
                            <p>Contact Information</p>
                            <p>F-55 Sector 36 Greater Noida (201310)</p>
                            <p>+917834984092</p>
                            <p>rlss@gmail.com</p>
                            <p>rlss.com</p>
                            <div className="row">
                                <div className="col-3"><i className="fab fa-facebook"></i></div>
                                <div className="col-3"><i className="fab fa-instagram"></i></div>
                                <div className="col-3"><i className="fas fa-envelope-open"></i></div>
                                <div className="col-3"><i className="fab fa-linkedin-in"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
                </center>
            </div>
        </div>
    )
}

export default Contact
