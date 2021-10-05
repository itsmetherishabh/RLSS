import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Assessment from './components/Assessment';
import DataForm from './components/DataForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/assessment" component={Assessment}></Route>
        <Route exact path="/enroll" component={DataForm}></Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
