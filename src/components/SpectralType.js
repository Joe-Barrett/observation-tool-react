import React, {Component} from "react";
import {Form} from "semantic-ui-react";


class SpectralType extends Component {
  state = {
    line: 'sl',
    pol: 'xx'
  };

  handleLineChange = (e, line) => this.setState({line: line.value});
  handlePolChange = (e, pol) => this.setState({pol: pol.value});

  render() {
    const {line, pol} = this.state;
    return (
      <Form>
        <Form.Group inline>
          <label>Spectral Type</label>
          <Form.Radio
            label="Spectral Line"
            value="sl"
            checked={line === 'sl'}
            onChange={this.handleLineChange}
          />
          <Form.Radio
            label="Single Continuum"
            value="sc"
            checked={line === 'sc'}
            onChange={this.handleLineChange}
          />
          <Form.Radio
            label="Spectral Scan"
            value="ss"
            checked={line === 'ss'}
            onChange={this.handleLineChange}
          />
        </Form.Group>
        <Form.Checkbox label="Produce Image Sidebands (Bands 9 and 10 only)"/>
        <Form.Group inline>
          <label>Polarization Products Desired</label>
          <Form.Radio
            label="XX"
            value="xx"
            checked={pol === 'xx'}
            onChange={this.handlePolChange}
          />
          <Form.Radio
            label="Dual"
            value="du"
            checked={pol === 'du'}
            onChange={this.handlePolChange}
          />
          <Form.Radio
            label="Full"
            value="fu"
            checked={pol === 'fu'}
            onChange={this.handlePolChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SpectralType;