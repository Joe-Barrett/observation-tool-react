import React, {Component} from "react";
import {Grid, Header, Segment} from 'semantic-ui-react';
import SpectralType from "./SpectralType";
import SpectralControl from "./SpectralControl";
import SpectralViewer from "./SpectralViewer";

class SpectralSetup extends Component {

  state = {
    receiver: true,
    transmission: true,
    dsb: false,
    lines: true,
    col: 'a',
    type: 'sl',
    pol: 'xx'
  };

  handleReceiverChange = () => this.setState({receiver: !this.state.receiver});
  handleTransmissionChange = () => this.setState({transmission: !this.state.transmission});
  handleDsbChange = dsb => this.setState({dsb: !this.state.dsb});
  handleLinesChange = lines => this.setState({lines: !this.state.lines});
  handleColChange = (e, col) => this.setState({col: col.value});
  handleTypeChange = (e, type) => this.setState({type: type.value});
  handlePolChange = (e, pol) => this.setState({pol: pol.value});


  render() {
    return (
      <div>
        <Grid columns="two">
          <Grid.Column tablet={16} largeScreen={10} widescreen={10}>
            <Header as="h3" attached="top" color="blue">
              Visualisation
            </Header>
            <Segment attached="bottom">
              <div style={{height: '30em', width: '100%', marginBottom: '2em'}}>
                <SpectralViewer/>
              </div>
              <SpectralControl
                receiver={this.state.receiver}
                onReceiverChange={this.handleReceiverChange}
                transmission={this.state.transmission}
                onTransmissionChange={this.handleTransmissionChange}
                dsb={this.state.dsb}
                onDsbChange={this.handleDsbChange}
                lines={this.state.lines}
                onLinesChange={this.handleLinesChange}
                col={this.state.col}
                onColChange={this.handleColChange}
              />
            </Segment>
          </Grid.Column>
          <Grid.Column tablet={16} largeScreen={6} widescreen={6}>
            <Header as="h3" attached="top" color="blue">
              Spectral Type
            </Header>
            <Segment attached="bottom">
              <SpectralType
                type={this.state.type}
                onTypeChange={this.handleTypeChange}
                pol={this.state.pol}
                onPolChange={this.handlePolChange}
              />
            </Segment>
          </Grid.Column>
        </Grid>
        <p>receiver: {this.state.receiver.toString()}</p>
        <p>transmission: {this.state.transmission.toString()}</p>
        <p>dsb: {this.state.dsb.toString()}</p>
        <p>lines: {this.state.lines.toString()}</p>
        <p>col: {this.state.col}</p>
        <p>type: {this.state.type}</p>
        <p>pol: {this.state.pol}</p>
      </div>
    );
  }
}

export default SpectralSetup;

