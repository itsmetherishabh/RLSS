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
        <div className="m-2">
            <Link className='btn btn-light btn-lg' to='/science'>
            Science
            </Link>
            <img src="C:\Users\SAKASHI\OneDrive\science.png" width="20" alt="" />science
            <Link className='btn btn-light btn-lg mx-2' to='/commerce'>
            Commerce
            </Link>
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
        <div className='card m-3 p-3' style={{width: "18rem"}}>
        <img src='../images/science.png' className='card-img-top' alt='...' />
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
      
        <Switch>
          <Route exact path='/science' component={Science}></Route>
          <Route exact path='/commerce' component={Commerce}></Route>
          <Route exact path='/humanities' component={humanities}></Route>
          <Route exact path='/personality_test' component={personality_test}></Route>
          <Route exact path='/skill_assessment' component={skill_assessment}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Assessment;
