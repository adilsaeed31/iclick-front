import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "@reactioncommerce/components/Button/v1";

export default class PageStepper extends Component {
  static propTypes = {
    pageInfo: PropTypes.shape({
      hasNextPage: PropTypes.bool,
      hasPreviousPage: PropTypes.bool,
      loadNextPage: PropTypes.func,
      loadPreviousPage: PropTypes.func
    }).isRequired,
    theme: PropTypes.object
  }

  handleNextClick = () => {
    const { pageInfo } = this.props;

    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    pageInfo.loadNextPage();
  }

  handlePreviousClick = () => {
    const { pageInfo } = this.props;

    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    pageInfo.loadPreviousPage();
  }

  render() {
    const { pageInfo } = this.props;

    return (
      <div>
        <div>{pageInfo.hasPreviousPage && <Button onClick={this.handlePreviousClick}>Previous</Button>}</div>
        <div>{pageInfo.hasNextPage && <Button onClick={this.handleNextClick}>Next</Button>}</div>
      </div>
    );
  }
}