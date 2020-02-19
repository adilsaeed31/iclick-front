import React from "react";
import Link from "custom/iclick/components/Link";
import { Tab, Tabs, NavItem, Nav } from "react-bootstrap";

const ProductDescription = (props) => (
  <div className="product-single-tabs">
    <Tab.Container id="left-tabs-example" defaultActiveKey="product-tab-desc">

      <Nav variant="tabs">
        <Nav.Item>
          <Nav.Link eventKey="product-tab-desc">Description</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="product-tab-tags">Tags</Nav.Link>
        </Nav.Item>
      </Nav>

      <Tab.Content>
        <Tab.Pane eventKey="product-tab-desc">
          <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </Tab.Pane>
        <Tab.Pane eventKey="product-tab-tags">
          {props.tags.map((tag) =>
            <h3 className="d-inline-block mr-3">
              <Link route={`/tag/${tag.slug}`} className="badge badge-secondary">{tag.name}</Link>
            </h3>)}
        </Tab.Pane>
      </Tab.Content>

    </Tab.Container>
  </div>
);

export default ProductDescription;
