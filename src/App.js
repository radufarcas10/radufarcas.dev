import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'keyframes.css';
import 'app.css';
import 'media_queries.css';
import Home from 'components/Home';
import CV from 'components/CV';
import Footer from 'components/Footer';

library.add(fab);

function App() {
  return (
    <Router hashType={'noslash'}>
      <div className="wrapper">
        <div className="grad">
          <div className="grad-in"></div>
        </div>
        <div className="about">
          <Switch>
            <Route path="/cv">
              <CV />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
