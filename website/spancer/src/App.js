import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/comp/Header';
import TermConditions from "./components/pages/TermConditions";
import Home from "./components/pages/Home";
import Footer from "./components/comp/Footer";
import Policies from './components/pages/Policies';
import About from "./components/pages/About";
import FAQ from "./components/pages/FAQ";

function App() {
  return (
    <div className="app">
      <div className="app__links">
      <Router>
        <Header />  
         <Switch>
           <Route path="/faq">
              <FAQ />
           </Route>
           <Route path="/about">
             <About />
           </Route>
         <Route path="/policies">
               <Policies />
           </Route>
           <Route path="/tc">
             <TermConditions />
           </Route>
           <Route path="/">
             <Home />
           </Route>
         </Switch>
         <Footer />
         </Router>
     
       </div>
    </div>
  );
}

export default App;
