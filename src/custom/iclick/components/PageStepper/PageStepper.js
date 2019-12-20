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

      <ul className="pagination">
         <li className="page-item">
            <a className="page-link page-link-btn" href="#">
              {pageInfo.hasPreviousPage && <a className="icon-angle-left" onClick={this.handlePreviousClick}></a>}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
          </li>
          <li className="page-item"><span className="page-link">...</span></li>
          <li className="page-item">
            <a className="page-link page-link-btn" href="#">
              {pageInfo.hasNextPage && <a className="icon-angle-right" onClick={this.handleNextClick}></a>}
            </a>
          </li>
      </ul> 
    );
  }
}
