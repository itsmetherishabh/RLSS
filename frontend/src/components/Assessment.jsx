import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Science from "./questionPapers/Science.jsx";
import Commerce from "./questionPapers/Commerce";
import humanities from "./questionPapers/humanities";
import personality_test from "./questionPapers/personality_test";
import skill_assessment from "./questionPapers/skill_assessment";

const Assessment = () => {
  return (
    <div>
      <Router>
        <div className='m-2'>
          <div className='card m-3 p-3' style={{ width: "18rem" }}>
            <img src='science.png' className='card-img-top' alt='...' />
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
          <div className='card m-3 p-3' style={{ width: "18rem" }}>
            <img src='science.png' className='card-img-top' alt='...' />
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
          <Link className='btn btn-light btn-lg mx-2' to='/humanities'>
            humanities
          </Link>
          <Link className='btn btn-light btn-lg mx-2' to='/personality_test'>
            personality_test
          </Link>
          <Link className='btn btn-light btn-lg mx-2' to='/skill_assessment'>
            skill_assessment
          </Link>
        </div>

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
