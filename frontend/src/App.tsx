import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './components/layout';

const Public: React.FC<{ Component: React.FC }> = ({ Component, ...rest }) => {
  return <Layout><Component {...rest}/></Layout>
};

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sign-up">sign-up</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sign-up">
            <p>sign-up</p>
          </Route>
          <Route path="/">
            <Public Component={Home}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
