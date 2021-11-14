import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Science from "./questionPapers/Science.jsx";
import Commerce from "./questionPapers/Commerce";
import humanities from "./questionPapers/humanities";
import personality_test from "./questionPapers/personality_test";
import skill_assessment from "./questionPapers/skill_assessment";
import science from "../images/science.png";
import commerce from "../images/commerce.jpg";
import humanitiesPic from "../images/humanities.png";
import personality from "../images/personality.webp";
import skills from "../images/skills.png";

const Assessment = () => {
  return (
    <div className="py-2" style={{background:"#F1E9E5"}}>
      <Router>
        <div className='container'>
          <div className="row">
            <div className='col-lg-3 col-md-4 col-12 card my-3 mx-1 p-3' style={{maxWidth:"20rem"}}>
              <img src={science} className='card-img-top' alt='...' style={{height:"11rem"}} />
              <div className='card-body'>
                <h5 className='card-title'>Science Questions</h5>
                <p className='card-text'>
                  You can click below to take a science test.
                </p>
                <Link to='/science' className='btn btn-primary'>
                  Click Here
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-12 card my-3 mx-1 p-3' style={{maxWidth:"20rem"}}>
              <img src={commerce} className='card-img-top' alt='...'  style={{height:"11rem"}} />
              <div className='card-body'>
                <h5 className='card-title'>Commerce Questions</h5>
                <p className='card-text'>
                  You can click below to take a commerce test.
                </p>
                <Link to='/commerce' className='btn btn-primary'>
                  Click Here
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-12 card my-3 mx-1 p-3' style={{maxWidth:"20rem"}}>
              <img src={humanitiesPic} className='card-img-top' alt='...'  style={{height:"11rem"}} /> /
              <div className='card-body'>
                <h5 className='card-title'>Humanities Questions</h5>
                <p className='card-text'>
                  You can click below to take a humanities test.
                </p>
                <Link to='/humanities' className='btn btn-primary'>
                  Click Here
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-12 card my-3 mx-1 p-3' style={{maxWidth:"20rem"}}>
              <img src={personality} className='card-img-top' alt='...'  style={{height:"11rem"}} />
              <div className='card-body'>
                <h5 className='card-title'>Personality Test Questions</h5>
                <p className='card-text'>
                  You can click below to take a personality test.
                </p>
                <Link to='/personality_test' className='btn btn-primary'>
                  Click Here
                </Link>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-12 card my-3 mx-1 p-3' style={{maxWidth:"20rem"}}>
              <img src={skills} className='card-img-top' alt='skills'  style={{height:"11rem"}} />
              <div className='card-body'>
                <h5 className='card-title'>Skill Assessment Questions</h5>
                <p className='card-text'>
                  You can click below to take a skill assesment test.
                </p>
                <Link to='/skill_assessment' className='btn btn-primary'>
                  Click Here
                </Link>
              </div>
            </div>
          {/* <Link className='btn btn-light btn-lg mx-2' to='/humanities'>
            humanities
          </Link>
          <Link className='btn btn-light btn-lg mx-2' to='/personality_test'>
            personality_test
          </Link>
          <Link className='btn btn-light btn-lg mx-2' to='/skill_assessment'>
            skill_assessment
          </Link> */}
          </div>
        </div>
        <hr/>

        <Switch>
          <Route exact path='/science' component={Science}></Route>
          <Route exact path='/commerce' component={Commerce}></Route>
          <Route exact path='/humanities' component={humanities}></Route>
          <Route
            exact
            path='/personality_test'
            component={personality_test}
          ></Route>
          <Route
            exact
            path='/skill_assessment'
            component={skill_assessment}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Assessment;
