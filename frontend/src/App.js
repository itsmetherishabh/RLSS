import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Assessment from './components/Assessment';
import DataForm from './components/DataForm';
import Enroll from './components/Enroll';
import Login from './components/Login';
import Footer from './components/Footer';
import CareerOptions from './components/CareerOptions';
import Colleges from './components/Colleges';
import Team from './components/Team';
import Contact from './components/Contact';
import HighSchool from './components/careerOptions/HighSchool';
import Intermediate from './components/careerOptions/Intermediate';
import Graduation from './components/careerOptions/Graduation';
import PostGraduation from './components/careerOptions/PostGraduation';
import CareerSearch from './components/CareerSearch';
import Options from './components/Options';
import IIT from './components/colleges/IIT';
import DU from './components/colleges/DU';
import LU from './components/colleges/LU';
import Jamia from './components/colleges/Jamia';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/assessment" component={Assessment}></Route>
        <Route exact path="/enroll" component={DataForm}></Route>
        <Route exact path="/enroll2" component={Enroll}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/career" component={CareerOptions}></Route>
        <Route exact path="/colleges" component={Colleges}></Route>
        <Route exact path="/team" component={Team}></Route>
        <Route exact path="/contact" component={Contact}></Route> 
        <Route exact path="/highSchool" component={HighSchool}></Route> 
        <Route exact path="/intermediate" component={Intermediate}></Route>
        <Route exact path="/graduation" component={Graduation}></Route>
        <Route exact path="/postGraduation" component={PostGraduation}></Route>
        <Route exact path="/careerSearch" component={CareerSearch}></Route>
        <Route exact path="/careerop" component={Options}></Route>
        <Route exact path="/iit" component={IIT}></Route>
        <Route exact path="/du" component={DU}></Route>
        <Route exact path="/lu" component={LU}></Route>
        <Route exact path="/jamia" component={Jamia}></Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
