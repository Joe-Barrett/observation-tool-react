import React, {Component} from 'react';
import {Button, Container, Form, Grid} from "semantic-ui-react";


class SpectralControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      col: 'a'
    };

    this.handleColChange = this.handleColChange.bind(this);
  }

  handleColChange = (e, col) => this.setState({col: col.value});

  render() {
    return (
      <Container>
        <Grid centered columns={1} style={{marginBottom: '1em'}}>
          <Button.Group labeled icon compact size='tiny' color='blue'>
            <Button icon='exchange' content='Pan to Spectral Window'/>
            <Button icon='zoom' content='Zoom to Band'/>
            <Button icon='refresh' content='Reset View'/>
          </Button.Group>
        </Grid>
        <Form>
          <Form.Group inline>
            <label>Overlays</label>
            <Form.Checkbox label="Receiver Bands"/>
            <Form.Checkbox label="Transmission"/>
            <Form.Checkbox label="DSB Image"/>
            <Form.Checkbox label="Spectral Lines"/>
            <Form.Button labelPosition='left' compact size="tiny" color="blue" icon="signal"
                         content="Select Lines to Overlay"/>
          </Form.Group>
          <Form.Group inline>
            <label>Water Vapour Column Density</label>
            <Form.Radio
              label="Automatic"
              value="a"
              checked={this.state.col === 'a'}
              onChange={this.handleColChange}
            />
            <Form.Radio
              label="Manual"
              value="m"
              checked={this.state.col === 'm'}
              onChange={this.handleColChange}
            />
            <Form.Select/>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SpectralControl;
