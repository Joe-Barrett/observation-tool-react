import React, {Component} from "react";
import {string} from 'prop-types';
import {Form} from "semantic-ui-react";


class SpectralType extends Component {

  static propTypes = {
    type: string,
    pol: string
  };

  static defaultProps ={
    type: 'sl',
    pol: 'xx'
  };

  render() {
    const type = this.props.type;
    return (
      <Form>
        <Form.Group inline>
          <label>Spectral Type</label>
          <Form.Radio
            label="Spectral Line"
            value="sl"
            checked={type === 'sl'}
            onChange={this.props.onTypeChange}
          />
          <Form.Radio
            label="Single Continuum"
            value="sc"
            checked={type === 'sc'}
            onChange={this.props.onTypeChange}
          />
          <Form.Radio
            label="Spectral Scan"
            value="ss"
            checked={type === 'ss'}
            onChange={this.props.onTypeChange}
          />
        </Form.Group>
        <Form.Checkbox label="Produce Image Sidebands (Bands 9 and 10 only)"/>
        <Form.Group inline>
          <label>Polarization Products Desired</label>
          <Form.Radio
            label="XX"
            value="xx"
            checked={this.props.pol === 'xx'}
            onChange={this.props.onPolChange}
          />
          <Form.Radio
            label="Dual"
            value="du"
            checked={this.props.pol === 'du'}
            onChange={this.props.onPolChange}
          />
          <Form.Radio
            label="Full"
            value="fu"
            checked={this.props.pol === 'fu'}
            onChange={this.props.onPolChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SpectralType;