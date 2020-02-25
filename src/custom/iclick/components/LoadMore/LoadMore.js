import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoadMore = (props) => {
  const {
    hasNextPage, loadNextPageAndAppend
  } = props;
  console.log(props);
  return (
    <div className="text-center">
      {hasNextPage && <Button variant="secondary" onClick={loadNextPageAndAppend} size="sm">Load more</Button>}
    </div>
  );
};

LoadMore.propTypes = {
  endCursor: PropTypes.string,
  hasNextPage: PropTypes.bool,
  hasPreviousPage: PropTypes.bool,
  loadNextPage: PropTypes.func,
  loadPreviousPage: PropTypes.func,
  startCursor: PropTypes.string
};

export default LoadMore;
