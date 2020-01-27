import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from './pages/home';
import { Layout } from './components/layout';

const Public: React.FC<{ Component: React.FC }> = ({ Component, ...rest }) => {
  return <Layout><Component {...rest} /></Layout>
};

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in">
          <p>sign-in</p>
        </Route>
        <Route path="/">
          <Public Component={Home} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
