import React from "react";
import { Link } from "react-router-dom";

const Team = () => {
    return(
        <div className="py-4" style={{background:"rgb(151, 224, 151)",minHeight:"40rem"}}>
            <div className="container">
                <h2><u>Our T</u>eam</h2>
                <div className="d-flex p-2" style={{border:"2px solid white",borderRadius:"5px"}}>
                    <div className="p-1" style={{maxHeight:"12rem"}}>
                        <img src="..."  alt="team member's profile"  />
                    </div>
                    <div>
                        <h3>Rishabh Jain</h3>
                        <p>(LEADER)</p>
                        <p>I'm a fresher web developer. MCA(2022) from JIMS - IP</p>
                        <div className="row">
                            <div className="col-3"><i className="fab fa-facebook"></i></div>
                            <div className="col-3"><i className="fab fa-instagram"></i></div>
                            <div className="col-3"><i className="fas fa-envelope-open"></i></div>
                            <div className="col-3"><i className="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2" style={{border:"2px solid white",borderRadius:"5px"}}>
                    <div className="p-1" style={{maxHeight:"12rem"}}>
                        <img src="..." alt="team member's profile"  />
                    </div>
                    <div>
                        <h3>Sonali Aswal</h3>
                        <p>I'm a fresher web developer. MCA(2022) from JIMS - IP</p>
                        <div className="row">
                            <div className="col-3"><i className="fab fa-facebook"></i></div>
                            <div className="col-3"><i className="fab fa-instagram"></i></div>
                            <div className="col-3"><i className="fas fa-envelope-open"></i></div>
                            <div className="col-3"><i className="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2" style={{border:"2px solid white",borderRadius:"5px"}}>
                    <div className="p-1" style={{maxHeight:"12rem"}}>
                        <img src="..." alt="team member's profile"  />
                    </div>
                    <div>
                        <h3>Lalima Singh</h3>
                        <p>I'm a fresher web developer. MCA(2022) from JIMS - IP</p>
                        <div className="row">
                            <div className="col-3"><i className="fab fa-facebook"></i></div>
                            <div className="col-3"><i className="fab fa-instagram"></i></div>
                            <div className="col-3"><i className="fas fa-envelope-open"></i></div>
                            <div className="col-3"><i className="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
                <div className="d-flex p-2" style={{border:"2px solid white",borderRadius:"5px"}}>
                    <div className="p-1" style={{maxHeight:"12rem"}}>
                        <img src="..." alt="team member's profile"  />
                    </div>
                    <div>
                        <h3>Sakshi</h3>
                        <p>I'm a fresher web developer. MCA(2022) from JIMS - IP</p>
                        <div className="row">
                            <div className="col-3"><i className="fab fa-facebook"></i></div>
                            <div className="col-3"><i className="fab fa-instagram"></i></div>
                            <div className="col-3"><i className="fas fa-envelope-open"></i></div>
                            <div className="col-3"><i className="fab fa-linkedin-in"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team;
