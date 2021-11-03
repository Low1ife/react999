import React from 'react';
import { BrowserRouter as Router  , Route } from 'react-router-dom';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Reference from './components/pages/Reference';
import Script from './components/pages/Script';
import Youtube from './components/pages/Youtube';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';

function App(){
    return (
      <Router>
          <Route path="/" component={Main} />
          <Route path="/About" component={About} />
          <Route path="/Reference" component={Reference} />
          <Route path="/Script" component={Script} />
          <Route path="/Youtube" component={Youtube} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Portfolio" component={Portfolio} />
      </Router>
    )
}

export default App;