import React from "react";
import { Pagination, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
import Ellipsis from "custom/iclick/components/Ellipsis";

const Paginating = (props) => {
  const {
    active, setActive, totalRecords, itemsPerPage
  } = props; // 5
  const totalPages = Math.ceil(totalRecords / itemsPerPage); // 8
  const maxPages = totalPages <= 7 ? totalPages : 7;
  const remainingPages = totalPages - active;
  const items = [];

  const onItemClick = (e) => {
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }

    const value = e.currentTarget.innerHTML;
    if (Number.isNaN(value)) { return; }
    setActive(parseInt(value, 10));
  };

  const onNextClick = () => {
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }

    if (active < totalPages) {
      setActive(active + 1);
    }
  };

  const onPrevClick = () => {
    if (typeof window !== "undefined" && typeof window.scrollTo === "function") {
      window.scrollTo({ top: 400, behavior: "smooth" });
    }

    if (active > 1) {
      setActive(active - 1);
    }
  };

  for (let p = 1; p <= maxPages && totalPages !== 0; p += 1) {
    if (totalPages <= maxPages) {
      items.push(<Pagination.Item onClick={onItemClick} key={p} active={p === active}>
        {p}
      </Pagination.Item>);
    } else if (remainingPages >= maxPages - 4 && active < maxPages - 2) {
      if (p === maxPages - 1) {
        items.push(<Ellipsis setActive={setActive} />);
      } else if (p === maxPages) {
        items.push(<Pagination.Item onClick={onItemClick} key={`page-${totalPages}`} >
          {totalPages}
        </Pagination.Item>);
      } else {
        items.push(<Pagination.Item onClick={onItemClick} key={`page-${p}`} active={p === active}>
          {p}
        </Pagination.Item>);
      }
    } else if (remainingPages <= maxPages - 4 && active >= maxPages - 4) {
      if (p === 2) {
        items.push(
          // <Pagination.Ellipsis />
          <Ellipsis setActive={setActive} />);
      } else if (p === 1) {
        items.push(<Pagination.Item onClick={onItemClick} key={`page-${p}`} >
          {p}
        </Pagination.Item>);
      } else {
        items.push(<Pagination.Item
          onClick={onItemClick}
          key={`page-${totalPages - (maxPages - p)}`}
          active={totalPages - (maxPages - p) === active}
        >
          {totalPages - (maxPages - p)}
        </Pagination.Item>);
      }
    } else if (remainingPages >= maxPages - 3 && active >= maxPages - 3) {
      if (p === 2 || p === maxPages - 1) {
        items.push(
          // <Pagination.Ellipsis />
          <Ellipsis setActive={setActive} />);
      } else if (p === maxPages) {
        items.push(<Pagination.Item onClick={onItemClick} key={`page-${totalPages}`} >
          {totalPages}
        </Pagination.Item>);
      } else if (p === 1) {
        items.push(<Pagination.Item onClick={onItemClick} key={`page-${p}`}>
          {p}
        </Pagination.Item>);
      } else {
        items.push(<Pagination.Item
          onClick={onItemClick}
          key={`page-${active - (-p + (maxPages - 3))}`}
          active={active - (-p + (maxPages - 3)) === active}
        >
          {active - (-p + (maxPages - 3))}
        </Pagination.Item>);
      }
    }
  }

  return (
    <nav className="toolbox toolbox-pagination">
      <PageSizeSelector
        pageSize={props.itemsPerPage}
        onChange={props.setPageSize}
        labelValue={"Show:"}
        classes={"toolbox-item toolbox-show"}
        selectorName={"count"}
      />
      <Pagination>
        <Pagination.Prev className="prev" onClick={onPrevClick} disabled={!!((active === 1 || !totalPages))} />
        {items}
        <Pagination.Next className="next" onClick={onNextClick} disabled={!!((active === totalPages || !totalPages))} />
      </Pagination>
    </nav>
  );
};

Paginating.propTypes = {
  active: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number,
  setActive: PropTypes.func.isRequired,
  showing: PropTypes.number,
  totalRecords: PropTypes.number
};

Paginating.defaultProps = {
  totalRecords: 0,
  showing: 0,
  itemsPerPage: 12
};

export default Paginating;

// import React, { Component } from "react";
// import PageSizeSelector from "custom/iclick/components/PageSizeSelector";
// import PageStepper from "custom/iclick/components/PageStepper";

// class TagPagination extends Component {
//   render() {
//     const { pageInfo, pageSize, setPageSize } = this.props;
//     console.log(this.props);
//     return (
//       <nav className="toolbox toolbox-pagination">
//         <PageSizeSelector
//           pageSize={pageSize}
//           onChange={setPageSize}
//           labelValue={"Show:"}
//           classes={"toolbox-item toolbox-show"}
//           selectorName={"count"}
//         />
//         {pageInfo && <PageStepper pageInfo={pageInfo} />}
//       </nav>
//     );
//   }
// }

// export default TagPagination;
