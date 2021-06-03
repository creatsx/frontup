import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/pages/Header';
import FAQ from "./components/pages/FAQ";
import TermConditions from "./components/pages/TermConditions";
import Home from "./components/comp/Home";
import Mission from "./components/comp/Mission";
import Footer from "./components/comp/Footer";
import Contact from './components/comp/Contact';
import CookiePolicy from './components/pages/CookiePolicy';
import Policies from './components/pages/Policies';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />  
      <div className="app__links">
         <Switch>
           <Route path="/tc">
             <TermConditions />
           </Route>
           <Route path="/policies">
               <Policies />
           </Route>
         </Switch>
       </div>
     </Router>
     <div className="app__body">
      <Home />
      <Mission />
      <Contact />
      <Footer />
    </div>

  </div>
  );
}

export default App;
