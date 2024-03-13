import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './composants/Home';
import AddQuote from './composants/AddQuote';
import ShowQuotes1 from './composants/ShowQuotes1';
import ShowQuotes2 from './composants/ShowQuotes2';
import ShowQuotes3 from './composants/ShowQuotes3';
import Page404 from './composants/Page404';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-quote">Add Quote</Link>
            </li>
            <li>
              <Link to="/show-quotes-1">Show Quotes 1</Link>
            </li>
            <li>
              <Link to="/show-quotes-2">Show Quotes 2</Link>
            </li>
            <li>
              <Link to="/show-quotes-3">Show Quotes 3</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/add-quote" component={AddQuote} />
          <Route path="/show-quotes-1" component={ShowQuotes1} />
          <Route path="/show-quotes-2" component={ShowQuotes2} />
          <Route path="/show-quotes-3" component={ShowQuotes3} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
