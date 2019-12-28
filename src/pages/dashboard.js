import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";

const Dashboard = ({ router: { asPath } }) => (
  <Fragment>
    <div className="container">
      <Breadcrumbs isPage={true} pageName={asPath.replace(/-|\//gi, " ")} />

      <div className="row">
        <div className="col-lg-9 order-lg-last dashboard-content">
          <h2>My Dashboard</h2>
          <div className="alert alert-success alert-intro" role="alert">
            Thank you for registering with Porto - Premium Template.
          </div>

          <div className="alert alert-success" role="alert">
            Hello, <strong>Porto customer!</strong> From your My Account Dashboard you have the ability to view a
            snapshot of your recent account activity and update your account information. Select a link below to view or
            edit information.
          </div>

          <div className="mb-4" />
          <h3>Account Information</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  Contact Information
                  <a href="/" className="card-edit">
                    Edit
                  </a>
                </div>

                <div className="card-body">
                  <p>
                    John Doe
                    <br />
                    porto_shop@gmail.com
                    <br />
                    <a href="/">Change Password</a>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  newsletters
                  <a href="/" className="card-edit">
                    Edit
                  </a>
                </div>

                <div className="card-body">
                  <p>You are currently not subscribed to any newsletter.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              Address Book
              <a href="/" className="card-edit">
                Edit
              </a>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h4 className>Default Billing Address</h4>
                  <address>
                    You have not set a default billing address.
                    <br />
                    <a href="/">Edit Address</a>
                  </address>
                </div>
                <div className="col-md-6">
                  <h4>Default Shipping Address</h4>
                  <address>
                    You have not set a default shipping address.
                    <br />
                    <a href="/">Edit Address</a>
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="sidebar col-lg-3">
          <div className="widget widget-dashboard">
            <h3 className="widget-title">My Account</h3>
            <ul className="list">
              <li className="active">
                <a href="/">Account Dashboard</a>
              </li>
              <li>
                <a href="/">Account Information</a>
              </li>
              <li>
                <a href="/">Address Book</a>
              </li>
              <li>
                <a href="/">My Orders</a>
              </li>
              <li>
                <a href="/">Billing Agreements</a>
              </li>
              <li>
                <a href="/">Recurring Profiles</a>
              </li>
              <li>
                <a href="/">My Product Reviews</a>
              </li>
              <li>
                <a href="/">My Tags</a>
              </li>
              <li>
                <a href="/">My Wishlist</a>
              </li>
              <li>
                <a href="/">My Applications</a>
              </li>
              <li>
                <a href="/">Newsletter Subscriptions</a>
              </li>
              <li>
                <a href="/">My Downloadable Products</a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </Fragment>
);

Dashboard.propTypes = {
  router: PropTypes.object.isRequired
};

export default Dashboard;
