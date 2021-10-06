import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Science from './questionPapers/Science.jsx';
import Commerce from './questionPapers/Commerce';



const Assessment = () => {
    return (
        <div>
            <Router>
                <Link className="btn btn-dark btn-lg" to="/science">Science</Link>
                <Link className="btn btn-dark btn-lg" to="/commerce">Commerce</Link>
                <Switch>
                    <Route exact path="/science" component={Science}></Route>
                    <Route exact path="/commerce" component={Commerce}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Assessment
