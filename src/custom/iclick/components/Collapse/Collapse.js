import React, { Component } from "react";
import { Collapse } from "react-bootstrap";
import PropTypes from "prop-types";

export class CollapseWidget extends Component {
  state = {
    show: true
  }
  onClick = (e) => {
    e.preventDefault();
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    const { heading, children } = this.props;
    const { show } = this.state;
    return (
      <div className="widget">
        <h3 className="widget-title">
          <a
            data-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={show}
            onClick={this.onClick}
            className={!show ? "collapsed" : ""}
          >
            {heading}
          </a>
        </h3>
        <Collapse in={show}>
          <div className="widget-body">
            {children}
          </div>
        </Collapse>
      </div>
    );
  }
}

CollapseWidget.propTypes = {
  heading: PropTypes.string
};

CollapseWidget.defaultProps = {
  heading: ""
};


export default CollapseWidget;
