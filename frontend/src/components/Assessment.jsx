import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Science from "./questionPapers/Science.jsx";
import Commerce from "./questionPapers/Commerce";

const Assessment = () => {
  return (
    <div>
      <Router>
        <div className="m-2">
            <Link className='btn btn-light btn-lg' to='/science'>
            Science
            </Link>
            <Link className='btn btn-light btn-lg mx-2' to='/commerce'>
            Commerce
            </Link>
        </div>
        <Switch>
          <Route exact path='/science' component={Science}></Route>
          <Route exact path='/commerce' component={Commerce}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Assessment;
