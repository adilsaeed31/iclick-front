import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { observer, inject } from "mobx-react";
import Helmet from "react-helmet";
import HomePage from "custom/iclick/components/HomePage";

@inject("routingStore")
@observer
class Home extends Component {
  static propTypes = {
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    })
  }

  render() {
    const { shop } = this.props;

    return (
      <Fragment>
        <Helmet>
          <title>{shop && shop.name}</title>
          <meta name="description" content={shop && shop.description} />
        </Helmet>
        <HomePage />
      </Fragment>
    );
  }
}

export default Home;
