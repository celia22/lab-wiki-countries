import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import countriesJSON from './countries.json';

import NavBar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  componentDidMount() {
    this.setState = {
      status: countriesJSON,
    };
  }

  render() {
    return (
      <>
        <NavBar />
        <div>
          <CountriesList countries={countriesJSON} />
          <Router>
            <Route exact path="/:id" component={CountryDetails} />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
