import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Tokenomics from './components/pages/Tokenomics';
import Roadmap from './components/pages/Roadmap';
import Buy from './components/pages/Buy';
import Disclaimer from './components/pages/Disclaimer';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/tokenomics' component={Tokenomics} />
          <Route path='/roadmap' component={Roadmap} />
          <Route path='/buy' component={Buy} />
          <Route path='/disclaimer' component={Disclaimer} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
