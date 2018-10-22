import React, {Component} from "react";
import {Grid, Header, Segment} from 'semantic-ui-react';
import SpectralType from "./SpectralType";
import SpectralControl from "./SpectralControl";

class SpectralSetup extends Component {
  render() {
    return (
      <Grid columns="two">
        <Grid.Column tablet={16} largeScreen={10} widescreen={10}>
          <Header as="h3" attached="top" color="blue">
            Visualisation
          </Header>
          <Segment attached="bottom">
            <div style={{height: '10em'}}/>
            <SpectralControl/>
          </Segment>
        </Grid.Column>
        <Grid.Column tablet={16} largeScreen={6} widescreen={6}>
          <Header as="h3" attached="top" color="blue">
            Spectral Type
          </Header>
          <Segment attached="bottom">
            <SpectralType/>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SpectralSetup;

