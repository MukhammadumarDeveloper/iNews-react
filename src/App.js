import { Fragment } from 'react'
import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'

import Science from './Pages/Science/Science'
import Business from './Pages/Business/Business'


function App() {
  return (
    <Fragment>
      <nav>
      <ul>
        <li>
          <NavLink to="/science/">Science</NavLink>
        </li>
        <li>
          <NavLink to="/business/">Business</NavLink>
        </li>
      </ul>
    </nav>

    <Switch>

      <Redirect from="/home" to="/science" exact/>
      <Route path="/science/:page?" component={Science} exact />
      <Route path="/business/:page?" component={Business} exact />

    </Switch>
    </Fragment>
  );
}

export default App;
