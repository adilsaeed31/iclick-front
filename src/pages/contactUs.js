import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";

const ContactUs = ({ router: { asPath } }) => (
  <Fragment>
    <div className="container">
      <Breadcrumbs isPage={true} pageName={asPath.replace(/-|\//gi, " ")} />

      <div id="map" />
      <div className="row">
        <div className="col-md-8">
          <h2 className="light-title">
            Write <strong>Us</strong>
          </h2>
          <form action="#">
            <div className="form-group required-field">
              <label htmlFor="contact-name">Name</label>
              <input type="text" className="form-control" id="contact-name" name="contact-name" required />
            </div>

            <div className="form-group required-field">
              <label htmlFor="contact-email">Email</label>
              <input type="email" className="form-control" id="contact-email" name="contact-email" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone Number</label>
              <input type="tel" className="form-control" id="contact-phone" name="contact-phone" />
            </div>

            <div className="form-group required-field">
              <label htmlFor="contact-message">What’s on your mind?</label>
              <textarea
                cols={30}
                rows={1}
                id="contact-message"
                className="form-control"
                name="contact-message"
                required
                defaultValue={""}
              />
            </div>

            <div className="form-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-4">
          <h2 className="light-title">
            Contact <strong>Details</strong>
          </h2>
          <div className="contact-info">
            <div>
              <i className="icon-phone" />
              <p>
                <a href="tel:">0201 203 2032</a>
              </p>
              <p>
                <a href="tel:">0201 203 2032</a>
              </p>
            </div>
            <div>
              <i className="icon-mobile" />
              <p>
                <a href="tel:">201-123-3922</a>
              </p>
              <p>
                <a href="tel:">302-123-3928</a>
              </p>
            </div>
            <div>
              <i className="icon-mail-alt" />
              <p>
                <a href="mailto:#">porto@gmail.com</a>
              </p>
              <p>
                <a href="mailto:#">porto@portotemplate.com</a>
              </p>
            </div>
            <div>
              <i className="icon-skype" />
              <p>porto_skype</p>
              <p>porto_template</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

ContactUs.propTypes = {
  router: PropTypes.object.isRequired
};

export default ContactUs;
