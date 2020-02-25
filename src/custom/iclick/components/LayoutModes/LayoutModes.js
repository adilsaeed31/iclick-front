import React from "react";
/**
 *
 */
export default function LayoutModes(props) {
  const onClick = (e) => {
    e.preventDefault();
    const mode = e.currentTarget.getAttribute("data-value");
    props.setLayout && props.setLayout(mode);
  };

  return (
    <div className="layout-modes">
      <a
        href="#"
        className={`layout-btn btn-grid ${props.layout === "grid" ? "active" : ""}`}
        data-value="grid"
        title="Grid"
        onClick={onClick}
      >
        <i className="icon-mode-grid" />
      </a>
      <a
        href="#"
        className={`layout-btn btn-list ${props.layout === "list" ? "active" : ""}`}
        data-value="list"
        title="List"
        onClick={onClick}
      >
        <i className="icon-mode-list" />
      </a>
    </div>
  );
}
