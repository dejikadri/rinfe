import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { Mission } from './Mission'
import { Projects } from './Projects'
import { Services } from './Services'
import { NoMatch } from './NoMatch'
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron'
import { Footer } from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      {/* <Jumbotron /> */}
      <Layout>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/Projects" component={Projects} />
          <Route  path="/Mission" component={Mission} />
          <Route  path="/Services" component={Services} />
          <Route   component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
