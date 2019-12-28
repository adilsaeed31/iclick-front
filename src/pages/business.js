import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import Breadcrumbs from "custom/iclick/components/Breadcrumbs";
import AlertDialogBox from "custom/iclick/components/AlertDialogBox";

const Business = ({ router: { asPath } }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = (event) => {
    event.preventDefault();
    
    setOpen(true);
  };

  return (
    <Fragment>
      <div className="container">
        <Breadcrumbs isPage={true} pageName={asPath.replace(/-|\//gi, " ")} />

        <div className="container">
          <div className="row">
            <div className="col text-center my-5">
              <h2>Business</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form onSubmit={handleOpen}>
                <div className="form-group required-field">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    type="text"
                    className="form-control fullwidth"
                    id="contact-name"
                    name="contact-name"
                    required
                  />
                </div>

                <div className="form-group required-field">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    type="email"
                    className="form-control fullwidth"
                    id="contact-email"
                    name="contact-email"
                    required
                  />
                </div>

                <div className="form-group required-field">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control  fullwidth"
                    id="contact-phone"
                    name="contact-phone"
                    required
                  />
                </div>

                <div className="form-group required-field">
                  <label htmlFor="contact-company">Company Name</label>
                  <input type="text" className="form-control  fullwidth" id="contact-company" name="contact-company" />
                </div>

                <div className="form-group required-field">
                  <label htmlFor="contact-message">What’s on your mind?</label>
                  <textarea
                    cols={30}
                    rows={1}
                    id="contact-message"
                    className="form-control fullwidth"
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
          </div>
        </div>
      </div>
      <AlertDialogBox isOpen={open} handleClose={handleClose} title={"Business Idea!"} desc="Thank you for choosing us. Please allow us at least 24 hours to set meeting with you on your idea." />
    </Fragment>
  );
};
Business.propTypes = {
  router: PropTypes.object.isRequired
};

export default Business;
