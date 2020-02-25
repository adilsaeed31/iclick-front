import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import Link from "custom/iclick/components/Link";

@inject("routingStore")
export default class HomeGridEmptyMessage extends Component {
  static propTypes = {
    actionMessage: PropTypes.string,
    notFoundMessage: PropTypes.string,
    resetLink: PropTypes.string,
    routingStore: PropTypes.object
  }

  static defaultProps = {
    actionMessage: "Clear filters",
    notFoundMessage: "Sorry! We couldn't find what you're looking for."
  }

  render() {
    const { actionMessage, notFoundMessage, resetLink: providedResetLink, routingStore } = this.props;

    let resetLink = providedResetLink || routingStore.pathname;
    if (!providedResetLink && routingStore && routingStore.query && routingStore.query.slug) {
      resetLink = `${routingStore.pathname}/${routingStore.query.slug}`;
    }

    return (
      <div>
        <div>{notFoundMessage}</div>
        <div>
          <Link route={resetLink}>{actionMessage}</Link>
        </div>
      </div>
    );
  }
}
