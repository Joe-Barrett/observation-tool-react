import React, {Component} from "react";
import {Form} from "semantic-ui-react";


class SpectralType extends Component {
  render() {
    return (
      <Form>
        <Form.Group inline>
          <label>Spectral Type</label>
          <Form.Radio
            label="Spectral Line"
            value="sl"
          />
          <Form.Radio
            label="Single Continuum"
            value="sc"
          />
          <Form.Radio
            label="Spectral Scan"
            value="ss"
          />
        </Form.Group>
        <Form.Checkbox label="Produce Image Sidebands (Bands 9 and 10 only)"/>
        <Form.Group inline>
          <label>Polarization Products Desired</label>
          <Form.Radio
            label="XX"
            value="xx"
          />
          <Form.Radio
            label="Dual"
            value="du"
          />
          <Form.Radio
            label="Full"
            value="fu"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SpectralType;