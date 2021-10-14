import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Assessment from './components/Assessment';
import DataForm from './components/DataForm';
import Footer from './components/Footer';
import CareerOptions from './components/CareerOptions';
import Contact from './components/Contact';
import HighSchool from './components/careerOptions/HighSchool';
import Intermediate from './components/careerOptions/Intermediate';
import Graduation from './components/careerOptions/Graduation';
import PostGraduation from './components/careerOptions/PostGraduation';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/assessment" component={Assessment}></Route>
        <Route exact path="/enroll" component={DataForm}></Route>
        <Route exact path="/career" component={CareerOptions}></Route>
         <Route exact path="/contact" component={Contact}></Route> 
         <Route exact path="/highSchool" component={HighSchool}></Route> 
         <Route exact path="/intermediate" component={Intermediate}></Route>
         <Route exact path="/graduation" component={Graduation}></Route>
         <Route exact path="/postGraduation" component={PostGraduation}></Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
