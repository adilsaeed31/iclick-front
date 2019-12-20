import React from "react";
import PropTypes from "prop-types";
import Link from "custom/iclick/components/Link";

class Logo extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  };
  render() {
    const { name } = this.props;
    return (
      <Link route="/" className="logo">
        <img alt={name} src="/static/images/iclicklogo.png" />
      </Link>
    );
  }
}

export default Logo;
