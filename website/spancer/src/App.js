import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/comp/Header';
import Content from "./components/comp/Content";
import FAQ from "./components/comp/FAQ";
import TermConditions from "./components/comp/TermConditions";
import PrivacyPolicy from "./components/comp/PrivacyPolicy";

function App() {
  return (
    <div className="app">
     <Router>
       <Header />
       <div className="app__body">
         <Switch>
           <Route path="/content">
             <Content />
           </Route>
           <Route path="/faq">
             <FAQ />
           </Route>
           <Route path="/privacypolicy">
             <PrivacyPolicy />
           </Route>
           <Route path="/tc">
             <TermConditions />
           </Route>
         </Switch>
       </div>
     </Router>
    
    </div>
  );
}

export default App;
