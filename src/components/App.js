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
        <Container style={{marginTop: '4em'}}>
          <SpectralSetup/>
        </Container>
      </div>
    );
  }
}

export default App;
