import React, {Component} from 'react';
import {Container} from "semantic-ui-react";

import Navbar from './Navbar';
import '../styles/App.css';
import SpectralSetup from "./SpectralSetup";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div style={{marginTop: '4em', marginLeft: '4em', marginRight: '4em'}}>
          <SpectralSetup/>
        </div>
      </div>
    );
  }
}

export default App;
