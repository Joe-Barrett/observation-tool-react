import React, {Component} from 'react';
import {FlexibleXYPlot, LineSeries, XAxis, YAxis, Highlight} from "react-vis";
import {DATA} from "./SpectralData";
import * as d3 from 'd3';


class SpectralViewer extends Component {
  render() {
    return (
      <FlexibleXYPlot>
        <XAxis/>
        <LineSeries data={DATA}
                    style={{fill: 'none'}}
                    yDomain={[d3.max(DATA, d => d.y), d3.min(DATA, d=> d.y)]}
        >
        </LineSeries>
        <Highlight
          drag
          enableY={false}
          onBrush={area => this.setState({filter: area})}
          onDrag={area => this.setState({filter: area})}/>
      </FlexibleXYPlot>
    );
  }
}

export default SpectralViewer;