import React, {Component} from 'react';
import {bool, string, func} from 'prop-types';
import {Button, Container, Form, Grid} from "semantic-ui-react";


class SpectralControl extends Component {

  static propTypes = {
    receiver: bool,
    onReceiverChange: func,
    transmission: bool,
    onTransmissionChange: func,
    dsb: bool,
    onDsbChange: func,
    lines: bool,
    onLinesChange: func
  };

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
            <Form.Checkbox
              label="Receiver Bands"
              checked={this.props.receiver}
              onChange={this.props.onReceiverChange}
            />
            <Form.Checkbox
              label="Transmission"
              checked={this.props.transmission}
              onChange={this.props.onTransmissionChange}
            />
            <Form.Checkbox
              label="DSB Image"
              checked={this.props.dsb}
              onChange={this.props.onDsbChange}
            />
            <Form.Checkbox
              label="Spectral Lines"
              checked={this.props.lines}
              onChange={this.props.onLinesChange}
            />
            <Form.Button labelPosition='left' compact size="tiny" color="blue" icon="signal"
                         content="Select Lines to Overlay"/>
          </Form.Group>
          <Form.Group inline>
            <label>Water Vapour Column Density</label>
            <Form.Radio
              label="Automatic"
              value="a"
              checked={this.props.col === 'a'}
            />
            <Form.Radio
              label="Manual"
              value="m"
              checked={this.props.col === 'm'}
            />
            {/*<Form.Select/>*/}
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

export default SpectralControl;
