import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ProductGridHero extends Component {
  static propTypes = {
    tag: PropTypes.object
  }

  static defaultProps = {
    tag: {}
  }

  render() {
    const {
      tag: { heroMediaUrl }
    } = this.props;

    if (!heroMediaUrl) return null;

    return (
      <section>
        <div>
          <div>
            <img src={heroMediaUrl} alt="Product category" />
          </div>
        </div>
      </section>
    );
  }
}
