import React, {Component} from "react";
import {Menu, Container} from "semantic-ui-react";

class Navbar extends Component {
  state = {};

  handleItemClick = (e, {name}) => this.setState({activeItem: name});

  render() {
    const {activeItem} = this.state;

    return (
      <Menu
        inverted color="blue"
        fixed="top"
      >
        <Container>
          <Menu.Item>
            <b>Observation Tool</b>
          </Menu.Item>
          <Menu.Item
            name='project'
            active={activeItem === 'project'}
            onClick={this.handleItemClick}
          >
            Project
          </Menu.Item>
          <Menu.Item
            name='proposal'
            active={activeItem === 'proposal'}
            onClick={this.handleItemClick}
          >
            Proposal
          </Menu.Item>
          <Menu.Item
            name='planned-observing'
            active={activeItem === 'planned-observing'}
            onClick={this.handleItemClick}
          >
            Planned Observing
          </Menu.Item>
          <Menu.Item
            name='science-goals'
            active={activeItem === 'science-goals'}
            onClick={this.handleItemClick}
          >
            Science Goals
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;