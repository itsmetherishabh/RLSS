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
  var topics = [
    {
      img:science,
      heading:"Science Questions",
      description:"You can click below to take a science test.",
      url:"/science"
    },
    {
      img:commerce,
      heading:"Commerce Questions",
      description:"You can click below to take a commerce test.",
      url:"/commerce"
    },
    {
      img:humanitiesPic,
      heading:"Humanities Questions",
      description:"You can click below to take a humanities test.",
      url:"/humanities"
    },
    {
      img:personality,
      heading:"Personality Test Questions",
      description:"You can click below to take a personality test.",
      url:"/personality_test"
    },
    {
      img:skills,
      heading:"Skill Assessment Questions",
      description:"You can click below to take a skill assesment test.",
      url:"/skill_assessment"
    }
  ];
  return (
    <div className="py-2" style={{background:"#F1E9E5"}}>
      <Router>
        <div className='container'>
          <div className="row">
            {
              topics.map((topic) => {
                return (
                  <div className='col-lg-3 col-md-5 col-sm card my-3 mx-auto p-3' style={{maxWidth:"20rem"}}>
                    <img src={topic.img} className='card-img-top' alt='...' style={{height:"11rem"}} />
                    <div className='card-body'>
                      <h5 className='card-title'>{topic.heading}</h5>
                      <p className='card-text'>
                        {topic.description}
                      </p>
                      <Link to={topic.url} className='btn btn-primary'>
                        Click Here
                      </Link>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <hr/>

        <Switch>
          <div className="bg-light py-2">
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
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default Assessment;
