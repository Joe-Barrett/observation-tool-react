import React, {Component} from "react";
import {Form} from "semantic-ui-react";


class SpectralType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      line: 'sl',
      pol: 'xx'
    };

    this.handleLineChange = this.handleLineChange.bind(this);
    this.handlePolChange = this.handlePolChange.bind(this);
  }

  handleLineChange = (e, line) => this.setState({line: line.value});
  handlePolChange = (e, pol) => this.setState({pol: pol.value});

  render() {
    return (
      <Form>
        <Form.Group inline>
          <label>Spectral Type</label>
          <Form.Radio
            label="Spectral Line"
            value="sl"
            checked={this.state.line === 'sl'}
            onChange={this.handleLineChange}
          />
          <Form.Radio
            label="Single Continuum"
            value="sc"
            checked={this.state.line === 'sc'}
            onChange={this.handleLineChange}
          />
          <Form.Radio
            label="Spectral Scan"
            value="ss"
            checked={this.state.line === 'ss'}
            onChange={this.handleLineChange}
          />
        </Form.Group>
        <Form.Checkbox label="Produce Image Sidebands (Bands 9 and 10 only)"/>
        <Form.Group inline>
          <label>Polarization Products Desired</label>
          <Form.Radio
            label="XX"
            value="xx"
            checked={this.state.pol === 'xx'}
            onChange={this.handlePolChange}
          />
          <Form.Radio
            label="Dual"
            value="du"
            checked={this.state.pol === 'du'}
            onChange={this.handlePolChange}
          />
          <Form.Radio
            label="Full"
            value="fu"
            checked={this.state.pol === 'fu'}
            onChange={this.handlePolChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SpectralType;