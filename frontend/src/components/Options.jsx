import React from 'react'
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './css/Options.css';
import Graduation from './careerOptions/Graduation';
import HighSchool from './careerOptions/HighSchool';
import Intermediate from './careerOptions/Intermediate';
import PostGraduation from './careerOptions/PostGraduation';


const Options = () => {
    return (
        <div className="container-fluid">
            <Router>
                <div className="row">
                    <div className="col-2">
                        <h4>Options After</h4>
                        <Link style={{textDecoration:"none"}} to='/highSchool'>
                            <div className="sideBlock" style={{background:'#F9D5A7'}}>
                                <h6 style={{color: "black"}}>High School</h6>
                            </div>
                        </Link>
                        <Link to='/intermediate'>
                            <div className="sideBlock">
                                Intermediate
                            </div>
                        </Link>
                        <Link to='/graduation'>
                            <div className="sideBlock">
                                Graduation
                            </div>
                        </Link>
                        <Link to='/postGraduation'>
                            <div className="sideBlock">
                                Post Graduation
                            </div>
                        </Link>
                    </div>
                    <div className="col-10">
                        {/* <HighSchool /> */}
                        <Switch>
                            <Route exact path='/highSchool' component={HighSchool}></Route>
                            <Route exact path='/intermediate' component={Intermediate}></Route>
                            <Route exact path='/graduation' component={Graduation}></Route>
                            <Route exact path='/postGraduation' component={PostGraduation}></Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default Options
