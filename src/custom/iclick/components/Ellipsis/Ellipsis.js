import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pagination, NavDropdown } from "react-bootstrap";


class Ellipsis extends Component {
  state = {
    list: []
  }
  onEllipsisClick = (e) => {
    const prev = +e.currentTarget.parentNode.previousSibling.innerText;
    const next = +e.currentTarget.parentNode.nextSibling.innerText;
    const diff = next - prev;
    const list = [];
    for (let i = prev + 1; i < (prev + diff); i += 1) {
      list.push(i);
    }
    this.setState({
      list
    });
  };
  onItemClick = (e) => {
    const value = e.currentTarget.innerHTML;
    if (Number.isNaN(value)) { return; }
    this.props.setActive(parseInt(value, 10));
  };
  render() {
    return (
      <Pagination.Item onClick={this.onEllipsisClick}>
        <NavDropdown title="" id="collasible-nav-dropdown" className="dropup">
          {this.state.list.map((i) =>
            (
              <NavDropdown.Item key={`page-${i}`} onClick={this.onItemClick} eventKey={i}>
                {i}
              </NavDropdown.Item>
            )
          )}
        </NavDropdown>
      </Pagination.Item>);
  }
}

Ellipsis.propTypes = {
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
};


export default Ellipsis;
