
import './App.css';

import React, {useState} from 'react';
import NavBar from './Component/NavBar';
import News from './Component/News';
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = (props)=>{
  const pagesize = 5;
  // apiKey = "d093053d72bc40248998159804e0e67d"
  const apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}        
      />
        
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="general" pagesize ={pagesize} country = "in" category = "general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business" pagesize ={5} country = "in" category = "business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pagesize ={5} country = "in" category = "entertainment"/></Route>
          <Route exact path="/general"><News setProgress={setProgress} apiKey={apiKey} key="general" pagesize ={5} country = "in" category = "general"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pagesize ={5} country = "in" category = "health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pagesize ={5} country = "in" category = "science"/></Route>
          <Route exact path="/sport"><News setProgress={setProgress} apiKey={apiKey} key="sport" pagesize ={5} country = "in" category = "sport"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pagesize ={5} country = "in" category = "technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  
}

export default App

